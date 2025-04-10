import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acknowledged: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <div className="logo-placeholder">
                {/* Placeholder for Concordia University logo */}
            </div>
            <h2 className="signup-title">Sign Up</h2>
            <div className="underline"></div>
            <form onSubmit={handleSubmit} className="signup-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="acknowledged"
                        name="acknowledged"
                        checked={formData.acknowledged}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="acknowledged">I acknowledge...</label>
                </div>

                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default SignUp;