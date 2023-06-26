import React from 'react';
import Link from 'lib/Link';
import Icon from 'components/Icon';
import styles from './styles';
import { Box, Button, ButtonBase, Grid, Stack, Typography } from '@mui/material';

const PlansCard = ({data, isActive, handler}) => {
    return (
        <Box
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="200"
            sx={{width: '100%'}}
        >
            <ButtonBase
                onClick={handler} 
                sx={isActive ? styles.activePlanCardWrapper : styles.planCardWrapper}
            >
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={7}>
                        <Stack direction='row' alignItems='center' gap='16px'>
                            <Box sx={isActive ? styles.activePlanCardcircle : styles.planCardcircle} />
                            <Box>
                                <Typography sx={styles.planCardName}>{data?.name}</Typography>
                                <Typography sx={styles.planCardFund}>{data?.fund}<span>USD</span></Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={5}>
                        <Link href='#'>
                            <Box sx={isActive ? styles.activePlanCardButton : styles.planCardButton}>
                                <span>$</span>
                                {data?.price}
                                <span>/month</span>
                                <Icon name='launch' size='24' />
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </ButtonBase>
        </Box>
    );
};

export default PlansCard;