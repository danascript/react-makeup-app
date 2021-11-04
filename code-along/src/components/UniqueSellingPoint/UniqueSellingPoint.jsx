import React from 'react';

import bannerImg from './img.jpg';

const UniqueSellingPoint = () => (
    <div className="bg-light-grey pt-20 mb-20">
        <div className="container mx-auto pt-20 pb-16 flex flex-col md:flex-row items-center">
            <div className="mr-0 md:mr-4 mb-4 md:mb-0">
                <img src={bannerImg} alt="Tooth brush and a paste laying on top of a green leaf" />
            </div>
            <div>
                <h2 className="font-krona text-3xl mb-4">Clean code that you deserve</h2>
                <p className="text-sm mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita saepe quae mollitia? Quam
                    odio accusamus facere!
                </p>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita saepe quae mollitia? Quam
                    odio accusamus facere deleniti nostrum.
                </p>
            </div>
        </div>
    </div>
);

export default UniqueSellingPoint;
