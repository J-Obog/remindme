import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth-form-container">
            <div>
                {/* 
                - Logo
                - Spiel
            */}
                <h1 className="auth-form-htext">Log In</h1>
            </div>
            <div className="flex flex-col items-center gap-10 w-full">
                <div className="w-full">
                    <input className="auth-form-input" placeholder="Email" />
                </div>
                <div className="w-full">
                    <input className="auth-form-input" type="password" placeholder="Password" />
                </div>
                <div className="w-full">
                    <button className="auth-form-btn">Log In</button>
                </div>
            </div>
            <div className="flex flex-row gap-6">
                <Link to="/login" className="auth-form-link">
                    Forgot password?
                </Link>
                <Link to="/register" className="auth-form-link">
                    Need an account
                </Link>
            </div>
        </div>
    );
};

export default Login;
