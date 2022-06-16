import React from 'react';
import { useSearchState } from '../../state/search-context';

import ProductCard from '../ProductCard';

const Products = () => {
    const [{ products }] = useSearchState();

    return (
        <div className="flex flex-wrap justify-center">
            {products.length === 0 ? (
                <div className="text-center mt-8">
                    <h4 className="font-krona">Sorry, no products</h4>
                    <p>Please try changing your filters</p>
                </div>
            ) : (
                <>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            imgUrl={product.api_featured_image}
                            price={product.price}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Products;
