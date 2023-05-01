import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="md:text-9xl text-6xl font-bold text-gray-50 mb-4">404</div>
            <p className="text-gray-300 text-2xl font-medium mb-8">Oops! Page not found.</p>
            <p href="/" className="text-gray-300 hover:text-gray-50 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block -mt-px mr-1 stroke-current text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <Link to='/services'>Back to Home Page</Link>
            </p>
        </div>
    )
};

export default ErrorPage;