import { dailyNews } from 'mock/panel';
import React from 'react';

const NewsList = ({openNews, setOpenNews}) => {
    return (
        <div 
            className='transition absolute duration-300'
            style={{opacity: openNews ? 0 : 1, transform: openNews ? 'translateX(-100%)' : 'translateX(0)'}}
        >
            <h6 className='text-xl font-semibold text-white px-6 py-4'>Daily News</h6>
            <div>
                {dailyNews?.map((item) => (
                    <button
                        onClick={() => setOpenNews(!openNews)}
                        className='text-darkness-100 text-left px-6 py-2 border-b border-darkness-500 hover:bg-darkness-500 transition-colors last:border-none'
                    >
                        <p className='inline-flex items-start'>
                            {item?.id}
                            <span className='text-primary-400 text-3xl mx-1.5 -mt-2'>•</span>
                            {item?.title}
                        </p>
                        <span className='text-sm text-darkness-200 ml-1'>{item?.date}</span>
                    </button>
                ))}
            </div>
            <h6 className='text-xl font-semibold text-white p-6 pb-4'>Top News</h6>
            <div>
                {dailyNews?.map((item) => (
                    <button
                        onClick={() => setOpenNews(!openNews)}
                        className='text-darkness-100 text-left px-6 py-2 border-b border-darkness-500 hover:bg-darkness-500 transition-colors last:border-none'
                    >
                        <p className='inline-flex items-start'>
                            {item?.id}
                            <span className='text-primary-400 text-3xl mx-1.5 -mt-2'>•</span>
                            {item?.title}
                        </p>
                        <span className='text-sm text-darkness-200 ml-1'>{item?.date}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NewsList;