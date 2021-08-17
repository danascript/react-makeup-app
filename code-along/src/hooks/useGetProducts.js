import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const useGetProducts = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState(null);

    const getTopProducts = () => {
        axios
            .get(`${BASE_URL}.json`, {
                params: {
                    product_tags: 'ecocert',
                },
            })
            .then(response => setProducts(response.data));
    };

    const getSingleProduct = useCallback(() => {
        axios.get(`${BASE_URL}/${id}.json`).then(response => {
            setSingleProduct(response.data);
            // getRecommendedProducts(response.data);
        });
    }, [id]);

    // const getRecommendedProducts = product => {
    //     console.log({ product });
    //     let key;
    //     let value;

    //     if (product.product_type) {
    //         key = 'product_type';
    //         value = product.product_type;
    //     } else {
    //         key = 'brand';
    //         value = product.brand;
    //     }

    //     axios
    //         .get(`${BASE_URL}.json`, {
    //             params: {
    //                 [key]: value,
    //             },
    //         })
    //         .then(response => setSingleProduct(currentState => ({ ...currentState, recommended: response.data })));
    // };

    useEffect(() => {
        if (!singleProduct) {
            getSingleProduct();
        }
    }, [singleProduct, getSingleProduct]);

    return {
        products,
        getTopProducts,
        singleProduct,
        getSingleProduct,
    };
};

export default useGetProducts;
