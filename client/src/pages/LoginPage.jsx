import React from 'react';
import {Link } from 'react-router-dom';

const  LoginPage = () => {
    return (
        <form
            method="post"
            onSubmit={e => e.preventDefault()}
            className="w-1/4 h-60 mx-auto mt-40">
                <h2 className='text-lg text-white text-center'> Sign In </h2>
                <label className='text-xs text-gray-400'>
                    Username:
                    <input 
                        type="text"
                        placeholder='Username'
                        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'/>
                </label>
                <label className='text-xs text-gray-400'>
                    Password:
                    <input 
                        type="password"
                        placeholder='Password'
                        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'/>
                </label>
                <div className="flex gap-4 justify-center mt-4">
                    <button
                        type="submit"
                        className="flex justify-center items-center text-xs text-white  bg-gray-400 rounded-sm py-2 px-4">
                        Sign In
                    </button>
                    <Link
                        to ={'/register'}
                        className="flex justify-center items-center text-xs text-white bg-gray-600 rounded-sm py-2 px-4">
                            No account
                    </Link>
                </div>
        </form>
    )
}

export default LoginPage;