import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const useGetProducts = () => {
    const [products, setProducts] = useState([]);

    const getTopProducts = () => {
        axios
            .get(BASE_URL, {
                params: {
                    product_tags: 'ecocert',
                },
            })
            .then(response => setProducts(response.data));
    };

    return {
        products,
        getTopProducts,
    };
};

export default useGetProducts;
