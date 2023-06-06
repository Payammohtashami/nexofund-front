import React from 'react';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import styles from './styles';
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';

const ForgotPassword = ({setStep, turnBack, setTurnBack, errors, control}) => {
    const backHandler = () => {
        setStep('LOGIN');
        setTurnBack(true);
    };

    const sendCode = () => {
        setTurnBack(false);
        setStep('CONFIRM_CODE')
    };
    return (
        <Box>
            <Stack
                gap='6px' 
                direction='row' 
                alignItems='center' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='300'
                sx={{mb: '16px'}}
            >
                <IconButton onClick={backHandler}>
                    <Icon name='Back' size='20' />
                </IconButton>
                <Typography sx={styles.loginText}>Forgot Password</Typography>
            </Stack>
            <Typography 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='200' 
                sx={styles.descriptionText}
            >
                We will send you A 4 digit confirmation code please make sure your email is currect.
            </Typography>
            <Grid container>
                <Grid 
                    item 
                    xs={12} 
                    sx={{mb: '36px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <TextFieldComponent
                        control={control}
                        type='text'
                        name='email'
                        label='Your Email'
                        placeholder='Enter Your Email'
                        errors={errors}
                        Icon={
                            <Icon name='email' size='24' />
                        }
                    />
                </Grid>
                <Grid
                    item 
                    xs={12} 
                    data-aos-delay='250'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <Button sx={styles.loginButton} onClick={sendCode}>
                        Send Code
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForgotPassword;