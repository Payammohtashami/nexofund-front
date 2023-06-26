import { Box, Divider, Grid, Slide, Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';
import Image from 'next/image';

const PlansDetail = ({direction, checked, data}) => {
    return (
        <Box
            sx={styles.PlansDetailWrapper}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
        >
            <Grid container spacing={2} alignItems='stretch' sx={{height: '100%'}}>
                <Grid item xs={12} md={6}>
                    <Stack direction='column' justifyContent='center' sx={{height: '100%'}}>
                        <Typography sx={styles.PlansDetailTitle}>What’s in this plan?</Typography>
                        <Stack gap='32px' sx={{mt: '32px', height: '232px'}}>
                            {data?.details?.map((item, index) => (
                                <Slide direction={direction} in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `${index * 50}ms`}}>
                                    <Stack
                                        key={`index-${index}`}
                                        direction='row' 
                                        alignItems='center' 
                                        gap='8px'
                                    >
                                        <Typography sx={styles.planDetailText}>{item?.title}</Typography>
                                        <Divider sx={{flex: 1, bgcolor: 'rgba(255,255,255,0.1)'}} />
                                        <Typography sx={styles.planDetailText}>{item?.value}</Typography>
                                    </Stack>
                                </Slide>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Slide direction='left' in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `200ms`}}>
                        <Stack alignItems='center' justifyContent='center' sx={{width: '100%', height: '100%'}}>
                            <Image src='/images/Home/plans.png' width={320} height={320} />
                        </Stack>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlansDetail;