import React from 'react';
import styles from './styles';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import Icon from 'components/Icon';

const TotalMarketcap = () => {
    return (
        <Box sx={{my: 3}}>
            <Typography className='title'>Crypto Total Market Cap, $</Typography>
            <Box sx={{mt: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                        <Stack gap='20px'>
                            <Box sx={styles.boxesWrapper}></Box>
                            <Stack direction='row' gap='16px'>
                                <Box sx={{...styles.boxesWrapper, flex: 1.5}}>
                                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                        <Stack direction='row' gap='6px' alignItems='center'>
                                            <Icon name='TOTALMARKETCAP' size='28' />
                                            <Typography sx={styles.percentageText}>Total Market Cap</Typography>
                                        </Stack>
                                        <Stack direction='row' gap='6px'>
                                            <IconButton sx={styles.arrowButton}>
                                                <Icon name='ArrowTop' />
                                            </IconButton>
                                            <IconButton sx={styles.arrowButton}>
                                                <Icon name='ArrowBottom' />
                                            </IconButton>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Box sx={styles.boxesWrapper}>
                                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                        <Stack direction='row' gap='6px' alignItems='center'>
                                            <Icon name='Bitcoin' size='28' />
                                            <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                        </Stack >
                                        <Typography sx={styles.positiveText}>+0.03%</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={styles.boxesWrapper}>
                                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                        <Stack direction='row' gap='6px' alignItems='center'>
                                            <Icon name='BNB' size='28' />
                                            <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                        </Stack >
                                        <Typography sx={styles.positiveText}>+0.03%</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={styles.boxesWrapper}>
                                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                        <Stack direction='row' gap='6px' alignItems='center'>
                                            <Icon name='ETH' size='28' />
                                            <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                        </Stack >
                                        <Typography sx={styles.positiveText}>+0.03%</Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={1}>
                        <Stack sx={styles.boxesWrapper} gap={'12px'}>
                            <IconButton sx={styles.iconButton}>
                                <Icon name='Camera' size='24' />
                            </IconButton>
                            <IconButton sx={styles.iconButton}>
                                <Icon name='FullScreen' size='24' />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TotalMarketcap;