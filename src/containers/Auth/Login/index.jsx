import React, { useState } from 'react';
import styles from '../styles';
import LoginForms from './components/LoginForms';
import VerifyEmail from './components/VerifyEmail';
import HeroBackground from 'components/Icon/HeroBackground';
import ForgotPassword from './components/ForgotPassword';
import { useForm } from "react-hook-form";
import { Box, Container } from '@mui/material';
import ConfirmCode from './components/ConfirmCode';
import Mesh from 'components/Mesh';

const Login = () => {
    const [step, setStep] = useState('LOGIN');
    const [turnBack, setTurnBack] = useState(false);
    const { control, formState: { errors }, } = useForm({
        defaultValues: { email: "", mobile: "", password: "" },
    });
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
                    {step === 'LOGIN' ? 
                        <LoginForms 
                            control={control} 
                            errors={errors} 
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                    {step === 'FORGOT_PASSWORD' ? 
                        <ForgotPassword 
                            control={control} 
                            errors={errors} 
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                    {step === 'CONFIRM_CODE' ? 
                        <ConfirmCode
                            control={control} 
                            errors={errors} 
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

export default Login;