import React, { useState } from 'react';
import Mesh from 'components/Mesh';
import styles from './styles';
import MainSection from './components/MainSection';
import SelectChain from './components/SelectChain';
import CreateWallet from './components/CreatWallet';
import WithdrawWallet from './components/WithdrawWallet';
import { Box, Grid } from '@mui/material';

const MainWallet = () => {
    const [step, setStep] = useState(0);
    const [activeCoin, setActiveCoin] = useState('USDT');
    const [activeChain, setACtiveChain] = useState('ETH');

    return (
        <Box className='container' sx={styles.wrapper}>
            <Mesh 
                bgcolor='#B53FEC'
                size='88px'
                bottom='0'
            />
            <Grid container spacing={2} alignItems='stretch'>
                <Grid item xs={12} md={6}>
                    {step === 0 ? <MainSection activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 1 ? <SelectChain activeCoin={activeCoin} activeChain={activeChain} setACtiveChain={setACtiveChain} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 2 ? <CreateWallet activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 3 ? <WithdrawWallet activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={styles.imageWrapper}>
                        <img src='/images/Wallet/walletBackground.png' alt='' />
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default MainWallet;