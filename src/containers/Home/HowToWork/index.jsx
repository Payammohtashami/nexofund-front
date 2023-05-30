import React from 'react';
import { Box, Typography } from '@mui/material';

const HowToWork = () => {
    return (
        <Box sx={{mt: '-20vh'}}>
            <Typography sx={{
                textAlign: 'center',
                fontSize: '26px !important',
                fontWeight: 600
            }}>How It Works?</Typography>
            <Box sx={{
                height: '300px'
            }}>

            </Box>
        </Box>
    );
};

export default HowToWork;