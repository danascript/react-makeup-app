import React from 'react';
import { Link } from 'react-router-dom';

// TODO: create a product page
const Product = ({ id, name, brand, imgUrl, price, currency }) => (
    <Link
        className="flex flex-col align-center rounded-md mb-6 mr-6 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
        to={`/about/${id}`}
    >
        <img width="120" src={`https://${imgUrl}`} alt={name} className="mx-auto mb-6" />
        <p className="text-yellow font-krona text-sm lowercase">{name}</p>
        <p className="mb-4">{brand}</p>
        <div className="relative">
            <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>
            <p className="font-krona text-md pt-2 ml-4">
                {price} {currency}
            </p>
        </div>
    </Link>
);

export default Product;
