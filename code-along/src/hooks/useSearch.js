import { useEffect } from 'react';
import axios from 'axios';

import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

// import { PRODUCT_TAGS } from '../constants/tags';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

// TODO: "UI"
// 1. when the user navigates to the product and then goes back, pre-selected filters should be remembered
// 2. sorting should have a separate dropdown
// 3. create the tags "dropdown" with checkboxes to be able to select more than one tag
// 4. somehow implement a pagination (along with the per page filter)

const useSearch = () => {
    const [state, dispatch] = useSearchState();

    const getProducts = params => {
        dispatch(setProducts([]));

        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
                dispatch(setProducts(data));
            });
    };

    // TODO: extend this function with setting the filter in the state
    // TODO: save filtered products to the state
    const setFilter = (type, value) => {
        const params = {
            [type]: value,
        };
        getProducts(params);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { setFilter };
};

export default useSearch;
