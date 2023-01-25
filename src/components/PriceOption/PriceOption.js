
import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-indigo-400 m-3 rounded-md p-3'>
            <div>
                <h3 ><span className='text-6xl font-bold text-white'>{price}</span>
                    <span className='text-2xl text-gray-200' >/mon</span>
                </h3>
                <p className='text-3xl my-4'>{name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    feature={feature}
                    key={idx}
                ></Feature>)
            }
            <button className='bg-white mt-4 text-black w-full py-2 rounded-md font-bold'>Buy now</button>
        </div>
    );
};

export default PriceOption;