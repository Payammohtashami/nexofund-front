import React, { useEffect, useRef, useState } from 'react';
import Icon from 'components/Icon';
import styles from "./styles.js";
import HeroBackground from 'components/Icon/HeroBackground';
import { Box, Button, Stack, Typography } from '@mui/material';
const Hero = ({setActiveSection}) => {
    return (
        <Box>
            <Box sx={styles.stickyWrapper} data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800'>
                <Stack alignItems='center' justifyContent='center' sx={{height: '100%', width: '100%'}}>
                    <Typography variant='h1' component='h1' sx={styles.heroTitle}>nexofund</Typography>
                    <Typography sx={styles.heroDescription}>Predict It Right , Get Free Doge Coin</Typography>
                    <Stack direction='row' alignItems='center' sx={{ml: '-24px'}}>
                        <Button sx={styles.circleButton}>Click</Button>
                        <Box sx={styles.buttonWrapper}>
                            <Button sx={styles.backButton} onClick={() => setActiveSection(2)} endIcon={<Icon name={'ArrowBottom'} size='24px' />}>
                                Let’s Begin
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Box sx={styles.HeroBackground} data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800'>
                    <HeroBackground />
                    <Box sx={styles.thirdBackgroundLayer} />
                    <Box sx={styles.secendBackgroundLayer} />
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;