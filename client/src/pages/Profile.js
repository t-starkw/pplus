import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useCopyToClipboard } from 'usehooks-ts'
import { RxCopy } from 'react-icons/rx';
import { IconContext } from "react-icons";
// import 'react-tooltip/dist/react-tooltip.css'
// import { Tooltip } from "react-tooltip";

function Profile() {
    // const [tipId, setTipId] = useState("no")
    // const [tipContent, setTipContent] = useState("no")
    // const handleCopy = async () => {
    //     setTipContent("Copied to clipboard! 📋");
    //     setTipId("copy")
    // }

    const [value, copy] = useCopyToClipboard()
    const { loading, data } = useQuery(GET_ME);
    let userData = data?.me || {};
    console.log(userData);

    const passwords = userData.savedPasswords;
    console.log(passwords);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return "please login to continue";
    }
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            <div className="py-20 bg-gray w-screen max-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-6xl font-bold text-center mb-4 text-slate-900">
                        Hi, {userData.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-100">
                        <div className="px-8 py-6  w-full sm:w-1/2 mt-8 mb-5 text-left bg-slate-400 shadow-lg">
                            <h3 className="text-4xl mb-2 text-center text-gray">
                                Your Passwords 🔑
                            </h3>

                            {/* dropdown list of pwds and account titles */}
                            <div className=" bg-gray-50 py-6 flex flex-col  relative overflow-hidden sm:py-12">
                                <div>
                                    <h2 className='text-xl mb-4'>
                                        {userData.pwdCount
                                            ? `Viewing ${userData.pwdCount} saved ${userData.pwdCount === 1 ? 'password' : 'passwords'}:`
                                            : 'No passwords saved yet!'}
                                    </h2>
                                </div>

                                <div className="bg-white w-full border border-gray-200 divide-y divide-gray-200">

                                    {userData.pwdCount > 0 &&
                                        passwords.map((item) => (
                                            <details className="">
                                                <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">{item.site}</summary>
                                                <div className='container inline-flex' >
                                                    <p className="pt-1 pb-3 px-4 flex-grow">{item.password}</p>
                                                    <IconContext.Provider
                                                        value={{ size: '25px', className: 'text-orange-500 mr-4 mb-1 hover:bg-orange-500 hover:text-gray hover:border hover:rounded' }}
                                                    >
                                                        <button onClick={() => copy(`${item.password}`)}><RxCopy /></button>
                                                    </IconContext.Provider>
                                                </div>
                                                {/* <Tooltip id="copy" place="right" /> */}
                                                {/* data-tooltip-id="copy" data-tooltip-content="Copied to clipboard! 📋"  */}
                                            </details>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;