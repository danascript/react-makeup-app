import React from 'react';

import ButtonLink from '../ButtonLink';

import bannerImg from './bannerImg.jpg';

import './SecondaryBanner.css';

const SecondaryBanner = () => {
    return (
        <div className="banner__secondary container flex items-center justify-between mx-auto px-20 bg-pink w-full">
            <div>
                <h3 className="font-krona mb-4">
                    Be natural, <br /> be smart, <br /> be you
                </h3>
                <ButtonLink path="/about" text="see more" />
            </div>
            <div className="ml-4">
                <img
                    className="py-8"
                    width="200"
                    src={bannerImg}
                    alt="Tooth brush and a paste laying on top of a green leaf"
                />
            </div>
        </div>
    );
};

export default SecondaryBanner;
