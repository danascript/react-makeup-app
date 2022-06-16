import { useEffect, useState } from 'react';
import axios from 'axios';

import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';

const useSearch = () => {
    const [state, dispatch] = useSearchState();
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        setIsLoading(true);
        dispatch(setProducts([]));

        const params = {
            product_type: state.filters.productType,
            brand: state.filters.brand,
            price_greater_than: state.filters.minPrice,
            price_less_than: state.filters.maxPrice,
        };

        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
                dispatch(setProducts(data));
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getProducts();
    }, [state.filters]);

    return {
        isLoading,
    };
};

export default useSearch;
