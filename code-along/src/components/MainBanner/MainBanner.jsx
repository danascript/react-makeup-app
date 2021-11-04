import React from 'react';

import ButtonLink from '../ButtonLink';

import bannerImg from './leaf.jpg';

const MainBanner = () => (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center mt-0 md:mt-20 mb-10">
        <div>
            <h1 className="font-krona text-3xl mb-4">
                The React project with API using Axios, Tailwind CSS and React Router
            </h1>
            <p className="text-sm mb-6">
                Reach out tribal knowledge currying favour the last person we talked to said this would be ready can you
                slack it to me? yet it just needs more cowbell.
            </p>
            <ButtonLink path="/about" text="see more" isMain />
        </div>
        <div className="ml-0 md:ml-4 mb-4 md:mb-0">
            <img src={bannerImg} alt="Tooth brush and a paste laying on top of a green leaf" />
        </div>
    </div>
);

export default MainBanner;
