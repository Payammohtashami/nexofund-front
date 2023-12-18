import React from 'react';
import Image from 'next/image';
import styles from './styles';
import { Box, Stack, Typography } from '@mui/material';
// mock
import { howToWorkData } from 'mock/home';

const HowToWork = () => {
    return (
        <Box sx={{top: '-128px', position: 'relative',}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' className='title' sx={{mb: 3}}>How It Works?</Typography>
                <Box>
                    {howToWorkData?.map((item, index) => (
                        <Stack key={item?.id} direction={{xs: 'column', md: 'row'}} gap='8px'>
                            {index % 2 === 0 ? 
                                <Box data-aos='zoom-in' data-aos-delay='150' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Box sx={styles.textsWrapper}>
                                        <Typography sx={styles.numberText}>{item.number}</Typography>
                                        <Typography sx={styles.titleText}>{item.title}</Typography>
                                        <Typography sx={styles.descriptionsText}>{item.descriptions}</Typography>
                                    </Box>
                                </Box>
                                :
                                <Box data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Image src={item.image} height='320' width='320' />
                                </Box>
                            }
                            <Box orientation='vertical' sx={{background: (theme) => theme.palette.solid.dark1, width: '1px', display: {xs: 'none', md: 'block'} }} />
                            {index % 2 !== 0 ? 
                                <Box data-aos='zoom-in' data-aos-delay='150' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Box sx={styles.textsWrapper}>
                                        <Typography sx={styles.numberText}>{item.number}</Typography>
                                        <Typography sx={styles.titleText}>{item.title}</Typography>
                                        <Typography sx={styles.descriptionsText}>{item.descriptions}</Typography>
                                    </Box>
                                </Box>
                                :
                                <Box data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' sx={{flex: '1'}}>
                                    <Image src={item.image} height='320' width='320'  />
                                </Box>
                            }
                        </Stack>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HowToWork;