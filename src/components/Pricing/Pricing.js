import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 2, name: 'Premium', price: 9.99,
            features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 3, name: 'Platinum', price: 19.99, features: [
                'Everything on Platinum',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white mt-5'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;