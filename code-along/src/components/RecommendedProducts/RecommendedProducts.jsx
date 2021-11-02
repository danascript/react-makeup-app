import React, { Fragment } from 'react';

import useGetRecommendedProducts from '../../hooks/useGetRecommendedProducts';

import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';

const RecommendedProducts = ({ product }) => {
    const products = useGetRecommendedProducts(product);

    if (products.length === 0) return null;

    return (
        <Fragment>
            {/* TODO: handle loading state */}
            <SectionTitle text="For you" />
            <div className="flex flex-wrap justify-center">
                {products.map(item => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        brand={item.brand}
                        imgUrl={item.api_featured_image}
                        price={item.price}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default RecommendedProducts;
