import React from 'react';
import styles from './Statistic.module.sass';
import { Grid, Stack, Typography } from '@mui/material';

const Statistic = () => {
    const data = [
        {
            id: 'item-1',
            value: '$130M+',
            title: 'paid out nexofund traders',
        },
        {
            id: 'item-2',
            value: '180+',
            title: 'no. of countries with traders registered at nexofund',
        },
        {
            id: 'item-3',
            value: '16M+',
            title: 'no. of opened every month',
        },
        {
            id: 'item-4',
            value: '8H',
            title: 'avg payout processing time',
        },
    ];
    return (
        <Grid container spacing={2} sx={{mb: 6}}>
            {data?.map((item) => (
                <Grid item xs={6} md={3} key={item.id}>
                    <Stack alignItems='center' direction='column'>
                        <Typography className={styles.value}>{item?.value}</Typography>
                        <Typography className={styles.title}>{item?.title}</Typography>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
};

export default Statistic;