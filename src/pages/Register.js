import React from 'react'
import { useState } from 'react';
import RegisterImage from '../register.png'
import { Fetch } from '../logic/logic.js';
export const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        gender: '',
        phoneNumber: '',
        email: '',
        image: null,
        skills: '',
        address: '',
        password: '',
        cv: null,
    });


    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if(name==='cv')
        setFormData({
            ...formData,
            [name]: files[0], // For image and CV
        });
    };

    const validateForm = () => {
        // Basic validation logic
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            setErrorMessage('All fields are required.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMessage('Email is invalid.');
            return false;
        }
        if (formData.password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await Fetch.register(formData)
        if (validateForm()) {
        }
    };


    return (

        <div className="flex flex-row items-center justify-center min-h-screen w-screen bg-gray-900 p-6">
            <div className='w-1/2'>  < img src={RegisterImage} alt={'2'} className='fixed top-1/3 w-1/3' /></div>
            <form onSubmit={handleSubmit} className="bg-white p-6 align-middle justify-center rounded-lg shadow-md w-1/2">
                <h2 className="text-lg font-bold mb-4">Register</h2>
                <label className='mb-2'>First name</label>

                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="First Name"
                />
                <label className='mb-2'>Last name</label>

                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Last Name"
                />
                <label className='mb-2'>Username</label>

                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Username"
                />
                <label className='mb-2'>Gender</label>

                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label className='mb-2'>Phone </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Phone Number"
                />
                <label className='mb-2'>Email</label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Email"
                />

                <label className=' block'>Skills</label>

                <input
                    type="text"

                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4 mt-5"
                    placeholder="Skills (comma separated)"
                />
                <label className='mb-2'>Address</label>

                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Address"
                />
                <label className='mb-2'>Password</label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Password"
                />

                <div className='flex flex-row justify-between '>
                    <input
                        type="file"
                        name="cv"
                        onChange={handleFileChange}
                        className="w-full mb-4"
                        style={{ display: 'none' }}
                    />
                    <label
                        htmlFor="file-upload"
                        className="flex flex-col text-center cursor-pointer justify-center w-1/2 bg-blue-500 text-white p-2 rounded-3xl  h-48 m-4"
                    >
                        Upload your CV
                    </label>


                    <input
                        type="file"
                        id="file-upload"
                        name ="image"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    <label
                        htmlFor="file-upload"
                        className="flex flex-col text-center cursor-pointer justify-center w-1/2 bg-blue-500 text-white p-2 rounded-3xl  h-48 m-4"
                    >
                        Upload your image
                    </label>
                </div>

                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <button
                    type="submit"

                    className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

