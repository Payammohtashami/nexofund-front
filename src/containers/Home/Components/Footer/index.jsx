import React from 'react';

// constants
import { socialMedia } from 'constant/main';

// components
import Icon from 'components/Icon';

const Footer = () => {
    return (
        <div className='relative pt-8'>
            <div className='flex flex-col justify-center items-center gap-y-6'>
                <div className='w-[1px] h-20 bg-darkness-100'></div>
                <h5 className='title text-center text-darkness-100 font-medium text-2xl'>
                    Join The Team <br />
                    Of Our Experienced Traders
                </h5>
                <div className='flex gap-3'>
                    <button className='btn btn-blue'>Start Premium</button>
                    <button className='btn btn-dark'>Free Trial</button>
                </div>
                <div className='flex items-center gap-4'>
                    {socialMedia?.map((item) => (
                        <span key={item?.id} className='cursor-pointer p-3 rounded-full hover:bg-darkness-500 transition-colors'>
                            <Icon name={item?.name} size='24px' />
                        </span>
                    ))}
                </div>
                <div className='w-[1px] h-20 bg-darkness-100'></div>
            </div>
            <div className='mesh bg-primary-400 w-20 h-20 left-0 top-6'></div>
            <div className='mesh bg-primary-500 w-20 h-20 right-[5%] bottom-24'></div>
        </div>
    );
};

export default Footer;