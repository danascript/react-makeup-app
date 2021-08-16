import React, { useEffect } from 'react';

import SecondaryBanner from '../SecondaryBanner';
import ButtonLink from '../ButtonLink';
import SectionTitle from '../SectionTitle';
import useGetProducts from '../../hooks/useGetProducts';
import Product from '../Product';

const TopProducts = () => {
    const { products, getTopProducts } = useGetProducts();

    useEffect(() => {
        getTopProducts();
    }, []);

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <SectionTitle text="Top Products" />
                    <ButtonLink path="/about" text="see more" isMain />
                </div>
                {/* Products */}
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            imgUrl={product.api_featured_image}
                            price={product.price}
                            currency={product.price_sign}
                        />
                    ))}
                </div>
            </div>
            <SecondaryBanner />
        </div>
    );
};

export default TopProducts;
