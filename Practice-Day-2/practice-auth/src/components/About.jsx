import React from 'react';

function About() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus eget nulla vel malesuada. Vivamus consectetur justo ut turpis egestas, ac rhoncus magna dapibus.
                        </p>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Story
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus eget nulla vel malesuada. Vivamus consectetur justo ut turpis egestas, ac rhoncus magna dapibus. Donec sagittis turpis in ipsum vehicula, eget rhoncus mauris posuere. Suspendisse potenti.
                        </p>
                        <p className="mt-4 text-lg text-gray-500">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque maximus, magna in sagittis faucibus, dui nisi tincidunt sem, sed malesuada mauris tortor eget enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
