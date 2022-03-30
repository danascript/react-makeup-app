import React, { createContext, useContext, useReducer } from 'react';

import { initialSearchState } from './search-state';
import { searchReducer } from './search-reducer';

const SearchStateContext = createContext('searchState');

const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, { ...initialSearchState });

    return <SearchStateContext.Provider value={[state, dispatch]}>{children}</SearchStateContext.Provider>;
};

const useSearchState = () => {
    const context = useContext(SearchStateContext);

    return context;
};

export { useSearchState };

export default SearchProvider;
