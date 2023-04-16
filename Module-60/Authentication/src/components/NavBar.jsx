import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-800 px-4 py-3">
        <ul className="flex justify-between">
          <li className="mx-4">
            <Link to="/" className="text-primary hover:text-white font-medium transition duration-300 ease-in-out">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/login" className="text-primary hover:text-white font-medium transition duration-300 ease-in-out">Login</Link>
          </li>
          <li className="mx-4">
            <Link to="/registration" className="text-primary hover:text-white font-medium transition duration-300 ease-in-out">Registration</Link>
          </li>
        </ul>
      </nav>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
