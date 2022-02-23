import React from 'react';

import HeaderBanner from '../components/HeaderBanner';
import SideBar from '../components/SideBar';

const Search = () => {
    return (
        <>
            <HeaderBanner />
            <div className="search">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="topbar">topbar</div>
                <div className="results">results</div>
            </div>
        </>
    );
};

export default Search;
