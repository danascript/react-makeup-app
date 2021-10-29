import React from 'react';

import useGetRecommendedProducts from '../../hooks/useGetRecommendedProducts';

const RecommendedProducts = ({ product }) => {
    const products = useGetRecommendedProducts(product);

    if (products.length === 0) return null;

    return (
        <div>
            {products.map(item => (
                <p>{item.name}</p>
            ))}
        </div>
    );
};

export default RecommendedProducts;
