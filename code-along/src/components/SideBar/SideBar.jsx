import React from 'react';

import { BRANDS } from '../../constants/brands';
import { setFilter } from '../../state/actionCreators';
import { useSearchState } from '../../state/search-context';

import Dropdown from '../Dropdown';
import CategoriesBar from '../CategoriesBar';
import PriceRange from '../PriceRange';

const SideBar = () => {
    const [, dispatch] = useSearchState();

    const handleOnChange = e => {
        const { name, value } = e.target;
        dispatch(setFilter(name, value));
    };

    const handleOnSelect = value => {
        dispatch(setFilter('productType', value));
    };

    return (
        <div className="pl-6">
            <PriceRange onChange={handleOnChange} />

            <Dropdown type="brand" values={['all', ...BRANDS]} onChange={handleOnChange} />

            <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
                <CategoriesBar onSelect={handleOnSelect} />
            </div>
        </div>
    );
};

export default SideBar;
