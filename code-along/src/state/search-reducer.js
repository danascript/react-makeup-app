import { SET_PRODUCTS } from './actionTypes';

export const searchReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
