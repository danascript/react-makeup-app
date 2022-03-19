import React from 'react';

import useGetRecommendedProducts from '../../hooks/useGetRecommendedProducts';
import Loader from '../Loader/Loader';

import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';

const RecommendedProducts = ({ product }) => {
    const products = useGetRecommendedProducts(product);

    return (
        <>
            <SectionTitle text="For you" />
            {products.length === 0 ? (
                <Loader classes="my-4" />
            ) : (
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
            )}
        </>
    );
};

export default RecommendedProducts;
