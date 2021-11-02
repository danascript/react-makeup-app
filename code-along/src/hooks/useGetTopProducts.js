import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';
const PRODUCT_TAGS = [
    'canadian',
    'certclean',
    'chemical free',
    'dairy free',
    'ewg verified',
    'ecocert',
    'fair trade',
    'gluten free',
    'hypoallergenic',
    'natural',
    'no talc',
    'non-gmo',
    'organic',
    'peanut free product',
    'sugar free',
    'usda organic',
    'vegan',
    'alcohol free',
    'cruelty free',
    'oil free',
    'purpicks',
    'silicone free',
    'water free',
];

const PRODUCTS_COUNT = 8;

const getRandomProductTag = () => {
    const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length);

    return PRODUCT_TAGS[randomNumber];
};

const useGetTopProducts = () => {
    const [products, setProducts] = useState([]);

    const getTopProducts = () => {
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: getRandomProductTag(),
                },
            })
            .then(response => {
                const { data } = response;
                data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;

                setProducts(data);
            });
    };

    useEffect(() => {
        getTopProducts();
    }, []);

    return products;
};

export default useGetTopProducts;
