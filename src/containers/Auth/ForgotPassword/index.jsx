import React from 'react';
import styles from '../styles';
import HeroBackground from 'components/Icon/HeroBackground';
import { Box, Container } from '@mui/material';
import Mesh from 'components/Mesh';
import { useState } from 'react';
import ForgotPasswordComponent from './Components/ForgotPassword';
import SetPassword from './Components/SetPassword';
import ConfirmCode from './Components/ConfirmCode';

const ForgotPassword = () => {
    const [step, setStep] = useState('FORGOT_PASSWORD');
    const [turnBack, setTurnBack] = useState(false);
    return (
        <Box sx={{position: 'relative', mb: '90px'}}>
            <Box sx={styles.HeroBackground}>
                <Box sx={{
                    opacity: 0.3
                }}>
                    <HeroBackground />
                </Box>
                <Box sx={styles.thirdBackgroundLayer} />
                <Box sx={styles.secendBackgroundLayer} />
            </Box>
            <Box sx={{position: 'absolute', width: '100%', height: '100%', top: 0}}>
                <Mesh 
                    bgcolor='#2817ED'
                    size='88px'
                    left='10%'
                    top='10vh'
                />
                <Mesh
                    bgcolor='#2817ED'
                    size='88px'
                    right='10%'
                    top='45vh'
                />
                <Mesh 
                    bgcolor='#B53FEC'
                    size='88px'
                    left='10%'
                    top='65vh'
                />
                <Mesh 
                    bgcolor='#B53FEC'
                    size='88px'
                    right='5%'
                    top='0'
                />
            </Box>
            <Container component="main" maxWidth="sm" sx={{my: '90px'}}>
                <Box sx={styles.boxWrapper}>
                    {step === 'FORGOT_PASSWORD' ? 
                        <ForgotPasswordComponent
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                    {step === 'CONFIRM_CODE' ? 
                        <ConfirmCode
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                    {step === 'SET_PASSWORD' ? 
                        <SetPassword
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                </Box>
            </Container>
        </Box>
    );
};

export default ForgotPassword;