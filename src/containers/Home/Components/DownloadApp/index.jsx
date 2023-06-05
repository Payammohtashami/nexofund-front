import React, { useRef } from 'react';
import styles from './styles.js';
import Icon from 'components/Icon';
import Image from 'next/image';
import Mesh from 'components/Mesh/index.jsx';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

const DownloadApp = () => {
    const ref = useRef(null);
    const offsetWidth = ref?.current?.offsetWidth || 150;
    return (
        <Box position='relative'>
            <Mesh
                top='24px'
                left='21px'
                right='20px'
                bottom='0px'
                bgcolor='secondary.main'
                size='82px'
                translateX={[20,0]}
                translateY={[-20,0]}
            />
            <Grid container spacing={3} alignItems='center' sx={{mb: '108px'}}>
                <Grid item xs={12} md={7}>
                    <Typography className='title'>Download It Now</Typography>
                    <Typography sx={styles.descriptionText}>
                        Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit 
                        tristique amet proin molestie. In cras in fusce erat phasellus. 
                        Ultricies tempor egestas rhoncus egestas dignissim risus dictum 
                        nascetur. Non tristique at lectus tristique.Ultricies tempor egestas 
                        rhoncus egestas dignissim risus dictum .
                    </Typography>
                    <Stack direction='row' gap='16px'>
                        <Button sx={styles.buttonWrapper}>
                            <Stack direction='row' alignItems='center' gap='16px' sx={styles.secondButtonWrapper}>
                                <Icon name='AppleLogo' />
                                <Box>
                                    <Typography sx={{textAlign: 'left', mb: 1}} className='caption'>Available on</Typography>
                                    <Typography sx={{fontWeight: 600, textAlign: 'left'}}>App Store</Typography>
                                </Box>
                            </Stack>
                        </Button>
                        <Button sx={styles.buttonWrapper}>
                            <Stack direction='row' alignItems='center' gap='16px' sx={styles.secondButtonWrapper}>
                                <Icon name='GooglePlayLogo' />
                                <Box>
                                    <Typography sx={{textAlign: 'left', mb: 1}} className='caption'>Available on</Typography>
                                    <Typography sx={{fontWeight: 600, textAlign: 'left'}}>Google play</Typography>
                                </Box>
                            </Stack>
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{width: '100%'}} ref={ref}>
                        <Image src='/images/Home/download.png' width={offsetWidth} height={offsetWidth} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DownloadApp;