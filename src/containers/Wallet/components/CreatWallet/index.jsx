import React from 'react';
import { Box, Button, ButtonBase, ButtonGroup, IconButton, Stack, Typography } from '@mui/material';
import styles from '../styles';
import Icon from 'components/Icon';

const CreateWallet = ({activeChain, setACtiveChain, setStep, setActiveCoin, activeCoin}) => {
    return (
        <Box>
            <Stack direction='row' alignItems='center' gap='10px'>
                <ButtonBase onClick={() => setStep(0)} sx={{...styles.title, color: 'solid.dark3'}}>
                    Wallet
                </ButtonBase>
                <Icon name='RightArrow' size='14px' />
                <ButtonBase onClick={() => setStep(1)} sx={{...styles.title, color: 'solid.dark3'}}>
                    Deposit
                </ButtonBase>
                <Icon name='RightArrow' size='14px' />
                <Typography sx={styles.title}>Address</Typography>
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
                <Box>
                    <Typography ml='10px'>Here is your address</Typography>
                    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={styles.walletAddressBox}>
                        <Typography>fweffkigrgigeisgir-0fisfw00fiff0f</Typography>
                        <IconButton>
                            <Icon name='copy' size='24px' />
                        </IconButton>
                    </Stack>
                </Box>
                <Box mt='16px'>
                    <Typography ml='10px'>Or Scan This QR</Typography>
                    <Stack alignItems='center' mt='12px' mb='48px'>
                        <Icon name='simpleQRCode' size='88px' />
                    </Stack>
                    <Button sx={styles.greenButton}>
                        Deposit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateWallet;