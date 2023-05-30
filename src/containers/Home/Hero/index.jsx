import React from 'react';
import styles from "./Hero.module.sass";
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBackground from 'components/Icon/HeroBackground';
import Icon from 'components/Icon';

const Hero = () => {
    return (
        <Box sx={{height: '165vh'}}>
            <Box className={styles.stickyWrapper}>
                <Stack alignItems='center' justifyContent='center' sx={{height: '100%'}}>
                    <Typography variant='h1' component='h1' className={styles.heroTitle}>nexofund</Typography>
                    <Typography className={styles.heroDescription}>Predict It Right , Get Free Doge Coin</Typography>
                    <Stack direction='row' alignItems='center' sx={{ml: '-24px'}}>
                        <Button className={styles.circleButton}>Click</Button>
                        <Box className={styles.buttonWrapper}>
                            <Button className={styles.backButton} endIcon={<Icon name={'ArrowBottom'} size='24px' />}>
                                Let’s Begin
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>

            <Box>
                <Box className={styles.HeroBackground}>
                    <HeroBackground />
                    <Box className={styles.thirdBackgroundLayer} />
                    <Box className={styles.secendBackgroundLayer} />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;