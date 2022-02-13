import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth-form-container">
            <div>
                {/* 
                - Logo
                - Spiel
            */}
                <h1 className="auth-form-htext">Sign Up</h1>
            </div>
            <div className="flex flex-col items-center gap-10 w-full">
                <div className="flex flex-row gap-5 w-full">
                    <div>
                        <input className="auth-form-input" placeholder="First name" />
                    </div>
                    <div>
                        <input className="auth-form-input" placeholder="Last name" />
                    </div>
                </div>
                <div className="w-full">
                    <input className="auth-form-input" placeholder="Email" />
                </div>
                <div className="w-full">
                    <input className="auth-form-input" type="password" placeholder="Password" />
                </div>
                <div className="w-full">
                    <button className="auth-form-btn">Sign Up</button>
                </div>
            </div>
            <div>
                <Link to="/login" className="auth-form-link">
                    Already have an account?
                </Link>
            </div>
        </div>
    );
};

export default Register;
