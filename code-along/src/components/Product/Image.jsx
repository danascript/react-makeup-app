import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ name, img }) => (
    <div className="flex items-center justify-center w-3/4 sm:w-2/4 md:w-1/4 lg:w-full lg:mr-10">
        <img src={img} alt={name} />
    </div>
);

export default Image;

Image.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
