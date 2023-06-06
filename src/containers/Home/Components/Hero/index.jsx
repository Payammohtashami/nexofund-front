import React, { useRef } from 'react';
import Icon from 'components/Icon';
import styles from "./styles.js";
import HeroBackground from 'components/Icon/HeroBackground';
import { Box, Button, Stack, Typography } from '@mui/material';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
const Hero = () => {
    const scrollHandler = () => {
        enablePageScroll()
        window.scrollTo({ top: 600, behavior: "smooth" });
    };
    return (
        <Box sx={{height: '165vh'}}>
            <Box sx={styles.stickyWrapper}>
                <Stack alignItems='center' justifyContent='center' sx={{height: '100%'}}>
                    <Typography variant='h1' component='h1' sx={styles.heroTitle}>nexofund</Typography>
                    <Typography sx={styles.heroDescription}>Predict It Right , Get Free Doge Coin</Typography>
                    <Stack direction='row' alignItems='center' sx={{ml: '-24px'}}>
                        <Button sx={styles.circleButton} onClick={scrollHandler}>Click</Button>
                        <Box sx={styles.buttonWrapper} onClick={scrollHandler}>
                            <Button sx={styles.backButton} endIcon={<Icon name={'ArrowBottom'} size='24px' />}>
                                Let’s Begin
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Box sx={styles.HeroBackground}>
                    <HeroBackground />
                    <Box sx={styles.thirdBackgroundLayer} />
                    <Box sx={styles.secendBackgroundLayer} />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;