import React from 'react';

import ButtonLink from '../ButtonLink';

import bannerImg from './banner.png';

const MainBanner = () => (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center mt-0 md:mt-20 mb-10">
        <div>
            <h1 className="font-krona text-3xl md:text-5xl mb-4 md:mb-10">The Makeup e-commerce project</h1>
            <p className="mb-6">
                This project is built with data from a MakeUp API using Axios, Tailwind CSS, ReactJS, PropTypes, React
                Context API and React Router.
            </p>
            <p className="mb-6">
                Webtwo ipsum divvyshot. disqus elgg klout. Jumo wufoo hulu spotify trulia, twitter nuvvo. Omgpop tumblr
                odeo mog palantir squidoo balihoo nuvvo, etsy yuntaa elgg reddit kiko oovoo. Kno revver oovoo, blyve.
            </p>
            <ButtonLink path="/about" text="see more" isMain />
        </div>
        <div className="ml-0 md:ml-4 mb-4 md:mb-0 py-10 md:py-0 w-2/3 md:w-full">
            <img src={bannerImg} alt="Tooth brush and a paste laying on top of a green leaf" />
        </div>
    </div>
);

export default MainBanner;
