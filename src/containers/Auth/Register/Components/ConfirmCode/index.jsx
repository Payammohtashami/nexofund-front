import React, { useState } from 'react';
import Icon from 'components/Icon';
import styles from './styles';
import Link from "next/link";
import routes from 'config/routes';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { OtpInputCustom } from 'components/ConfirmCode';
import { Box, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';
import CustomButton from 'components/CustomButton';
import { useConfirmRegisteredCode } from 'client/Mutation';

const ConfirmCode = ({turnBack, setStep}) => {
    const { mutate: confirmRegsiterCodeSubmit, isLoading: conftirmRegisterCodeLoading } = useConfirmRegisteredCode()
    const [ otp, setOtp ] = useState('');
    const { 
        handleSubmit,
        formState: { isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {code: ""}, 
        resolver: yupResolver(emailValidationSchema),
    });
    const confirmEmailHandler = () => {
        confirmRegsiterCodeSubmit(
            {
                code: otp,
                verifyToken: '',
            },
            {
                onSuccess: () => {
                    setStep('SET_PASSWORD')
                },
                onError: (error) => {
                    toast?.error(`${error}`)
                },
            }
        )
    };
    return (
        <Box component='form' noValidate onSubmit={handleSubmit(confirmEmailHandler)}>
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
                <Typography sx={styles.loginText}>Confirmation Code</Typography>
            </Stack>
            <Stack>
                <Typography
                    data-aos="fade-right"
                    data-aos-delay='200' 
                    sx={styles.descriptionText}
                    >
                    we sent the confirmation code to your email , wrong email?
                </Typography>
                <ButtonBase 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150' 
                    sx={styles.fotgotPasswordButton}
                >
                    Edit email
                </ButtonBase>
            </Stack>
            <Grid container>
                <Grid
                    item 
                    xs={12} 
                    sx={{mb: '36px'}}
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <Box sx={styles.inputsStyles}>
                        <OtpInputCustom
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span></span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </Box>
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
                        type="submit"
                        spinnerColor='#FFF'
                        extraSx={styles.loginButton} 
                        disabled={!isValid || isSubmitting}
                        loading={conftirmRegisterCodeLoading}
                    >
                        Confirm
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConfirmCode;