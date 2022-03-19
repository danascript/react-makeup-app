import React from 'react';

import HeaderBanner from '../components/HeaderBanner';
import Products from '../components/Products/Products';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import useSearch from '../hooks/useSearch';

const Search = () => {
    const { products, setFilter } = useSearch();

    return (
        <>
            <HeaderBanner />
            <div className="search">
                <div className="sidebar">
                    <SideBar setFilter={setFilter} />
                </div>
                <div className="topbar">
                    <TopBar setFilter={setFilter} />
                </div>
                <div className="results">
                    <Products products={products} />
                </div>
            </div>
        </>
    );
};

export default Search;
