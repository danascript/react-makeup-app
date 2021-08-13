import React from 'react';
import Benefits from '../components/Benefits';

import MainBanner from '../components/MainBanner';
import TopProducts from '../components/TopProducts';
import UniqueSellingPoint from '../components/UniqueSellingPoint/UniqueSellingPoint';

const Home = () => {
    return (
        <>
            <MainBanner />
            <TopProducts />
            <UniqueSellingPoint />
            <Benefits />
        </>
    );
};

export default Home;
