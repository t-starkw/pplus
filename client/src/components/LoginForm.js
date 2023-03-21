import React, { useState } from 'react';
import "../styles/App.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error, data }] = useMutation(LOGIN_USER);


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            email: "",
            password: "",
        });
    };

    return (
        <>
            <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mt-4">
                            <div>
                                <label className="block" for="email">Email</label>
                                <input
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                    placeholder="Your Email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}></input>
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                    type="password"
                                    placeholder="Your Password"
                                    name="password"
                                    value={formState.password}
                                    onChange={handleChange}></input>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button 
                                className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                                type="submit">Login</button>
                                <a href="/signup" className="text-sm text-blue-600 hover:underline">New here? Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;