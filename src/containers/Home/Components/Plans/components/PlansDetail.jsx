import React from 'react';

// components
import Image from 'next/image';
import Slide from '@mui/material/Slide';

const PlansDetail = ({direction, checked, data}) => {
    return (
        <div
            className="rounded-3xl px-6 py-4 border bg-darkness-700 shadow-btn h-full overflow-hidden border-primary-400"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch h-full'>
                <div className='col-span-1'>
                    <div className='flex flex-col justify-center h-full'>
                        <h6 className='text-white text-xl font-medium'>What’s in this plan?</h6>
                        <div className='flex gap-4 flex-col mt-8'>
                            {data?.details?.map((item, index) => (
                                <Slide key={index} direction={direction} in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `${index * 50}ms`}}>
                                    <div className='flex items-center gap-2'  key={`index-${index}`}>
                                        <p className='text-white tracking-wider'>{item?.title}</p>
                                        <span className='flex-1 !bg-slate-700 w-full h-[1px]'></span>
                                        <p className='text-darkness-200' >{item?.value}</p>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <Slide direction='left' in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `200ms`}}>
                        <div className="h-full items-center justify-center flex">
                            <Image src='/images/Home/plans.png' width={320} height={320} loading='lazy' />
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default PlansDetail;