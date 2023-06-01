import React from 'react';
import Icon from 'components/Icon';
import styles from './CommentCard.module.sass';
import { Avatar, Box, Stack, Typography } from '@mui/material';

const CommentCard = ({data}) => {
    return (
        <Box 
            className={styles.cardWrapper} 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
        >
            <Typography className={styles.titleText}>{data?.title}</Typography>
            <Typography className={styles.commentText}>{data?.description}</Typography>
            <Stack direction='row' alignItems='center' className={styles.ratingWrapper}>
                {Array(5).fill({}).map((_, index) => (
                    <Icon name={data?.rating >= index + 1 ? 'FillRatingStar' : 'RatingStar'} />
                ))}
            </Stack>
            <Typography className={styles.createdAtText}>{data?.createdAt}</Typography>
            <Stack direction='row' gap='16px' alignItems='center'>
                <Avatar src={data?.aatar} alt='' />
                <Box>
                    <Typography className={styles.ownerText}>{data?.owner}</Typography>
                    <Typography className={styles.jobText}>{data?.job}</Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default CommentCard;