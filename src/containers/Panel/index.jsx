import { Box, Grid } from '@mui/material';
import React from 'react';
import CoinChart from './components/CoinChart';
import DailyNews from './components/DailyNews';
import Isolation from './components/Isolation';
import Status from './components/Status';

const Panel = () => {
    return (
        <Box sx={{minHeight: '100vh', my: '108px'}}>
            <Box className='container'>
                <Grid container spacing='20px' alignItems='stretch'>
                    <Grid item xs={12} md={8}>
                        <CoinChart />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DailyNews />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Isolation />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Status />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Panel;