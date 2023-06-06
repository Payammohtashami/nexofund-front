import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import HeroBackground from 'components/Icon/HeroBackground';
import styles from '../styles';
import RegisterForm from './Components/RegisterForm';
import ConfirmCode from './Components/ConfirmCode';
import SetPassword from './Components/SetPassword';
import Mesh from 'components/Mesh';

const Register = () => {
    const [step, setStep] = useState('REGISTER');
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
                    {step === 'REGISTER' ? 
                        <RegisterForm
                            errors={errors} 
                            control={control}
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}
                    {step === 'CONFIRM_CODE' ?
                        <ConfirmCode
                            errors={errors} 
                            control={control}
                            setStep={setStep}
                            turnBack={turnBack}
                            setTurnBack={setTurnBack}
                        /> 
                    : null}

                    {step === 'SET_PASSWORD' ?
                        <SetPassword
                            errors={errors} 
                            control={control}
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

export default Register;