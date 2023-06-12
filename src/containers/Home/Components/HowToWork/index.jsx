import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './styles';
import { Box, Divider, Stack, Typography } from '@mui/material';

const HowToWork = () => {
    const ref = useRef(null)
    const offsetWidth = ref?.current?.offsetWidth / 2 || 150;
    const data = [
        {
            id: 'sections-1',
            number: '01',
            title: 'what do we do?',
            descriptions: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus.  Ultricies tempor egestas rhoncus egestas dignissim risus  dictum nascetur. Non tristique at lectus tristique.Ultricies  tempor egestas rhoncus egestas dignissim risus dictum  nascetur',
            image: '/images/Home/howToWork1.png',
        },
        {
            id: 'sections-2',
            number: '02',
            title: 'how can I make money?',
            descriptions: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus.  Ultricies tempor egestas rhoncus egestas dignissim risus  dictum nascetur. Non tristique at lectus tristique.Ultricies  tempor egestas rhoncus egestas dignissim risus dictum  nascetur',
            image: '/images/Home/howToWork2.png',
        },
        {
            id: 'sections-3',
            number: '03',
            title: 'Great, how can I start?',
            descriptions: 'Lorem ipsum dolor sit amet consectetur. Arcu leo arcu sit tristique amet proin molestie. In cras in fusce erat phasellus.  Ultricies tempor egestas rhoncus egestas dignissim risus  dictum nascetur. Non tristique at lectus tristique.Ultricies  tempor egestas rhoncus egestas dignissim risus dictum  nascetur',
            image: '/images/Home/howToWork3.png',
        },
    ]
    return (
        <Box sx={{top: '-128px', position: 'relative',}}>
            <Box sx={{textAlign: 'center'}}>
                <Typography data-aos='zoom-in' data-aos-delay='250' data-aos-duration='800' className='title' sx={{mb: 3}}>How It Works?</Typography>
                <Box>
                    {data?.map((item, index) => (
                        <Stack direction='row' gap='8px'>
                            {index % 2 === 0 ? 
                                <Box ref={ref} data-aos='zoom-in' data-aos-delay='150' data-aos-duration='800' sx={{flex: '1'}}>
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
                            <Box orientation='vertical' sx={{background: (theme) => theme.palette.solid.dark1, width: '1px' }} />
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