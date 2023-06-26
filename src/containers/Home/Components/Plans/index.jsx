import React, { useState } from 'react';
import PlansCard from './PlansCard';
import PlansDetail from './PlansDetail';
import { Box, Grid, Stack, Typography } from '@mui/material';

const Plans = () => {
    const [activePlan, setActivePlan] = useState('plans-1');
    const [checked, setChecked] = useState(true);
    const [direction, setDirection] = useState('right');

    const planHandler = (id) => {
        setActivePlan(id);
        setChecked(false);
        setDirection('right');
        
        setTimeout(() => {
            setDirection('left');
            setChecked(true);
        }, 1000)
    }
    const plansData = [
        {
            id: 'plans-1',
            name: 'Fund Price',
            price: '15',
            fund: '1000',
            details: [
                {
                    id: 1,
                    title: 'First Target',
                    value: '160 $',
                },
                {
                    id: 2,
                    title: 'Secound Target',
                    value: '80 $',
                },
                {
                    id: 3,
                    title: 'Daily Drawdown',
                    value: '5%',
                },
                {
                    id: 4,
                    title: 'Maximum Drawdown',
                    value: '880 $',
                },
                {
                    id: 5,
                    title: 'Minimum Days',
                    value: '5',
                },
                {
                    id: 6,
                    title: 'Capital growth',
                    value: 'up to 100,000 $',
                },
            ],
        },
        {
            id: 'plans-2',
            name: 'Your Income',
            price: '25',
            fund: '2000',
            details: [
                {
                    id: 1,
                    title: 'First Target',
                    value: '240 $',
                },
                {
                    id: 2,
                    title: 'Secound Target',
                    value: '580 $',
                },
                {
                    id: 3,
                    title: 'Daily Drawdown',
                    value: '25%',
                },
                {
                    id: 4,
                    title: 'Maximum Drawdown',
                    value: '8000 $',
                },
                {
                    id: 5,
                    title: 'Minimum Days',
                    value: '5',
                },
                {
                    id: 6,
                    title: 'Capital growth',
                    value: 'up to 100,000,000 $',
                },
            ],
        },
        {
            id: 'plans-3',
            name: 'Your Income',
            price: '35',
            fund: '3000',
            details: [
                {
                    id: 1,
                    title: 'First Target',
                    value: '160 $',
                },
                {
                    id: 2,
                    title: 'Secound Target',
                    value: '80 $',
                },
                {
                    id: 3,
                    title: 'Daily Drawdown',
                    value: '5%',
                },
                {
                    id: 4,
                    title: 'Maximum Drawdown',
                    value: '880 $',
                },
                {
                    id: 5,
                    title: 'Minimum Days',
                    value: '5',
                },
                {
                    id: 6,
                    title: 'Capital growth',
                    value: 'up to 100,000 $',
                },
            ],
        },
        {
            id: 'plans-4',
            name: 'Your Income',
            price: '50',
            fund: '5000',
            details: [
                {
                    id: 1,
                    title: 'First Target',
                    value: '160 $',
                },
                {
                    id: 2,
                    title: 'Secound Target',
                    value: '80 $',
                },
                {
                    id: 3,
                    title: 'Daily Drawdown',
                    value: '5%',
                },
                {
                    id: 4,
                    title: 'Maximum Drawdown',
                    value: '880 $',
                },
                {
                    id: 5,
                    title: 'Minimum Days',
                    value: '5',
                },
                {
                    id: 6,
                    title: 'Capital growth',
                    value: 'up to 100,000 $',
                },
            ],
        },
        {
            id: 'plans-5',
            name: 'Your Income',
            price: '100',
            fund: '10000',
            details: [
                {
                    id: 1,
                    title: 'First Target',
                    value: '160 $',
                },
                {
                    id: 2,
                    title: 'Secound Target',
                    value: '80 $',
                },
                {
                    id: 3,
                    title: 'Daily Drawdown',
                    value: '5%',
                },
                {
                    id: 4,
                    title: 'Maximum Drawdown',
                    value: '880 $',
                },
                {
                    id: 5,
                    title: 'Minimum Days',
                    value: '5',
                },
                {
                    id: 6,
                    title: 'Capital growth',
                    value: 'up to 100,000 $',
                },
            ],
        },
    ];
    return (
        <Box sx={{mb: 8}}>
            <Typography className='title'>Our Plans <span className='body1'>Per Month</span></Typography>
            <Grid container spacing={2} alignItems='stretch' sx={{mt: 1}}>
                <Grid item xs={12} md={5}>
                    <Stack gap='16px'>
                        {plansData?.map((item) => (
                            <Box key={item?.id}>
                                <PlansCard
                                    data={item} 
                                    isActive={item?.id === activePlan} 
                                    handler={() => planHandler(item?.id)}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                    <PlansDetail direction={direction} checked={checked} data={plansData?.find((item) => item?.id === activePlan)} />
                </Grid>
            </Grid>
        </Box>
    );
};



export default Plans;