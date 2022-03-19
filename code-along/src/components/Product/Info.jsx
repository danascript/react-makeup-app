import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ category, name, type }) => (
    <>
        <p className="text-yellow text-sm font-krona">{type}</p>
        <h1 className="font-krona text-base">{name}</h1>
        <p>{category}</p>
    </>
);

export default Info;

Info.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
