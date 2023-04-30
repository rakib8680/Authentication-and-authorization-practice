import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact form */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact us</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        rows="5"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Contact information */}
                        <div className="p-6 bg-gray-800 text-white">
                            <h2 className="text-2xl font-semibold mb-4">Contact information</h2>
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="w-6 h-6 mr-3" />
                                <p>123 Main St. Suite 101, Anytown, USA 12345</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <FaPhone className="w-6 h-6 mr-3" />
                                <p>1-800-555-5555</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="w-6 h-6 mr-3" />
                                <p>contact@company.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
