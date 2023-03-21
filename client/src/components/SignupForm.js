import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";


function Signup() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <div class="flex items-center justify-center w-screen min-h-screen bg-gray-100">
                <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 class="text-2xl font-bold text-center">Sign up</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div class="mt-4">
                            <div class="mt-4">
                                <label class="block" for="email">Name</label>
                                <input
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                    placeholder="Your Name"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}></input>
                            </div>
                            <div class="mt-4" >
                                <label class="block" for="email">Email</label>
                                <input
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}></input>
                            </div>
                            <div class="mt-4">
                                <label class="block">Password</label>
                                <input
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                    type="password"
                                    placeholder="Your Password"
                                    name="password"
                                    value={formState.password}
                                    onChange={handleChange}></input>
                            </div>
                            <div class="flex items-baseline justify-between">
                                <button class="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600" type="submit">Sign up</button>
                                <a href="/login" class="text-sm text-blue-600 hover:underline ml-3">Have an account? Log in</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;