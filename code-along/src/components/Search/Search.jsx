import React from 'react';

import useSearch from '../../hooks/useSearch';

import Products from '../Products';
import SideBar from '../SideBar';

const Search = () => {
    useSearch();

    return (
        <div className="search">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="results">
                <Products />
            </div>
        </div>
    );
};

export default Search;
