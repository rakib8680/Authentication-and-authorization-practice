import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {

    const serviceDetails = useLoaderData()
    return (
        <div className="container mx-auto bg-slate-50  py-20 p-4 md:p-0 ">
            <h1 className="text-3xl text-center mb-4 font-bold text-slate-600 ">Our Services</h1>
            <div className=" border border-slate-600 p-5 bg-slate-200 rounded-md shadow-md space-y-3  md:w-96 mx-auto mb-5 relative ">
                <h2 className="text-slate-600 text-2xl font-semibold">{serviceDetails?.name}</h2>
                <p className="text-slate-600">{serviceDetails?.description}</p>
                <p className="text-slate-600">Price: ${serviceDetails?.price}</p>
                <p className="text-slate-600 pb-10">Duration: {serviceDetails?.duration}</p>
                <Link to={`/services/${serviceDetails?.id}`} className="bg-slate-700 text-slate-300 py-2 px-4 font-medium rounded-md hover:bg-slate-300 hover:text-slate-600 transition-all duration-200 absolute bottom-2">
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;