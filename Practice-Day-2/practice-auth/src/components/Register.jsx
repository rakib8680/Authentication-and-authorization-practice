import React from 'react';

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form className="bg-gray-800 shadow-md rounded px-10 py-8 mb-4 w-96">
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="username"
                        type="text"
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
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="confirm-password">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline-gray"
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
