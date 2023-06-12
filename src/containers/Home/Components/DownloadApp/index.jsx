import React from 'react';
import styles from './styles.js';
import Icon from 'components/Icon';
import Image from 'next/image';
import Mesh from 'components/Mesh/index.jsx';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

const DownloadApp = () => {
    return (
        <Box position='relative'>
            <Grid container spacing={3} alignItems='center' sx={{mb: '108px'}}>
                <Grid item xs={12} md={7}>
                    <Typography data-aos='fade-right' data-aos-delay='100' data-aos-duration='600' className='title'>Download It Now</Typography>
                    <Typography data-aos='fade-right' data-aos-delay='250' data-aos-duration='600' sx={styles.descriptionText}>
                        Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit 
                        tristique amet proin molestie. In cras in fusce erat phasellus. 
                        Ultricies tempor egestas rhoncus egestas dignissim risus dictum 
                        nascetur. Non tristique at lectus tristique.Ultricies tempor egestas 
                        rhoncus egestas dignissim risus dictum .
                    </Typography>
                    <Stack direction='row' gap='16px'>
                        <Button data-aos='fade-right' data-aos-delay='250' data-aos-duration='600' sx={styles.buttonWrapper}>
                            <Stack direction='row' alignItems='center' gap='16px' sx={styles.secondButtonWrapper}>
                                <Icon name='AppleLogo' />
                                <Box>
                                    <Typography sx={{textAlign: 'left', mb: 1}} className='caption'>Available on</Typography>
                                    <Typography sx={{fontWeight: 600, textAlign: 'left'}}>App Store</Typography>
                                </Box>
                            </Stack>
                        </Button>
                        <Button data-aos='fade-right' data-aos-delay='350' data-aos-duration='600' sx={styles.buttonWrapper}>
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
                    <Box sx={{width: '100%'}} data-aos='fade-left' data-aos-delay='200' data-aos-duration='600'>
                        <Image src='/images/Home/download.png' width={480} height={480} />
                    </Box>
                </Grid>
            </Grid>
            <Mesh
                bgcolor='#2817ED'
                size='88px'
                left='5%'
                top='70vh'
            />
            
            <Mesh 
                bgcolor='#B53FEC'
                size='88px'
                left='15%'
                bottom='40vh'
            />
        </Box>
    );
};

export default DownloadApp;