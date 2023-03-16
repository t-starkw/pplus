import React from "react";

function StorePwd() {
    return (
        <>
            <div className="py-20 bg-gray ">
                <div className="container mx-auto px-6 ">
                    <div class="flex sm:flex-col md:flex-row items-center justify-center bg-gray-100">
                        <div class="px-8 py-6 md:w-1/3 sm:w-4/5 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg min-h-full">
                            <h3 className="text-4xl font-semibold mb-8 text-gray">
                                Password Generator
                            </h3>
                            <div>
                                <label class="block" for="new-pass" className="text-2xl">Your new password:</label>
                                <input type="text" placeholder="Ahsbb&&637299@1234" name="new-pass"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                            </div>
                            <div className="mt-4">
                                <label class="block" for="pass-acc" className="text-2xl">Assign this password to an account</label>
                                <input type="text" placeholder="Account Name" name="pass-acc"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                            </div>
                            <div class="flex items-baseline justify-between">
                                <button class="px-6 py-2 mt-4 text-white bg-slate-800 rounded-lg hover:bg-slate-600">Store Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>


    )
}

export default StorePwd;