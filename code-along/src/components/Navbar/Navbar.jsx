import React from 'react';

import BrandLink from '../BrandLink';
import CartIcon from '../Icons/CartIcon';
import HeartIcon from '../Icons/HeartIcon';
import NavLinks from '../NavLinks';

import './Navbar.css';

const Navbar = () => (
    <nav className="container mx-auto font-krona flex justify-between py-3">
        <BrandLink />

        <div className="flex items-end">
            <NavLinks />

            <div className="flex">
                <HeartIcon />
                <CartIcon />
            </div>
        </div>
    </nav>
);

export default Navbar;
