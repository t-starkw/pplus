import React, { useState } from 'react';
import Auth from '../utils/auth';
import { NavLink } from 'react-router-dom'
import "../styles/App.css";

function Nav() {
    const [activeMenu, setActiveMenu] = useState()

    return (
        <>

            <nav className="bg-slate-900 border-gray px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <img src="../logo192.png" className="h-10 mr-3 sm:h-16" alt="PPlus Logo" />
                        <span className="self-center text-xl font-inter whitespace-nowrap dark:text-white">Password Plus</span>
                    </div>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  " aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className=" w-full md:block md:w-auto" id="navbar-hamburger">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-inter md:border-0">
                            <li>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "orange" : "white",
                                        };
                                    }}
                                    className="block py-2 pl-3 pr-4 rounded hover:bg-orange-400 "
                                >
                                    Home
                                </NavLink>
                            </li>

                            {Auth.loggedIn() ? (
                                <>
                                    <li>
                                        <NavLink
                                            to="/generator"
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "orange" : "white",
                                                };
                                            }}
                                            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-orange-400 "
                                        >
                                            Generator
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/profile"
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "orange" : "white",
                                                };
                                            }}
                                            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-orange-400 "
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                    <NavLink onClick={Auth.logout} className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-orange-400 ">Logout</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li >
                                        <NavLink
                                            to="/login"
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "orange" : "white",
                                                };
                                                
                                            }}
                                            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-orange-400 "
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/signup"
                                            style={({ isActive }) => {
                                                return {
                                                    color: isActive ? "orange" : "white",
                                                };
                                            }}
                                            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-orange-400 "
                                        >
                                            Signup
                                        </NavLink>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;