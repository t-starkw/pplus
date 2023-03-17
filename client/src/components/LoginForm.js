import React from 'react';
import "../styles/App.css";

function Login() {

    return (
        <>
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                    <form action="">
                        <div class="mt-4">
                            <div>
                                <label class="block" for="email">Email</label>
                                <input type="text" placeholder="Email"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                            </div>
                            <div class="mt-4">
                                <label class="block">Password</label>
                                <input type="password" placeholder="Password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                            </div>
                            <div class="flex items-baseline justify-between">
                                <button class="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600">Login</button>
                                <a href="/signup" class="text-sm text-blue-600 hover:underline">New here? Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;