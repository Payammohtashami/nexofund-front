import React from 'react';
import Icon from 'components/Icon';
import styles from './styles';
import Link from 'next/link';
import routes from 'config/routes';
import CustomButton from 'components/CustomButton';
import TextFieldComponent from 'components/TextField';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidationSchema } from 'validations/auth';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useRegisterEmail } from 'client/Mutation';
import { toast } from 'react-hot-toast';

const RegisterForm = ({setStep, turnBack}) => {
    const { mutate: registerEmailSubmit, isLoading: registerEmailLoading } = useRegisterEmail()
    const { 
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: ""}, 
        resolver: yupResolver(emailValidationSchema),
    });
    const registerHandler = (data) => {
        registerEmailSubmit(
            data,
            {
                onSuccess: () => {
                    setStep('CONFIRM_CODE')
                },
                onError: (error) => {
                    toast?.error(`${error?.response?.data?.message}`)
                },
            }
        )
    };
    return (
        <Box component='form' noValidate onSubmit={handleSubmit(registerHandler)}>
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
                    <CustomButton
                        type="submit"
                        withSpinner
                        spinnerColor='#FFF'
                        loading={registerEmailLoading}
                        extraSx={styles.loginButton} 
                        disabled={!isValid || isSubmitting}
                    >
                        Send Code
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