import React from 'react';
import { Box, Typography } from '@mui/material';
import CommentCard from './CommentCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Comment = () => {
    const commentsData = [
        {
            id: 'comment-1',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus. ',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-2',
            owner: 'Kim',
            job: 'Fortune Telling',
            title: 'Aubry',
            description: 'It was amazing.',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-3',
            owner: 'Aubry',
            job: 'Fortune Telling',
            title: 'Amazing',
            description: 'It was amazing .',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-4',
            owner: 'Kim',
            job: 'stock marketer',
            title: 'good job',
            description: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit.',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-5',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus. ',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-6',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: 'It was amazing  ',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-7',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: '',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-8',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: 'It was an amazing ',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
        {
            id: 'comment-9',
            owner: 'Kim',
            job: 'UI Designer',
            title: 'Amazing',
            description: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus. ',
            rating: 4,
            createdAt: '2022/10/23',
            avatar: '',
        },
    ]
    return (
        <Box>
            <Box sx={{mb: 2}}>
                <Typography className='title'>What Our Clients Say About Us</Typography>
            </Box>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}>
                <Masonry gutter='20px'>
                    {commentsData?.map((item) =>  (
                        <CommentCard data={item} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Box>
    );
};

export default Comment;