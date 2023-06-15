import React from 'react';
import Icon from 'components/Icon';
import styles from '../styles';
import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';

const MainSection = ({setStep, setActiveCoin, activeCoin}) => {
    return (
        <Box>
            <Typography sx={styles.title}>Wallet</Typography>
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
                <Stack direction='row' spacing='16px' justifyContent='center'>
                    <Button onClick={() => setStep(1)} sx={styles.depositButton}>
                        Deposit
                    </Button>
                    <Button onClick={() => setStep(3)} sx={styles.withdrawButton}>
                        Withdraw
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default MainSection;