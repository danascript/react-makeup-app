import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const PRODUCTS_COUNT = 4;
const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const useGetRecommendedProducts = product => {
    const [products, setProducts] = useState([]);

    const getRecommendedProducts = useCallback(() => {
        // TODO: randomise recommended chunk of products
        const key = product.product_type ? 'product_type' : 'brand';
        const value = product.product_type ? product.product_type : product.brand;

        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    [key]: value,
                },
            })
            .then(response => {
                const { data } = response;
                data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;

                setProducts(data);
            });
    }, [product]);

    useEffect(() => {
        if (!product) return;
        getRecommendedProducts();
    }, [product, getRecommendedProducts]);

    return products;
};

export default useGetRecommendedProducts;
