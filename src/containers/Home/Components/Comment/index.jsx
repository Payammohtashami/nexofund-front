import React from 'react';

// components & libs
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import CommentCard from './components/CommentCard';

// mock
import { commentsData } from 'mock/home';

const Comment = () => {
    return (
        <div className='pb-20 relative'>
            <h5 className='title mb-4' data-aos="zoom-in"   data-aos-duration="600" data-aos-delay="200" >
                What Our Clients Say About Us
            </h5>
            <div className="z-20">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='20px'>
                        {commentsData?.map((item) =>  (
                            <CommentCard data={item} key={item?.id} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div className='mesh bg-primary-400 w-20 h-20 left-0 top-6'></div>
            <div className='mesh bg-primary-500 w-20 h-20 right-[5%] bottom-24'></div>
        </div>
    );
};

export default Comment;