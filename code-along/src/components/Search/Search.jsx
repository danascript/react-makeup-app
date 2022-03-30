import React from 'react';

import useSearch from '../../hooks/useSearch';

import Products from '../Products';
import SideBar from '../SideBar';
import TopBar from '../TopBar';

const Search = () => {
    const { setFilter } = useSearch();

    return (
        <div className="search">
            <div className="sidebar">
                <SideBar setFilter={setFilter} />
            </div>
            <div className="topbar">
                <TopBar setFilter={setFilter} />
            </div>
            <div className="results">
                <Products />
            </div>
        </div>
    );
};

export default Search;
