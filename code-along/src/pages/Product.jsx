import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useGetProduct from '../hooks/useGetProduct';

import Benefits from '../components/Benefits';
import ProductPreview from '../components/Product';
import RecommendedProducts from '../components/RecommendedProducts';
import Loader from '../components/Loader/Loader';

const Product = () => {
    const location = useLocation();
    const { singleProduct, isLoading } = useGetProduct();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (!singleProduct) return <Loader classes="h-screen" />;

    return (
        <div className="mt-20 container mx-auto">
            {isLoading ? (
                <Loader classes="h-screen" />
            ) : (
                <ProductPreview
                    name={singleProduct.name}
                    img={singleProduct.api_featured_image}
                    type={singleProduct.product_type}
                    category={singleProduct.category}
                    price={singleProduct.price}
                    description={singleProduct.description}
                />
            )}

            <Benefits />
            <RecommendedProducts product={singleProduct} />
        </div>
    );
};

export default Product;
