import React from 'react';
import styles from './styles';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Icon from 'components/Icon';
import { socialMedia } from 'enum/main';
import Mesh from 'components/Mesh';

const Footer = () => {
    return (
        <Box sx={styles.wrapper}>
          <Stack direction='column' alignItems='center' justifyContent='center'  gap='24px' sx={{py: '32px'}}>
            <Box sx={styles.divider} />
            <Typography className='title' sx={{textAlign: 'center'}}>
              Join The Team <br /> Of Our Experienced Traders
            </Typography>
            <Stack direction='row' gap='12px'>
              <Button sx={styles.blueButton}>Start Premium</Button>
              <Button sx={styles.whiteButton}>Free Trial</Button>
            </Stack>
            <Stack direction='row' alignItems='center' gap='24px'>
              {socialMedia?.map((item) => (
                <Box>
                  <IconButton>
                      <Icon name={item?.name} size='24px' />
                  </IconButton>
                </Box>
              ))}
            </Stack>
            <Box sx={styles.divider} />
            </Stack>
            <Mesh
                bgcolor='#2817ED'
                size='88px'
                left='0'
                bottom='70vh'
            />
            
            <Mesh 
                bgcolor='#B53FEC'
                size='88px'
                right='5%'
                bottom='40vh'
            />
        </Box>
    );
};

export default Footer;