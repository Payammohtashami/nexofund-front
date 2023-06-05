import React, { useEffect, useRef } from 'react';
import JellySVG from './jellyFish';
import { Box } from '@mui/material';

const JellyFish = () => {
    return (
        <Box sx={{
            position: 'absolute',

        }}>
            <JellySVG />
        </Box>
    );
};

export default JellyFish;