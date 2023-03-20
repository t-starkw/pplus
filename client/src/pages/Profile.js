import React from 'react';

function Profile() {
    return (
        <>
            <div className="py-20 bg-gray w-screen max-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">
                        HI Person Profile
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-100">
                        <div className="px-8 py-6 h-screen w-full sm:w-1/2 sm:mr-10 mt-8 mb-5 text-left bg-slate-400 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Generate and customize your passwords
                            </h3>
                        </div>
                        <div className="px-8 py-6 h-screen w-full sm:w-1/2 mt-8 mb-5 text-left bg-slate-300 shadow-lg">
                            <h3 className="text-2xl mb-8 text-gray">
                                Your Passwords
                            </h3>
                            {/* dropdown list of pwds and account titles */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;