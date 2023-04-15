import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import App from '../App';
import app from '../firebase.config';



const auth = getAuth(app)

const Registration = () => {

    // google sign in 
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    };

    // github sign in 
    const handleGitHubSignIn = () => {
        
    }

    return (
        <>
            <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl mb-6 font-medium text-gray-800">Register</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="text-gray-700 font-medium block mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="border border-gray-400 p-2 w-full rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="text-gray-700 font-medium block mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="border border-gray-400 p-2 w-full rounded-lg" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="border border-gray-400 p-2 w-full rounded-lg" required />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="text-gray-700 font-medium block mb-2">Password</label>
                    <input type="password" id="password" name="password" className="border border-gray-400 p-2 w-full rounded-lg" required />
                </div>
                <div className="mt-4">
                    <label htmlFor="confirmPassword" className="text-gray-700 font-medium block mb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="border border-gray-400 p-2 w-full rounded-lg" />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Register</button>
                </div>
            </form>
            <button className='mt-10 flex mx-auto text-white font-semibold bg-lime-600 px-4 py-1 rounded-sm shadow-md hover:bg-lime-700 transition duration-200 ' onClick={handleGoogleSignIn} >Google</button>
            <button className='mt-10 flex mx-auto text-white font-semibold bg-lime-600 px-4 py-1 rounded-sm shadow-md hover:bg-lime-700 transition duration-200 ' onClick={handleGitHubSignIn} >GitHub</button>
        </>
    );
};

export default Registration;