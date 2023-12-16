import React from 'react';
import Icon from 'components/Icon';
import styles from './styles';
import Link from 'next/link';
import routes from 'config/routes';
import TextFieldComponent from 'components/TextField';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from 'validations/auth';
import CustomButton from 'components/CustomButton';

const LoginForms = ({ setStep, turnBack}) => {
    const { 
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: "", password: ''}, 
        resolver: yupResolver(loginValidationSchema),
    });
    
    const loginHandler = (data) => {
        
    };
    return (
        <Box component='form' noValidate onSubmit={handleSubmit(loginHandler)}>
            <Stack 
                gap='6px' 
                direction='row' 
                alignItems='center' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
                sx={{mb: '16px'}}
            >
                <IconButton>
                    <Link href='/'>
                        <Icon name='Back' size='20' />
                    </Link>
                </IconButton>
                <Typography sx={styles.loginText}>Login</Typography>
            </Stack>
            <Grid container>
                <Grid 
                    item 
                    xs={12} 
                    sx={{mb: '36px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <Controller
                        name='email'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='email'
                                label='Your Email'
                                placeholder='Enter Your Email'
                                errors={errors?.email?.message}
                                Icon={
                                    <Icon name='email' size='24' />
                                }
                            />
                            )
                        }
                    />
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sx={{mb: '36px'}} 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='300'
                >
                    <Controller
                        name='password'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='password'
                                name='password'
                                label='Your Password'
                                placeholder='Enter Your Password'
                                errors={errors?.password?.message}
                                Icon={
                                    <Icon name='passwod' size='24' />
                                }
                            />
                            )
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
                        Login With Google
                    </Button>
                </Grid>
                <Grid 
                    item
                    xs={12}
                    data-aos-delay='100'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    sx={{mb: '24px'}}
                >
                    <ButtonBase 
                        sx={styles.fotgotPasswordButton} 
                        onClick={() => setStep('FORGOT_PASSWORD')}
                    >
                        Forgot Your Password?
                    </ButtonBase>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    data-aos-delay='300'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <CustomButton 
                        withSpinner
                        type='submit'
                        loading={false}
                        spinnerColor='#FFF'
                        extraSx={styles.loginButton}
                        disabled={!isValid || isSubmitting}
                    >
                        Login
                    </CustomButton>
                </Grid>
                <Grid 
                    item
                    xs={12} 
                    data-aos-delay='400'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <Stack direction='row' alignItems='center' gap='6px'>
                        <Typography sx={styles.signUpText}>Don’t Have An Account?</Typography>
                        <ButtonBase sx={styles.fotgotPasswordButton}>
                            <Link href={routes.auth.register}>
                                Sign Up
                            </Link>
                        </ButtonBase>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoginForms;