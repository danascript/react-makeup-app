import React from 'react';
import useGetProduct from '../hooks/useGetProduct';

import ProductPrice from '../components/ProductPrice';
import ProductTitle from '../components/ProductTitle';
import RecommendedProducts from '../components/RecommendedProducts';

const Product = () => {
    const { singleProduct } = useGetProduct();

    if (!singleProduct) return <p>Loading...</p>;

    return (
        <div className="mt-20 container mx-auto h-screen">
            <ProductTitle name={singleProduct.name} type={singleProduct.product_type} />

            <div className="flex mb-10">
                <div className="flex items-center justify-center w-screen p-10">
                    <img src={`https://${singleProduct.api_featured_image}`} alt={singleProduct.name} />
                </div>

                <div>
                    <p className="text-yellow text-sm font-krona">{singleProduct.product_type}</p>
                    <h1 className="font-krona text-base">{singleProduct.name}</h1>

                    {/* img */}
                    {/* category */}
                    <p>{singleProduct.category}</p>
                    {/* price */}
                    <div className="flex my-10 justify-between">
                        <ProductPrice price={singleProduct.price} isLarge />
                        {/* <div>counter</div> */}
                        <button className="inline-block rounded-full font-bold font-krona text-xs bg-yellow py-3 px-6">
                            add to basket
                        </button>
                    </div>

                    {/* description */}
                    <p>{singleProduct.description.replace(/<\/?[^>]+(>|$)/g, '')}</p>
                </div>
            </div>

            {/* for you products */}
            <RecommendedProducts product={singleProduct} />
            {/* <div className="flex flex-wrap justify-center">
                {singleProduct.recommended ? (
                    singleProduct.recommended.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            imgUrl={product.api_featured_image}
                            price={product.price}
                        />
                    ))
                ) : (
                    <p>Loading Recommended</p>
                )}
            </div> */}
        </div>
    );
};

export default Product;
