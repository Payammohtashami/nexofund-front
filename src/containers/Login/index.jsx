import React, { useState } from 'react';
import styles from './styles';
import HeroBackground from 'components/Icon/HeroBackground';
import LoginForms from './components/LoginForms';
import VerifyEmail from './components/VerifyEmail';
import { useForm } from "react-hook-form";
import { Box, Container } from '@mui/material';

const Login = () => {
    const [loginStep, setLoginStep] = useState(1);
    const { control, formState: { errors }, } = useForm({
        defaultValues: { email: "", mobile: "", password: "" },
      });
    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={styles.HeroBackground}>
                <Box sx={{
                    opacity: 0.3
                }}>
                    <HeroBackground />
                </Box>
                <Box sx={styles.thirdBackgroundLayer} />
                <Box sx={styles.secendBackgroundLayer} />
            </Box>
            <Container component="main" maxWidth="sm" sx={{my: '90px'}}>
                <Box sx={styles.boxWrapper}>
                    {loginStep === 1 ? <LoginForms control={control} errors={errors} /> : <VerifyEmail />}
                </Box>
            </Container>
        </Box>
    );
};

export default Login;