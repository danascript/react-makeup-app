import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/search',
        name: 'Search',
    },
    {
        path: '/about',
        name: 'About',
    },
];

const NavLinks = () => {
    return (
        <>
            {links.map((link, index) => (
                <NavLink className="lowercase text-sm mr-8" to={link.path} key={`${link.name}-${index}`}>
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;
