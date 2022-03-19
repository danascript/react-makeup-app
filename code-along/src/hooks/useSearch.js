import { useEffect, useState } from 'react';
import axios from 'axios';

// import { PRODUCT_TAGS } from '../constants/tags';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

// TODO:
// 1. when the user navigates to the product and then goes back, pre-selected filters should be remembered
// 2. sorting should have a separate dropdown
// 3. create the tags "dropdown" with checkboxes to be able to select more than one tag
// 4. somehow implement a pagination (along with the per page filter)

const useSearch = () => {
    const [products, setProducts] = useState([]);

    const getProducts = params => {
        setProducts([]);

        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
                setProducts(data);
            });
    };

    const setFilter = (type, value) => {
        const params = {
            [type]: value,
        };
        getProducts(params);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { products, setFilter };
};

export default useSearch;
