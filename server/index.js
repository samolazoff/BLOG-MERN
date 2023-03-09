import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000,
    DB_USER = process.env.DB_USER,
    DB_PASSWORD = process.env.DB_PASSWORD,
    DB_NAME = process.env.DB_NAME;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute)

async function start(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jk8w7ca.mongodb.net/${DB_NAME}`,);
        app.listen(PORT, () => {
            console.log(`Start server in ${PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();