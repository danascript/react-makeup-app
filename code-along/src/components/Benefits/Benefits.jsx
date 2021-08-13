import React from 'react';

import BenefitsItem from '../BenefitsItem';

const benefits = [
    {
        title: 'Delivery',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi',
    },
    {
        title: 'Products',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    },
    {
        title: 'Payments',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi, consequatur sed inventore ut',
    },
];

const Benefits = () => (
    <div className="container mx-auto flex mb-20">
        {benefits.map(item => (
            <BenefitsItem key={item.title} item={item} />
        ))}
    </div>
);

export default Benefits;
