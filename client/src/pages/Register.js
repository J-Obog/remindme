import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-white w-1/4 shadow-xl px-8 py-8 rounded-xl flex flex-col gap-16 items-center justify-start">
            <div>
                {/* 
                - Logo
                - Spiel
            */}
                <h1 className="font-bold text-2xl text-gray-600">Sign Up</h1>
            </div>
            <div className="flex flex-col items-center gap-10 w-full">
                <div className="flex flex-row gap-5 w-full">
                    <div>
                        <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" placeholder="First name" />
                    </div>
                    <div>
                        <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" placeholder="Last name" />
                    </div>
                </div>
                <div className="w-full">
                    <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" placeholder="Email" />
                </div>
                <div className="w-full">
                    <input className="text-xl text-gray-800 border-b-2 border-gray-200 outline-none w-full" type="password" placeholder="Password" />
                </div>
                <div className="w-full">
                    <button className="font-bold text-white text-xl bg-green-400 rounded-xl py-3 w-full">Sign Up</button>
                </div>
            </div>
            <div>
                <Link to="/login" className="text-blue-700 no-underline hover:underline">
                    Already have an account?
                </Link>
            </div>
        </div>
    );
};

export default Register;
