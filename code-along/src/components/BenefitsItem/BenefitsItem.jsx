import React from 'react';

const BenefitsItem = ({ item }) => (
    <div className="flex flex-1">
        <div className="relative mr-4">
            <div className="absolute bg-yellow h-10 rounded-full top-0 w-10 -z-1"></div>

            {item.title === 'Products' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            )}

            {item.title === 'Payments' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            )}

            {item.title === 'Delivery' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                </svg>
            )}
        </div>
        <div>
            <h5 className="font-krona text-sm">{item.title}</h5>
            <p className="text-xs">{item.text}</p>
        </div>
    </div>
);

export default BenefitsItem;
