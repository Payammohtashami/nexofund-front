import React, { useState } from 'react';
import Icon from 'components/Icon';
import Link from 'lib/Link';
import styles from './styles';
import routes from 'enum/routes';
import { OtpInputCustom } from 'components/ConfirmCode';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';

const ConfirmCode = ({turnBack, setTurnBack, setStep}) => {
    const [otp, setOtp] = useState('');
    const editEmailHandler = () => {
        setTurnBack(true);
        setStep('FORGOT_PASSWORD');
    };
    const backToLogin = () => {
        setTurnBack(true);
        setStep('LOGIN');
    };
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
                <IconButton onClick={backToLogin}>
                    <Icon name='Back' size='20' />
                </IconButton>
                <Typography sx={styles.loginText}>Forgot Password</Typography>
            </Stack>
            <Stack>
                <Typography
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='200' 
                    sx={styles.descriptionText}
                    >
                    we sent the confirmation code to your email , wrong email?
                </Typography>
                <ButtonBase 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150' 
                    sx={styles.fotgotPasswordButton}
                    onClick={editEmailHandler}
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
                    <Button sx={styles.loginButton}>
                        Confirm
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConfirmCode;