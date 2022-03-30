import React from 'react';

import HeaderBanner from '../components/HeaderBanner';
import Search from '../components/Search';

import SearchProvider from '../state/search-context';

const SearchPage = () => {
    return (
        <>
            <HeaderBanner />
            <SearchProvider>
                <Search />
            </SearchProvider>
        </>
    );
};

export default SearchPage;
