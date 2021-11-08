import React from 'react';

const Icon = ({ icon }) => {
    if (icon === 'people') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-20 w-20 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        );
    }

    if (icon === 'revenue') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-20 w-20 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
            </svg>
        );
    }

    if (icon === 'shop') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-20 w-20 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        );
    }
};

const FactNumber = ({ icon, number, title, description }) => {
    return (
        <div className="flex flex-col items-center w-full md:w-1/3">
            <Icon icon={icon} />
            <div className="text-center">
                <h2 className="text-2xl font-krona">{number}</h2>
                <h4 className="font-krona">{title}</h4>
                <p className="text-xs w-5/6 mx-auto">{description}</p>
            </div>
        </div>
    );
};

export default FactNumber;
