import React from 'react'

function Landing() {
    return (
        <>
            <div className="py-20 bg-gray w-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        How it Works
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-100">
                        <div className="px-8 py-6 h-30 w-4/5 sm:w-1/3 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Generate and customize your passwords
                            </h3>
                        </div>
                        <div className="px-8 py-6 h-30 w-4/5 sm:w-1/3 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Store your new passwords to your profile
                            </h3>
                        </div>
                        <div className="px-8 py-6 h-30 w-4/5 sm:w-1/3 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Keep track of your passwords from anywhere
                            </h3>
                        </div>
                    </div>

                    <button className="bg-gray text-slate-900 font-bold rounded-full py-4 px-8 mt-5 shadow-lg uppercase tracking-wider">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )

}

export default Landing