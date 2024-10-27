import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import RegisterImage from "../register.png";
import { Fetch } from "../../logic/logic.js";

export const Register = () => {
    const [formData, setFormData] = useState({

        firstName: "alaa",
        lastName: "almedane",
        username: "alaaalmedane",
        gender: "Male",
        phoneNumber: "0934552101",
        email: "alaaalmedane@gmail.com",
        image: null,
        skills: "js,node",
        address: "daria",
        password: "alaa@Alaa1",
        cv: null,
    });
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value,
        }));
    };


    const validateForm = () => {
        // Basic validation logic
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password
        ) {
            setErrorMessage("All fields are required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMessage("Email is invalid.");
            return false;
        }
        if (formData.password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData()
        console.log(formData)
        for (const key in formData) {

            form.append(key, formData[key])
        }
        await Fetch.register(form);

        // if (validateForm()) {

        // }
    };

    return (
        <div className="flex flex-row items-center justify-center min-h-screen w-screen bg-violet-950 p-20  ">
            <img src={RegisterImage} alt={"2"} className="w-1/2 " />
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 align-middle justify-center rounded-lg shadow-md w-1/2"
            >
                <h2 className="text-lg font-bold mb-4">Register</h2>

                <CustomInput
                    handleChange={handleChange}
                    name="firstName"
                    label={"First Name"}
                    value={formData.firstName}
                />
                <CustomInput
                    handleChange={handleChange}
                    name="lastName"
                    label={"Last Name"}
                    value={formData.lastName}
                />
                <CustomInput
                    handleChange={handleChange}
                    name="username"
                    label={"Username"}
                    value={formData.username}
                />
                <label className="mb-2">Gender</label>

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

                <CustomInput
                    type={"tel"}
                    handleChange={handleChange}
                    name="phoneNumber"
                    label={"Phone"}
                    value={formData.phoneNumber}
                />

                <CustomInput
                    type={"email"}
                    handleChange={handleChange}
                    name="email"
                    label={"E-mail"}
                    value={formData.email}
                />


                <CustomInput
                    handleChange={handleChange}
                    name="skills"
                    label={"Skills"}
                    value={formData.skills}
                />

                <CustomInput
                    handleChange={handleChange}
                    name="address"
                    label={"Address"}
                    value={formData.address}
                />

                <CustomInput
                    handleChange={handleChange}
                    name="password"
                    label={"Password"}
                    value={formData.password}
                />

                <div className="flex flex-row justify-between">
                    <input
                        type="file"
                        name="cv"
                        id="cv"
                        onChange={handleChange}
                        className="w-full mb-4"
                        style={{ display: "none" }}
                    />
                    <label
                        htmlFor="cv"
                        className="flex flex-col text-center cursor-pointer justify-center w-1/2 bg-blue-500 text-white p-2 rounded-3xl  h-48 m-4"
                    >
                        Upload your image
                    </label>

                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />

                    <label
                        htmlFor="image"
                        className="flex flex-col text-center cursor-pointer justify-center w-1/2 bg-blue-500 text-white p-2 rounded-3xl  h-48 m-4"
                    >
                        Upload your image
                    </label>
                </div>

                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <button
                    type="submit"
                    className="w-full bg-purple-500 pe-96 text-white p-2 rounded hover:bg-purple-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export const CustomInput = ({ type, name, value, label, handleChange }) => {
    return (
        <div className="block">
            <label className="mb-2">{label}</label>
            <input
                type={type ? type : "text"}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={name}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
        </div>
    );
}