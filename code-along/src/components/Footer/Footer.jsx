import React from 'react';

import './Footer.css';

const Footer = () => {
    const links = ['about', 'skincare', 'makeup', 'supplements', 'contact'];

    return (
        <footer className="bg-dark text-light flex justify-between px-4 py-4">
            <a className="text-2xl text-yellow font-krona" href="/">
                Welly
            </a>

            <div className="flex items-center">
                {links.map(link => (
                    <a href="/" className="ml-4">
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
