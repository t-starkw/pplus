import React, { useState } from "react";

function GeneratorComp() {

    const [len, setLen] = useState();
    const [optionsArray, setOptionsArray] = useState([]);

    const handleLength = (e) => {
        setLen( e.target.value);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if (checked) {
            setOptionsArray([
                ...optionsArray, value
            ])
        } else {
            setOptionsArray(optionsArray.filter( (e) => (e !== value) ));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(optionsArray)
        console.log(len)
    }

    return (
        <>
            <div className="py-20 bg-gray w-screen">
                <div className="container mx-auto px-6 ">
                    <div className="flex sm:flex-col md:flex-row items-center justify-center bg-gray-100">
                        <div className="px-8 py-6 md:w-1/3 sm:w-4/5 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg min-h-full">
                            <h3 className="text-4xl font-semibold mb-8 text-gray">
                                Password Generator
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="special-char"
                                        value="special-char"
                                        type="checkbox"
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                    <label for="special-char" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include special characters</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="num-char"
                                        value="num-char"
                                        type="checkbox"
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                    <label for="num-char" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include numeric characters</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="low-char"
                                        value="low-char"
                                        type="checkbox"
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                    <label for="low-char" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include lowercase characters</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="up-char"
                                        value="up-char"
                                        type="checkbox"
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                    <label for="up-char" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include uppercase characters</label>
                                </div>
                                <div>
                                    <label className="block" for="pass-len">How many characters would you like your password to contain?</label>
                                    <input
                                        type="text"
                                        placeholder="Password Length"
                                        name="pass-len"
                                        value={len}
                                        onChange={handleLength}
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <button className="px-6 py-2 mt-4 text-white bg-slate-800 rounded-lg hover:bg-slate-600" type="submit">Next</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneratorComp