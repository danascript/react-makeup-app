import { SET_FILTER, SET_PRODUCTS } from './actionTypes';

export const searchReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        case SET_FILTER:
            return { ...state, filters: { ...state.filters, [payload.name]: payload.value } };
        default:
            return state;
    }
};
