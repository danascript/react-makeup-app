import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const formatProduct = data => ({
    ...data,
    category: data.category?.replace(/_/g, ' '),
    product_type: data.product_type?.replace(/_/g, ' '),
    description: data.description?.replace(/<\/?[^>]+(>|$)/g, ''),
    api_featured_image: `https://${data.api_featured_image}`,
});

const useGetProduct = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getSingleProduct = useCallback(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/${id}.json`).then(response => {
            const data = formatProduct(response.data);
            setSingleProduct(data);
        });
    }, [id]);

    useEffect(() => {
        getSingleProduct();
    }, [id, getSingleProduct]);

    useEffect(() => {
        setIsLoading(false);
    }, [singleProduct]);

    return {
        isLoading,
        singleProduct,
    };
};

export default useGetProduct;
