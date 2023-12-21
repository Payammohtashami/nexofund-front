import React from 'react';

// components
import Image from 'next/image';
import { FuturaFont } from 'theme/LocalFonts';
import { useMediaQuery } from '@mui/material';

// mock
import { howToWorkData } from 'mock/home';

const HowToWork = () => {
    const isMobile = useMediaQuery('(max-width:767px)');
    return (
        <div className='relative -top-32'>
            <h3 className='title mb-6 text-center'>How It Works?</h3>
            {howToWorkData?.map((item, index) => (
                <div className='z-20 flex flex-col md:flex-row gap-2 mb-12' key={item?.id}>
                    {index % 2 === 0 ? 
                        <div className="flex-1 text-left md:pr-12">
                            <strong className={`${FuturaFont.className} text-darkness-400 font-medium text-4xl mb-2 tracking-wide`}>{item.number}</strong>
                            <h6 className='text-xl font-medium text-white mb-3'>{item.title}</h6>
                            <p className='text-darkness-200 leading-7'>{item.descriptions}</p>
                        </div>
                        :
                        !isMobile &&
                        <div className='flex-1'>
                            <Image src={item.image} alt={'guide: ' + item?.title} height={320} width={320} className='mx-auto' />
                        </div>
                    }
                    {index % 2 !== 0 ? 
                        <div className="flex-1 text-left md:pl-12">
                            <strong className={`${FuturaFont.className} text-darkness-400 font-medium text-4xl mb-2 tracking-wide`}>{item.number}</strong>
                            <h6 className='text-xl font-medium text-white mb-3'>{item.title}</h6>
                            <p className='text-darkness-200 leading-7'>{item.descriptions}</p>
                        </div>
                        :
                        <div className='flex-1 mt-12 md:mt-0'>
                            <Image src={item.image} alt={'guide: ' + item?.title} height={320} width={320} className='mx-auto' />
                        </div>
                    }
                    {isMobile && index % 2 !== 0 &&
                        <div className='flex-1 mt-12'>
                            <Image src={item.image} alt={'guide: ' + item?.title} height={320} width={320} className='mx-auto' />
                        </div>}
                </div>
            ))}
            <div className='absolute w-[1px] hidden md:block bg-darkness-200 top-12 left-1/2 h-full '></div>
            <div className='mesh bg-primary-400 w-20 h-20 left-0 top-[4%]'></div>
            <div className='mesh bg-primary-400 w-20 h-20 right-[25%] top-[25%]'></div>
            <div className='mesh bg-primary-500 w-20 h-20 right-1/2 top-1/2'></div>
            <div className='mesh bg-primary-500 w-20 h-20 right-[5%] bottom-24'></div>
        </div>
    );
};

export default HowToWork;