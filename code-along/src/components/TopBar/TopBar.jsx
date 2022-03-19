import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

import { BRANDS } from '../../constants/brands';
import { SORTING } from '../../constants/sorting';

const TopBar = ({ setFilter }) => {
    const handleOnChange = e => {
        const { name, value } = e.target;
        setFilter(name, value);
    };
    return (
        <div className="flex space-x-4">
            <Dropdown type="brand" values={['all', ...BRANDS]} onChange={handleOnChange} />
            <Dropdown type="sort" values={SORTING} onChange={handleOnChange} />
        </div>
    );
};

export default TopBar;
