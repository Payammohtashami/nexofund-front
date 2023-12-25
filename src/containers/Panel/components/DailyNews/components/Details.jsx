import React from 'react';
import Icon from 'components/Icon';

const Details = ({setOpenNews, openNews}) => {
    return (
        <div
            className='transition-all absolute duration-300'
            style={{opacity: !openNews ? 0 : 1, transform: !openNews ? 'translateX(-100%)' : 'translateX(0)'}}
        >
            <div className='p-6'>
                <button 
                    className='btn flex !text-base items-center gap-2 bg-white !text-primary-400 hover:bg-darkness-500 hover:!text-white'
                    onClick={() => setOpenNews(!openNews)} 
                >
                    <Icon name='SimpleBack' size='24px' />
                    Back to all
                </button>
            </div>
            <div className='border-y border-primary-400 px-6 py-4'>
                <h3 className='text-white text-base'>
                    1
                    <span className='text-primary-400 text-3xl mx-1.5 -mt-2'>•</span>
                    $ETH holders that have never tried $aDA
                    <span className='text-sm text-darkness-200'>(12:34 am)</span>
                </h3>
                <p className='text-darkness-200 my-2 tracking-wider'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehen
                    derit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat 
                </p>
                <div className='flex items-center gap-6 mt-4'>
                    <p className='text-darkness-100 text-sm'>Comments :</p>
                    <div className='flex items-center'>
                        <p className='text-darkness-100 text-xs'>60%</p>
                        <Icon name='increaseArrow' size='20px' />
                    </div>
                    <div className='flex items-center'>
                        <p className='text-darkness-100 text-xs'>40%</p>
                        <Icon name='decreaseArrow' size='20px' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;