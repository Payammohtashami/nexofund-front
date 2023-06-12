import React, { useState } from 'react';
import styles from './styles';
import { Box, Button, ButtonBase, Stack, Typography } from '@mui/material';
import Icon from 'components/Icon';

const DailyNews = () => {
    const [openNews, setOpenNews] = useState(false)
    const dailyNews = [
        {
            id: 1,
            title: '$ETH holders that have never tried $aDA',
            date: '(12:34 am)',
        },
        {
            id: 2,
            title: '$ETH holders that have never tried $aDA',
            date: '(12:34 am)',
        },
        {
            id: 3,
            title: '$ETH holders that have never tried $aDA',
            date: '(12:34 am)',
        },
        {
            id: 4,
            title: '$ETH holders that have never tried $aDA',
            date: '(12:34 am)',
        },
    ];
    return (
        <Box sx={styles.wrapper}>
            <Box sx={{opacity: openNews ? 0 : 1, transition: 'all 0.4s ease', position: 'absolute', transform: openNews ? 'translateX(-100%)' : 'translateX(0)',}}>
                <Typography sx={styles.title}>Daily News</Typography>
                <Box>
                    {dailyNews?.map((item) => (
                        <ButtonBase onClick={() => setOpenNews(!openNews)} sx={styles.newsWrapper}>
                            <Typography sx={styles.newsTitle}>{item?.id} <Box sx={styles.circle}></Box> {item?.title} <span>{item?.date}</span></Typography>
                        </ButtonBase>
                    ))}
                </Box>
                <Typography sx={styles.title}>Top News</Typography>
                <Box>
                    {dailyNews?.map((item) => (
                        <ButtonBase
                            sx={{
                                ...styles.newsWrapper,
                                '&:last-child':{ 
                                    borderBottom: 'none',
                                    borderRadius: '0 0 26px 26px',
                                },
                            }}
                        >
                            <Typography sx={styles.newsTitle}>{item?.id} <Box sx={styles.circle}></Box> {item?.title} <span>{item?.date}</span></Typography>
                        </ButtonBase>
                    ))}
                </Box>
            </Box>
            <Box sx={{opacity: !openNews ? 0 : 1, transition: 'all 0.4s ease', position: 'absolute', transform: !openNews ? 'translateX(-100%)' : 'translateX(0)'}}>
                <Box sx={{padding: '26px 24px', }}>
                    <Button 
                        onClick={() => setOpenNews(!openNews)} 
                        sx={styles.backButton}
                    >
                        <Icon name='SimpleBack' size='24px' />Back to all
                    </Button>
                </Box>
                <Box sx={styles.detailWrapper}>
                    <Typography sx={styles.newsTitle}>1 <Box sx={styles.circle}></Box> $ETH holders that have never tried $aDA <span>(12:34 am)</span></Typography>
                    <Typography sx={styles.description}>
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
                    </Typography>
                    <Stack direction='row' alignItems='center' gap='24px' mt={2}>
                        <Typography sx={styles.statsTitle}>Comments :</Typography>
                        <Stack direction='row' alignItems='center'>
                            <Typography sx={styles.analysStats}>60%</Typography>
                            <Icon name='increaseArrow' size='24px' />
                        </Stack>
                        <Stack direction='row' alignItems='center'>
                            <Typography sx={styles.analysStats}>40%</Typography>
                            <Icon name='decreaseArrow' size='24px' />
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default DailyNews;