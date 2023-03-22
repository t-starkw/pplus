import React, { useState } from "react";
import { getPwd } from "../utils/pwdGenerator"
import { useMutation } from "@apollo/client";
import { SAVE_PWD } from "../utils/mutations";
import Auth from '../utils/auth';


function StorePwd() {

    const [field, setField] = useState({ site: "", password: getPwd(), });
    const [savePwd, { error, data }] = useMutation(SAVE_PWD);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setField({
            ...field,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(field);
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(token);
        if (!token) {
            return false;
        }
        try {
            await savePwd({
                variables: { input: field }
            })
            window.location.replace("/profile")
        } catch (err) {
            console.error(err);
            console.log(JSON.stringify(err, null, 2));
        }

    }
    return (
        <>
            <div className="py-20 bg-gray w-screen">
                <div className="container mx-auto px-6 ">
                    <div class="flex sm:flex-col md:flex-row items-center justify-center bg-gray-100">
                        <div class="px-8 py-6 md:w-1/3 sm:w-4/5 mr-10 mt-8 mb-5 text-left bg-orange-400 shadow-lg min-h-full">
                            <h3 className="text-4xl font-semibold mb-8 text-gray">
                                Your New Password:
                            </h3>
                            <div>
                                <textarea
                                    readOnly
                                    id="password"
                                    value={getPwd()}
                                    aria-label="Generated Password"
                                    class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"
                                ></textarea>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <label class="block" for="pass-acc" className="text-2xl">Assign this password to an account</label>
                                    <input
                                        type="site"
                                        placeholder="Account Name"
                                        name="site"
                                        value={field.site}
                                        onChange={handleChange}
                                        class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-slate-600"></input>
                                </div>
                                <div class="flex items-baseline justify-between">
                                    <button class="px-6 py-2 mt-4 text-white bg-slate-800 rounded-lg hover:bg-slate-600" type="submit">Store Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StorePwd;