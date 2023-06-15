import { Box, Button, ButtonBase, ButtonGroup, Stack, Typography } from '@mui/material';
import React from 'react';
import styles from '../styles';
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';
import { useForm } from 'react-hook-form';

const WithdrawWallet = ({setStep, setActiveCoin, activeCoin}) => {
    const { control, formState: { errors }, } = useForm({
        defaultValues: { email: "", mobile: "", password: "" },
    });
    return (
        <Box>
            <Stack direction='row' alignItems='center' gap='10px'>
                <ButtonBase onClick={() => setStep(0)} sx={{...styles.title, color: 'solid.dark3'}}>
                    Wallet
                </ButtonBase>
                <Icon name='RightArrow' size='14px' />
                <Typography sx={styles.title}>Withdraw</Typography>
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
                    <Box mb='30px'>
                        <TextFieldComponent 
                            label='Enter Address'
                            type='text'
                            placeholder='Address'
                            name='wallet-address'
                            control={control}
                            errors={errors}
                        />
                    </Box>
                    <Button onClick={() => setStep(1)} sx={styles.blueButton}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default WithdrawWallet;