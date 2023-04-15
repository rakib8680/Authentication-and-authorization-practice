import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 px-4 py-3">
      <ul className="flex justify-between">
        <li className="mx-4">
          <Link to="/" className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/login" className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out">Login</Link>
        </li>
        <li className="mx-4">
          <Link to="/registration" className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out">Registration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
