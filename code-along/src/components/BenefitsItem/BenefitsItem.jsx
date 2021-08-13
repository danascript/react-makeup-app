import React from 'react';

const BenefitsItem = ({ item }) => (
    <div className="flex flex-1">
        <div className="mr-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </div>
        <div>
            <h5 className="font-krona text-sm">{item.title}</h5>
            <p className="text-xs">{item.text}</p>
        </div>
    </div>
);

export default BenefitsItem;
