import React from 'react';
import { Box } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';

const Mesh = ({translateY, translateX, bgcolor, size, top, left, right, bottom}) => {
    return (
        <Parallax 
            translateY={translateY ? translateY : ''} 
            translateX={translateX ? translateX : ''}
        >
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
                    filter: 'blur(45px)',
                    animation: 'meshSpin 3s linear infinite',
                }}
            />
        </Parallax>
    );
};

export default Mesh;