import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import App from '../App';
import app from '../firebase.config';
import User from './User';
import { Link } from 'react-router-dom';



const auth = getAuth(app)


const Registration = () => {

    // toggle password 
    const [showPassword, setShowPassword] = useState(false)

    // user 
    const [user, setUser] = useState({})

    // error 
    const [error, setError] = useState('')

    // success 
    const [success, setSuccess] = useState('')


    // google sign in 
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    };


    // github sign in 
    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                console.log(loggedUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }



    // create user with email and password 
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value


        // password validation 
        setError('')
        setSuccess('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide one upperCase word')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least one number')
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or above')
            return
        };

        // create firebase user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                setSuccess('User Created successfully')
                setError('')

            })
            .catch(err => {
                setError(err.message)
                setSuccess('')
            })

    }









    console.log(user)
    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-primary rounded-lg shadow-md">
                <h2 className="text-2xl mb-6 font-medium text-gray-800">Register</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="text-gray-700 font-medium block mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="border border-gray-400  p-2 w-full rounded-lg" />
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
                    <input type={showPassword ? "text" : "password"} id="password" name="password" className="border border-gray-400 p-2 w-full rounded-lg" required />
                    <p onClick={() => setShowPassword(!showPassword)} className="bg-secondary w-fit text-white rounded-3xl px-2 mt-2 hover:bg-error transition duration-300 cursor-pointer">show Pass</p>
                    <p className='font-normal text-red-500'>{error}</p>

                </div>
                <div className="mt-4">
                    <label htmlFor="confirmPassword" className="text-gray-700 font-medium block mb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="border border-gray-400 p-2 w-full rounded-lg" />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-error transition duration-300 ease-in-out">Register</button>
                </div>
                <Link className='btn btn-link text-neutral' to="/login">already have account ?</Link>
            </form>
            <p className='font-normal text-green-500 text-center'>{success}</p>

            <div className=''>
                <button className='mt-10 flex mx-auto text-white font-semibold bg-lime-600 px-4 py-1 rounded-sm shadow-md hover:bg-lime-700 transition duration-200 ' onClick={handleGoogleSignIn} >Google</button>
                <button className='mt-2 mb-20 flex mx-auto text-white font-semibold bg-slate-700 px-4 py-1 rounded-sm shadow-md hover:bg-slate-500 transition duration-200 ' onClick={handleGitHubSignIn} >GitHub</button>
            </div>
            <div className=' container mx-auto'> <User user={user}></User></div>
        </>
    );
};

export default Registration;