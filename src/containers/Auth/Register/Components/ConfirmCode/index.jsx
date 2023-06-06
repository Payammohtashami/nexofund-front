import React, { useState } from 'react';
import Icon from 'components/Icon';
import Link from 'lib/Link';
import styles from './styles';
import routes from 'enum/routes';
import { OtpInputCustom } from 'components/ConfirmCode';
import { Box, Button, ButtonBase, Grid, IconButton, Stack, Typography } from '@mui/material';

const ConfirmCode = ({turnBack, setStep}) => {
    const [otp, setOtp] = useState('');
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
                    <Button sx={styles.loginButton} onClick={() => setStep('SET_PASSWORD')}>
                        Confirm
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConfirmCode;