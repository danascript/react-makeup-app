import { SET_PRODUCTS } from './actionTypes';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products,
});
