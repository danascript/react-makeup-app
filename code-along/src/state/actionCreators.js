import { SET_FILTER, SET_PRODUCTS } from './actionTypes';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const setFilter = (name, value) => ({
    type: SET_FILTER,
    payload: { name, value },
});
