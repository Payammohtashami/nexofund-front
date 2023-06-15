import React from 'react';
import Icon from 'components/Icon';
import styles from '../styles';
import { Box, Button, ButtonBase, ButtonGroup, Grid, Stack, Typography } from '@mui/material';

const SelectChain = ({activeChain, setACtiveChain, setStep, setActiveCoin, activeCoin}) => {
    const chainsList = [
        {
            name: 'ERC-20',
            icon: 'ETH',
        },
        {
            name: 'BEP-20',
            icon: 'BSC20'
        },
        {
            name: 'TRC-20',
            icon: 'TRC20'
        },
        {
            name: 'Polygon',
            icon: 'Polygon'
        },
    ]
    return (
        <Box>
            <Stack direction='row' alignItems='center' gap='10px'>
                <ButtonBase onClick={() => setStep(0)} sx={{...styles.title, color: 'solid.dark3'}}>
                    Wallet
                </ButtonBase>
                <Icon name='RightArrow' size='14px' />
                <Typography sx={styles.title}>Deposit</Typography>
            </Stack>
            <Box sx={styles.walletWrapper}>
                <Stack alignItems='center'>
                    <ButtonGroup sx={styles.groupButton}>
                        <Button sx={activeCoin === 'USDT' ? styles.activeButton : null} onClick={() => setActiveCoin('USDT')}>
                            <Icon name='USDT' size='24px' />
                            USDT
                        </Button>
                        <Button sx={activeCoin === 'DOGE' ? styles.activeButton : null} onClick={() => setActiveCoin('DOGE')}>
                            <Icon name='DOGE' size='24px' />
                            DOGE
                        </Button>
                    </ButtonGroup>
                </Stack>
                <Box>
                    <Typography sx={styles.balanceText}>Balance : <span>400 USDT</span></Typography>
                    <Typography sx={styles.dogeBalanceText}>1 USDT = 16.14 DOGE</Typography>
                </Box>
                <Stack direction='column' gap='8px'>
                    <Typography sx={styles.cardTitle}>Choose Chain</Typography>
                    <Grid container spacing='16px'>
                        {chainsList?.map((item) => (
                            <Grid item xs={12} md={6}>
                                <Button onClick={() => setACtiveChain(item?.name)} sx={item?.name === activeChain ? styles.activeChainButton : styles.chainsButton}>
                                    <Icon name={item?.icon} size='24' />
                                    {item?.name}
                                </Button>
                            </Grid>
                        ))}
                        <Grid item xs={12} md={12}>
                            <Button onClick={() => setStep(2)} sx={styles.blueButton}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>
    );
};

export default SelectChain;