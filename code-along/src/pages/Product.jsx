import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useGetProduct from '../hooks/useGetProduct';

import Benefits from '../components/Benefits';
import ProductPreview from '../components/ProductPreview';
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

            {/* TODO: split to smaller components */}
            <ProductPreview
                name={singleProduct.name}
                img={singleProduct.api_featured_image}
                type={singleProduct.product_type}
                category={singleProduct.category}
                price={singleProduct.price}
                description={singleProduct.description}
            />

            <Benefits />
            <RecommendedProducts product={singleProduct} />
        </div>
    );
};

export default Product;
