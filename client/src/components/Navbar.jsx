import React from 'react';
import {Link, NavLink} from'react-router-dom';

const Navbar=()=>{

    const isAuth = true;

    const activeStyles = {
        color: 'white'
    }

    return (
        <div className='flex py-4 justify-between items-center'>
            <span className="flex justify-center items-center w-6 h-6 dg-gray-600 text-xs text-white rounded-sm">Logo</span>
            {
                isAuth && (
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink
                            to={"/"}
                            href="/"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive}) => isActive?activeStyles:undefined}>
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to={"/posts"}
                            href="/posts"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive})=> isActive?activeStyles:undefined}>
                            My Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to={"/new"}
                            href="/new"
                            className='text-xs text-gray-400 hover:text-white'
                            style={({isActive})=> isActive?activeStyles:undefined}>
                            Add Post
                            </NavLink>
                        </li>
                    </ul>
                )
            }
            {
                isAuth ? (
                    <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
                        <button>Exit</button>
                    </div>
                ):(
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center bg-gray-400 text-xs text-white rounded-sm px-4 py-2 mx-1'>
                            <Link to = {'/login'}>Sign IN</Link>
                        </div>
                        <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
                            <Link to = {'/register'}>Sign UP</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar