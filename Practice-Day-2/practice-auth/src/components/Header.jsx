import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => console.log('logged Out Successfully'))
            .catch(err => console.log(err.message))
    }

    return (
        <header className="bg-gray-800">
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-6 px-12">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/" className="font-semibold text-xl tracking-tight">My Website</Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ">
                            About
                        </Link>
                        <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                            Contact
                        </Link>
                    </div>
                    <div>
                        {
                            user ?
                                <div className='flex items-center'>
                                    <p className='text-white'>{user?.email}</p>
                                    <button className='text-slate-800 font-medium ms-2 px-2 rounded-md hover:bg-red-500 hover:text-slate-100 transition-all duration-300 bg-slate-200' onClick={handleLogOut}>LogOut</button>
                                </div>
                                :
                                <>
                                    <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                                        Login
                                    </Link>
                                    <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 ms-2">
                                        Register
                                    </Link>
                                </>

                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;