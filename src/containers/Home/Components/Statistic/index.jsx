import React from 'react';

// mock
import { statisticsData } from 'mock/home.js';

const Statistic = () => {
    return (
        <div className='gap-6 grid grid-cols-4 pb-20'>
            {statisticsData?.map((item,index) => (
                <div className='col-span-2 md:col-span-1' data-aos='zoom-in' data-aos-delay={index * 50} data-aos-duration='800' key={item.id}>
                    <div className='flex items-center flex-col'>
                        <p 
                            className='mb-3 font-bold text-3xl leading-6 tracking-widest text-darkness-800'
                            style={{textShadow: '1px 0px 0px #B53FEC, 0px 1px 0px #B53FEC, 0px -1px 0px #B53FEC, -1px 0px 0px #B53FEC, 1px 1px 0px #B53FEC, -1px -1px 0px #B53FEC, -1px 1px 0px #B53FEC,1px -1px 0px #B53FEC'}}
                        >
                            {item?.value}
                        </p>
                        <span className='text-xs md:text-sm text-center text-darkness-200 capitalize'>{item?.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Statistic;