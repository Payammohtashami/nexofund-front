import React from 'react';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import styles from './styles';
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';
import { Controller, useForm } from 'react-hook-form';
import { emailValidationSchema } from 'validations/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from 'components/CustomButton';
import { useForgotPassword } from 'client/Mutation';

const ForgotPasswordComponent = ({setStep, turnBack, setTurnBack}) => {
    const { mutate: forgotPasswordSubmit, isLoading: forgotPasswordLoading } = useForgotPassword()
    const backHandler = () => {
        setStep('LOGIN');
        setTurnBack(true);
    };

    const { 
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: ''}, 
        resolver: yupResolver(emailValidationSchema),
    });
    const forgotPasswordHandler = (data) => {
        return;
    };
    return (
        <Box component='form' noValidate onSubmit={handleSubmit(forgotPasswordHandler)}>
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
                    data-aos-delay='250'
                    sx={{mb: '14px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <CustomButton
                        withSpinner
                        type='submit'
                        loading={forgotPasswordLoading}
                        spinnerColor='#FFF'
                        extraSx={styles.loginButton}
                        disabled={!isValid || isSubmitting}
                    >
                        Send Code
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ForgotPasswordComponent;