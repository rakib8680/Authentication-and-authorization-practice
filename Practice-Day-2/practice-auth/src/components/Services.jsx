/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";





const Services = () => {
    // const [servicesData, setServicesData] = useState([]);
    const { services } = useLoaderData()

    // const {} = services
    console.log(services[0]);

    return (
        <div className="container mx-auto bg-slate-50  py-20">
            <h1 className="text-3xl text-center mb-4 font-bold text-slate-600">Our Services</h1>
            <div className="services grid grid-cols-3">
                {services?.map((service) => (
                    <div key={service?.id} className=" border border-slate-600 p-5 bg-slate-200 rounded-md shadow-md space-y-3 w-5/6 mx-auto mb-5 relative">
                        <h2 className="text-slate-600 text-2xl font-semibold">{service?.name}</h2>
                        <p className="text-slate-600">{service?.description}</p>
                        {/* <ul>
                            {service?.items?.map((item) => (
                                <li key={item?.id}>
                                    {item?.name} - ${item?.price}
                                </li>
                            ))}
                        </ul> */}
                        <p className="text-slate-600">Price: ${service?.price}</p>
                        <p className="text-slate-600 pb-10">Duration: {service?.duration}</p>
                        <Link to={`/services/${service?.id}`} className="bg-slate-700 text-slate-300 py-2 px-4 font-medium rounded-md hover:bg-slate-300 hover:text-slate-600 transition-all duration-200 absolute bottom-2">
                            <button>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;