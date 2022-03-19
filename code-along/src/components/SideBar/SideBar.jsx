import React from 'react';
import CategoriesBar from '../CategoriesBar';
import PriceRange from '../PriceRange';

const SideBar = ({ setFilter }) => {
    return (
        <div className="pl-6">
            <PriceRange />
            <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
                <CategoriesBar setFilter={setFilter} />
            </div>
        </div>
    );
};

export default SideBar;
