import React from 'react';
import styles from './styles';
import Icon from 'components/Icon';
import { Box, Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';

const Deposit = () => {
    return (
        <Box className='container' sx={styles.wrapper}>
            <Grid container spacing={2} alignItems='stretch'>
                <Grid item xs={12} md={6}>
                    <Typography sx={styles.title}>Wallet</Typography>
                    <Box sx={styles.walletWrapper}>
                        <Stack alignItems='center'>
                            <ButtonGroup sx={styles.groupButton}>
                                <Button>
                                    <Icon name='USDT' size='24px' />
                                    USDT
                                </Button>
                                <Button>
                                    <Icon name='BNB' size='24px' />
                                    DOGE
                                </Button>
                            </ButtonGroup>
                        </Stack>
                        <Box>
                            <Typography sx={styles.balanceText}>Balance : <span>400 USDT</span></Typography>
                            <Typography sx={styles.dogeBalanceText}>1 USDT = 16.14 DOGE</Typography>
                        </Box>
                        <Stack direction='column' spacing='16px'>
                            <Typography sx={styles.cardTitle}>Choose Chain</Typography>
                            <Grid container spacing='16px'>
                                <Grid item xs={12} md={6}>
                                    <Button sx={styles.chainsButton}>
                                        <Icon name='ETH' size='24' />
                                        ERC-20
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button sx={styles.chainsButton}>
                                        <Icon name='ETH' size='24' />
                                        ERC-20
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button sx={styles.chainsButton}>
                                        <Icon name='ETH' size='24' />
                                        ERC-20
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button sx={styles.chainsButton}>
                                        <Icon name='ETH' size='24' />
                                        ERC-20
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button sx={styles.blueButton}>
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Box sx={styles.imageWrapper}>
                        <img src='images/Home/walletBackground.png' alt='' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Deposit;