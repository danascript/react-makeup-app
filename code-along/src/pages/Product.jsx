import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useGetProduct from '../hooks/useGetProduct';

import Benefits from '../components/Benefits';
import ProductPrice from '../components/ProductPrice';
import ProductTitle from '../components/ProductTitle';
import RecommendedProducts from '../components/RecommendedProducts';

const Product = () => {
    const location = useLocation();
    const { singleProduct } = useGetProduct();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (!singleProduct) return <p>Loading...</p>;

    return (
        <div className="mt-20 container mx-auto">
            <ProductTitle name={singleProduct.name} type={singleProduct.product_type.replace(/_/g, ' ')} />

            {/* TODO: check if columns make sense for a better img display */}

            {/* TODO: split to smaller components */}
            <div className="flex mb-20">
                <div className="flex items-center justify-center w-screen p-10">
                    <img src={`https://${singleProduct.api_featured_image}`} alt={singleProduct.name} />
                </div>

                <div>
                    <p className="text-yellow text-sm font-krona">{singleProduct.product_type.replace(/_/g, ' ')}</p>
                    <h1 className="font-krona text-base">{singleProduct.name}</h1>

                    <p>{singleProduct.category}</p>
                    <div className="flex my-10 justify-between">
                        <ProductPrice price={singleProduct.price} isLarge />
                        <button className="inline-block rounded-full font-bold font-krona text-xs bg-yellow py-3 px-6">
                            add to basket
                        </button>
                    </div>

                    <p>{singleProduct.description.replace(/<\/?[^>]+(>|$)/g, '')}</p>
                </div>
            </div>

            <Benefits />
            <RecommendedProducts product={singleProduct} />
        </div>
    );
};

export default Product;
