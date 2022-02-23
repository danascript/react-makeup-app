import React from 'react';

import bannerImg from './banner.png';

const HeaderBanner = () => {
    return (
        <div className="mx-6 mb-4">
            <div className="flex items-center justify-between md:px-20 bg-green w-full">
                <div>
                    <h3 className="font-krona text-sm mb-4 text-white">
                        Be natural, <br /> be smart, <br /> be you
                    </h3>
                </div>
                <div className="ml-4">
                    <img
                        className="py-4"
                        width="100"
                        src={bannerImg}
                        alt="A bundle of cream products standing next to each other"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;
