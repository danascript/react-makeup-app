import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const useGetRecommendedProducts = product => {
    const [products, setProducts] = useState([]);

    const key = product.product_type ? 'product_type' : 'brand';
    const value = product.product_type ? product.product_type : product.brand;

    const getRecommendedProducts = () => {
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    [key]: value,
                },
            })
            .then(response => setProducts(response.data));
    };

    useEffect(() => {
        if (!product) return;
        getRecommendedProducts();
    }, []);

    return products;
};

export default useGetRecommendedProducts;
