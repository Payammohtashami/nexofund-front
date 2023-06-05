import React from 'react';
import Icon from 'components/Icon';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';
import styles from './styles';
import TextFieldComponent from 'components/TextField';
import Link from 'lib/Link';

const LoginForms = ({control, errors}) => {
    return (
        <Box>
            <Stack direction='row' alignItems='center' gap='6px' sx={{mb: '16px'}}>
                <IconButton>
                    <Link href='/'>
                        <Icon name='Back' size='20' />
                    </Link>
                </IconButton>
                <Typography sx={styles.loginText}>Login</Typography>
            </Stack>
            <Grid container>
                <Grid item xs={12} sx={{mb: '36px'}}>
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
                <Grid item xs={12} sx={{mb: '36px'}}>
                    <TextFieldComponent
                        control={control}
                        type='password'
                        name='password'
                        label='Your Password'
                        placeholder='Enter Your Password'
                        errors={errors}
                        Icon={
                            <Icon name='passwod' size='24' />
                        }
                    />
                </Grid>
                <Grid item xs={12} sx={{mb: '24px'}}>
                    <Button sx={styles.loginWithGooglButton}>
                        <img src='/images/google.png' alt='' />
                        Login With Google
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{mb: '24px'}}>
                    <ButtonBase sx={styles.fotgotPasswordButton}>Forgot Your Password?</ButtonBase>
                </Grid>
                <Grid item xs={12} sx={{mb: '14px'}}>
                    <Button sx={styles.loginButton}>
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{mb: '14px'}}>
                    <Stack direction='row' alignItems='center' gap='6px'>
                        <Typography sx={styles.signUpText}>Don’t Have An Account?</Typography>
                        <ButtonBase sx={styles.fotgotPasswordButton}>Sign Up</ButtonBase>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoginForms;