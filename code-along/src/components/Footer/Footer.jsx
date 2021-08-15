import React from 'react';
import { Link } from 'react-router-dom';

import links from '../../data/footerLinks.json';

import BrandLink from '../BrandLink';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import InstagramIcon from '../Icons/InstagramIcon';

import './Footer.css';

const Footer = () => (
    <footer className="bg-dark text-light flex justify-between p-8">
        <BrandLink classes="text-yellow pl-4 inline-block" />

        <div className="flex justify-between mx-auto">
            {links.map(item => (
                <div className="flex flex-col flex-wrap mr-10">
                    <h6 className="font-krona text-sm">{item.title}</h6>
                    <div>
                        {item.links.map(link => (
                            <Link to={link.path} key={link} className="lowercase text-sm block hover:text-yellow">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="text-yellow pr-4">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-light-grey block mb-4"
            >
                <FacebookIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-light-grey block mb-4">
                <TwitterIcon />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-light-grey block mb-4"
            >
                <InstagramIcon />
            </a>
        </div>
    </footer>
);

export default Footer;
