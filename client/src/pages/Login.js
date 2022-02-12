import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-white w-1/4 shadow-xl px-8 py-8 rounded-xl flex flex-col gap-16 items-center justify-start">
            <div>
                {/* 
                - Logo
                - Spiel
            */}
                <h1 className="font-bold text-2xl text-gray-600">Log In</h1>
            </div>
            <div className="flex flex-col items-center gap-10 w-full">
                <div className="w-full">
                    <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" placeholder="Email" />
                </div>
                <div className="w-full">
                    <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" type="password" placeholder="Password" />
                </div>
                <div className="w-full">
                    <button className="font-bold text-white text-xl bg-green-400 rounded-xl py-3 w-full">Log In</button>
                </div>
            </div>
            <div className="flex flex-row gap-6">
                <Link to="/login" className="text-blue-700 no-underline hover:underline">
                    Forgot password?
                </Link>
                <Link to="/register" className="text-blue-700 no-underline hover:underline">
                    Need an account
                </Link>
            </div>
        </div>
    );
};

export default Login;
