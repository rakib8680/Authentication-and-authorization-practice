import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleSignIn = event => {
        event.preventDefault();
        setSuccess('')
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        // sign in user 
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Logged in successfully')
                navigate('/services')

            })
            .catch(err => console.log(err.message))
    }




    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignIn}>
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="email"
                        type="text"
                        name='email'
                        placeholder="Email"
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
                        name='password'
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"

                    >
                        Sign In
                    </button>
                </div>
                <div className="mt-5 text-xs">
                    <p className="inline-block align-baseline text-slate-300 mr-3">
                        Don't have an account yet?
                    </p>
                    <a href="/register" className="text-blue-500 hover:text-blue-800 text-xs"  >
                        Sign up here.
                    </a>
                </div>
                <p className='text-green-500 relative top-5 text-center text-sm'>{success}</p>
            </form>
        </div>
    );
};

export default Login;
