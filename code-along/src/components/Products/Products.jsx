import React from 'react';
import { useSearchState } from '../../state/search-context';

import Loader from '../Loader';
import ProductCard from '../ProductCard';

const Products = () => {
    const [{ products }] = useSearchState();

    return (
        <div className="flex flex-wrap justify-center">
            {products.length === 0 ? (
                <Loader classes="my-4" />
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
