import React from 'react';
import Icon from 'components/Icon';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';
import styles from './styles';
import TextFieldComponent from 'components/TextField';
import Link from 'lib/Link';
import routes from 'enum/routes';

const RegisterForm = ({control, errors, setStep, turnBack}) => {
    return (
        <Box>
            <Stack 
                gap='6px' 
                direction='row' 
                alignItems='center' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
                sx={{mb: '16px'}}
            >
                <IconButton>
                    <Link href={routes.base}>
                        <Icon name='Back' size='20' />
                    </Link>
                </IconButton>
                <Typography sx={styles.loginText}>Sign Up</Typography>
            </Stack>
            <Typography
                data-aos="fade-right"
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
                    sx={{mb: '24px'}} 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='200'
                >
                    <Button sx={styles.loginWithGooglButton}>
                        <img src='/images/google.png' alt='' />
                        Send Code With Google
                    </Button>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    data-aos-delay='300'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <Button sx={styles.loginButton} onClick={() => setStep('CONFIRM_CODE')}>
                        Send Code
                    </Button>
                </Grid>
                <Grid 
                    item
                    xs={12} 
                    data-aos-delay='400'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <Stack direction='row' alignItems='center' gap='6px'>
                        <Typography sx={styles.signUpText}>Already Have An Account?</Typography>
                        <ButtonBase sx={styles.fotgotPasswordButton}>
                            <Link href={routes.auth.login}>
                                Sign In
                            </Link>
                        </ButtonBase>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RegisterForm;