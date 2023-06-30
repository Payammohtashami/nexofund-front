import React, { useState } from 'react';
import styles from './styles';
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';
import { Box, Button, ButtonGroup, Grid, Stack, TextField, Typography } from '@mui/material';

const Isolation = () => {
    const [activeMode, setActiveMode] = useState('SELL');
    return (
        <Box sx={styles.wrapper}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Typography sx={styles.title}>Isolation</Typography>
                    <Typography sx={styles.description}>Your Balance : <span>8,900$</span></Typography>
                </Box>
                <Box>
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                        <Button onClick={() => setActiveMode('BUY')} sx={activeMode === 'BUY' ? styles.buyButton : styles.defaultMode}>Buy</Button>
                        <Button onClick={() => setActiveMode('SELL')} sx={activeMode === 'SELL' ? styles.sellButton : styles.defaultMode}>Sell</Button>
                    </ButtonGroup>
                </Box>
            </Stack>
            <Box sx={{my: '24px'}}>
                <Stack direction='row' alignItems='flex-end' gap='16px'>
                    <Box sx={{flex: 1}}>
                        <TextFieldComponent
                            type='text'
                            name='amount'
                            placeholder='Amount'
                            label='Enter Amount'
                        />
                    </Box>
                    <Button sx={styles.submitButton}>Submit</Button>
                </Stack>
            </Box>
            <Box sx={{mb: '16px'}}>
                <Grid container spacing='24px'>
                    <Grid item xs={6} md={3}>
                        <Box>
                            <Typography sx={styles.itemTitle}>Take Profit</Typography>
                            <Box sx={styles.itemInputValue}>
                                <TextField />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box>
                            <Typography sx={styles.itemTitle}>Stop Loss</Typography>
                            <Box sx={styles.itemInputValue}>
                                <TextField />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box>
                            <Typography sx={styles.itemTitle}>Leverage</Typography>
                            <Box sx={styles.itemInputValue}>
                                <TextField />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box>
                            <Typography sx={styles.itemTitle}>Liquid Price :</Typography>
                            <Box sx={styles.itemInputValue}>
                                <TextField />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography sx={styles.title}>AI Analyse</Typography>
                <Box sx={styles.descriptionWrapper}>
                    <Typography sx={styles.analysDescription}>
                        Lorem ipsum dolor sit amet, t dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud Lorem ipsum dolor sit amet, t dolore magna aliqua. 
                        Ut enim ad 
                    </Typography>
                </Box>
                <Stack direction='row' alignItems='center' gap='24px' sx={{px: '18px', my: '12px'}}>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={styles.analysStats}>60%</Typography>
                        <Icon name='increaseArrow' size='24px' />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={styles.analysStats}>40%</Typography>
                        <Icon name='decreaseArrow' size='24px' />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Isolation;