import React from 'react'

function Landing() {
    return (
        <>
            <div className="py-20 bg-gray">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        How it Works
                    </h2>
                    <div class="flex sm:flex-col md:flex-row items-center justify-center bg-gray-100">
                        <div class="px-8 py-6 md:w-1/3 sm:w-4/5 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Generate and customize your passwords
                            </h3>
                        </div>
                        <div class="px-8 py-6 md:w-1/3 sm:w-4/5 mr-10 mt-4 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Store your new passwords to your profile
                            </h3>
                        </div>
                        <div class="px-8 py-6 md:w-1/3 sm:w-4/5 mt-4 sm:mr-10 mb-5 text-left bg-orange-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Keep track of your passwords at home and on the go
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