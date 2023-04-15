import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import app from '../firebase.config';
import { Link } from 'react-router-dom';


const Login = () => {

    const auth = getAuth(app)
    // user 
    const [user, setUser] = useState('')

    // error showing 
    const [error, setError] = useState('')


    // success showing 
    const [success, setSuccess] = useState('');



    // handle login 
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);


        // validation   
        setError('')
        setSuccess('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide one uppercase word')
            return

        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('please provide one number at least')
            return
        }
        else if (password.length < 6) {
            setError('please give at least 6 characters')
            return
        }
        setSuccess("Logged in successfully")
        form.reset();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                console.log(loggedUser)
                setSuccess('User logged in successfully')
                setError('')
            })
            .catch(err => {
                setError(err)
            })
    };



    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form className="bg-white rounded-lg shadow-md p-8" onSubmit={handleLogin}>
                <h2 className="text-xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2" >Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-3" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-3" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="remember_me" className="inline-flex items-center">
                        <input type="checkbox" id="remember_me" name="remember_me" className="form-checkbox h-5 w-5 text-indigo-600" />
                        <span className="ml-2 text-gray-700 font-bold">Remember me</span>
                    </label>
                </div>
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-indigo focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
            </form>
            <small>New to this website ? Please <Link to="/register">Register</Link></small>
            <p className='text-red-500 font-medium'>{error}</p>
            <p className='text-green-500 font-medium'>{success}</p>
        </div>
    );
};

export default Login;