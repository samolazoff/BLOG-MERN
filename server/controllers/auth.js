import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const isUsed = await User.findOne({userName});

        if(isUsed){
            return res.json({
                message: 'Username is already exists'
            })
        }else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = new User({
                userName,
                password: hash
            });
            res.json({
                newUser,
                message: 'Registration was successful'
            })
            await newUser.save();
        }

    } catch (error) {
        console.log(error);
    }
};

export const login = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const newUser = await User.findOne({userName});
        if(newUser){
            const isLogin = await bcrypt.compare(password, newUser.password);
            if(isLogin){
                const token = jwt.sign(
                    {id: newUser._id},
                    process.env.JWT_SECRET,
                    {expiresIn: '300'});
                res.json({
                    token,
                    newUser,
                    message: 'Successful'
                })
            }else{
                res.json({
                    message: 'Password is wrong!!!'
                })
            }
        }else{
            res.json({
                message: 'Login is wrong!!!'
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if(!user){
            res.json({
                message: 'USER is NONE!!!'
            })
        }else{
            const token = jwt.sign(
                {id: user._id},
                process.env.JWT_SECRET,
                {expiresIn: '300'});
            res.json({user,token})
        }
    } catch (error) {
        res.json({message:'Aceess is NONE'})
    }
}