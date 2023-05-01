import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    // error 
    const [error, setError] = useState('')

    // success 
    const [success, setSuccess] = useState('')

    // context api 
    const { registerUser } = useContext(AuthContext)

    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value



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
        }
        else if (password != confirm) {
            setError("Password didn't matched");
            return
        }
        setSuccess('Account registered successfully')
        form.reset()

        // create new user 
        registerUser(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(err=>console.log(err.message))
    }


    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form className="bg-gray-800 shadow-md rounded px-10 py-8 mb-4 w-96" onSubmit={handleRegistration}>
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="confirm-password"
                        type="password"
                        name="confirm"
                        placeholder="Confirm Password"
                    />
                </div>
                <p className='text-red-500 relative bottom-4'>{error}</p>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"

                    >
                        Register
                    </button>
                </div>
                <div className="mt-5 text-xs">
                    <p className="inline-block align-baseline text-slate-300 mr-3">
                        Already have an account ?
                    </p>
                    <a href="/login" className="text-blue-500 hover:text-blue-800 text-xs"  >
                        Login here.
                    </a>
                </div>
            <p className='text-green-500 relative top-5 text-center'>{success}</p>
            </form>
        </div>
    );
};

export default Register;
