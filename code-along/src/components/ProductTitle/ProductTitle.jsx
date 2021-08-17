import React from 'react';

const ProductTitle = ({ name, type }) => (
    <div className="mb-10">
        <h5 className="font-krona text-sm">{name}</h5>
        <p className="text-dark-grey text-sm">{type}</p>
    </div>
);

export default ProductTitle;
