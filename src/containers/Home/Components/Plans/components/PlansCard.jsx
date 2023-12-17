import React from 'react';
import Link from 'next/link';

// components
import Icon from 'components/Icon';

const PlansCard = ({data, isActive, handler}) => {
    return (
        <div className='w-full' data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">
            <button
                onClick={handler}
                className={`w-full rounded-3xl py-2 md:py-4 px-4 md:px-7 text-white !border-2 ${isActive ? 'btn-dark hover:bg-transparent' : 'border-darkness-500 bg-darkness-500'}`}
            >
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-4'>
                            <div className={`w-6 h-6 rounded-full border-2  relative ${isActive ? "border-darkness-800 bg-primary-400 before:content-[''] before:-top-[3px] before:-left-[3px] before:-z-20 before:absolute before:rounded-full before:bg-primary-400 before:w-[27px] before:h-[27px]" : "border-darkness-500 bg-darkness-500"}`}></div>
                            <p className='text-xs md:text-base text-left text-darkness-200'>
                                {data?.name}
                                <span className='text-white block text-xl md:text-2xl'>{(+data?.fund)?.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}
                                    <span className='text-darkness-200 ml-2 text-base'>USD</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='w-2/5'>
                        <Link 
                            href={'#'} 
                            className={`shadow-btn rounded-2xl flex transition-colors items-center justify-center gap-1 p-4 w-full text-base md:text-2xl font-medium text-white ${!isActive && 'btn-blue'}`}
                            style={isActive ? {
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'linear-gradient(100.84deg, #2817ED 4.93%, #AB30D7 84.35%)',
                                backgroundSize: '400% 400%',
                                animation: 'gradient 7s ease infinite',
                                backgroundPosition: 'center',
                                border: '2px solid transparent',
                                zIndex: 10,
                            } : null}
                        >
                            {/* <Box sx={isActive ? styles.activePlanCardButton : styles.planCardButton}> */}
                                <span className='text-darkness-200 text-sm'>$</span>
                                {data?.price}
                                <span className='text-darkness-200 text-sm'>/month</span>
                                <Icon name='launch' size='24' />
                            {/* </Box> */}
                        </Link>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default PlansCard;