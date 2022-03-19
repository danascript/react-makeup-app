import React, { useState } from 'react';

import { CATEGORIES } from '../../constants/categories';

const CategoriesBar = ({ setFilter }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const setCategory = e => {
        const value = e.target.innerText;

        setFilter('product_type', value);
        setActiveCategory(value);
    };

    return (
        <>
            {CATEGORIES.map(cat => (
                <div key={cat.name} className="my-4">
                    <h4 className="font-krona mb-2">{cat.name}</h4>
                    <ul className="ml-4 space-y-2">
                        {cat.subCategories.map(subCat => (
                            <li
                                key={subCat}
                                onClick={setCategory}
                                className={`cursor-pointer hover:text-yellow ${
                                    activeCategory === subCat ? 'text-yellow font-medium' : ''
                                }`}
                            >
                                {subCat}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CategoriesBar;
