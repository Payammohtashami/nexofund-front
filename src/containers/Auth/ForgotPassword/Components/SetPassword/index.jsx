import React from 'react';
import Icon from 'components/Icon';
import styles from './styles';
import TextFieldComponent from 'components/TextField';
import { useRouter } from 'next/router';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';

const SetPassword = ({turnBack, setTurnBack, setStep}) => {
    const router = useRouter();
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
                <Typography sx={styles.loginText}>Choose Your Password</Typography>
            </Stack>
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
                        type='password'
                        name='password'
                        label='Your Password'
                        placeholder='Enter Your Password'
                        errors={errors}
                        Icon={
                            <Icon name='email' size='24' />
                        }
                    />
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sx={{mb: '36px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <TextFieldComponent
                        control={control}
                        type='password'
                        name='confirmPassword'
                        label='Confirm Your Password'
                        placeholder='Enter Your Password'
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
                        Confirm
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SetPassword;