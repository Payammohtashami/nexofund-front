import React from 'react';

// components
import Icon from 'components/Icon';
import { Avatar } from '@mui/material';

const CommentCard = ({data}) => {
    return (
        <div
            className='border rounded-3xl border-darkness-500 bg-darkness-500 px-8 py-6 z-30 backdrop-blur-lg'
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
        >
            <h6 className='text-darkness-100 font-medium mb-4'>{data?.title}</h6>
            <p className='mb-4 text-darkness-200 text-sm md:text-lg'>{data?.description}</p>
            <div className='flex items-center mb-4'>
                {Array(5).fill({}).map((_, index) => (
                    <Icon size="20" key={index} name={data?.rating >= index + 1 ? 'FillRatingStar' : 'RatingStar'} />
                ))}
            </div>
            <p className='text-xs mb-4 text-white tracking-wider'>{data?.createdAt}</p>
            <div className='flex items-center gap-4'>
                <Avatar src={data?.avatar} alt='' />
                <p>
                    <span className='block text-darkness-100 text-sm'>{data?.owner}</span>
                    <span className='block text-darkness-100 text-sm'>{data?.job}</span>
                </p>
            </div>
        </div>
    );
};

export default CommentCard;