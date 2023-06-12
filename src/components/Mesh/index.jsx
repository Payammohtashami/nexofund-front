import React from 'react';
import { Box } from '@mui/material';

const Mesh = ({bgcolor, size, top, left, right, bottom}) => {
    return (
        <Box 
            sx={{
                top,
                left,
                right,
                bottom,
                bgcolor,
                width: size,
                height: size,
                position: 'absolute',
                borderRadius: '50%',
                filter: 'blur(65px)',
                zIndex: -5,
                animation: 'meshSpin 3s linear infinite',
            }}
        />
    );
};

export default Mesh;