import React from 'react';

import "../styles/App.css";

function Nav() {
    return (
        <>

            <nav className="bg-slate-900 border-gray px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <img src="../logo192.png" className="h-10 mr-3 sm:h-16" alt="PPlus Logo" />
                        <span className="self-center text-xl font-inter whitespace-nowrap dark:text-white">Password Plus</span>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className=" w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-inter md:border-0">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/generator"
                                    className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray dark:hover:text-slate-900 md:dark:hover:bg-transparent">
                                    Generator</a>
                            </li>
                            <li>
                                <a href="/profile"
                                    className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray dark:hover:text-slate-900 md:dark:hover:bg-transparent">
                                    Profile</a>
                            </li>
                            <li>
                                <a href="/login"
                                    className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray dark:hover:text-slate-900 md:dark:hover:bg-transparent">
                                    Log In/Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;