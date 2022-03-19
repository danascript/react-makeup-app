import React from 'react';
import PropTypes from 'prop-types';

import CartButton from '../CartButton';
import Price from '../Price';
import Image from './Image';
import Info from './Info';
import Description from './Description';
import Title from './Title';

const Product = ({ name, img, type, category, price, description }) => (
    <>
        <Title name={name} type={type} />
        <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
            <Image name={name} img={img} />

            <div>
                <Info name={name} type={type} category={category} />

                <div className="flex my-10 justify-between">
                    <Price price={price} isLarge />
                    <CartButton />
                </div>

                <Description text={description} />
            </div>
        </div>
    </>
);

export default Product;

Product.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
