import React, { useEffect, useRef, useState } from 'react';
import Icon from 'components/Icon';
import Link from 'lib/Link';
import Image from 'next/image';
import styles from './styles.js';
import { Box, Button, ButtonBase, Divider, Grid, Slide, Stack, Typography } from '@mui/material';

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
            <Grid container spacing={3} alignItems='stretch' sx={{mt: 1}}>
                <Grid item xs={12} md={5}>
                    <Stack gap='16px'>
                        {plansData?.map((item) => (
                            <PlansCard
                                data={item} 
                                key={item?.id}
                                isActive={item?.id === activePlan} 
                                handler={() => planHandler(item?.id)}
                            />
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
                            <Button sx={isActive ? styles.activePlanCardButton : styles.planCardButton}>
                                <span>$</span>
                                {data?.price}
                                <span>/month</span>
                                <Icon name='launch' size='24' />
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </ButtonBase>
        </Box>
    );
};


const PlansDetail = ({direction, checked, data}) => {
    return (
        <Box 
            sx={styles.PlansDetailWrapper}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
        >
            <Grid container spacing={2} alignItems='stretch' sx={{height: '100%'}}>
                <Grid item xs={12} md={6}>
                    <Stack direction='column' justifyContent='center' sx={{height: '100%'}}>
                        <Typography sx={styles.PlansDetailTitle}>What’s in this plan?</Typography>
                        <Stack gap='32px' sx={{mt: '32px', height: '232px'}}>
                            {data?.details?.map((item, index) => (
                                <Slide direction={direction} in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `${index * 50}ms`}}>
                                    <Stack
                                        key={`index-${index}`}
                                        direction='row' 
                                        alignItems='center' 
                                        gap='8px'
                                    >
                                        <Typography sx={styles.planDetailText}>{item?.title}</Typography>
                                        <Divider sx={{flex: 1, bgcolor: 'rgba(255,255,255,0.1)'}} />
                                        <Typography sx={styles.planDetailText}>{item?.value}</Typography>
                                    </Stack>
                                </Slide>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Slide direction={direction} in={checked} style={{transitionDuration: '0.5s', transitionDelay: !checked ? 0 : `200ms`}}>
                        <Stack alignItems='center' justifyContent='center' sx={{width: '100%', height: '100%'}}>
                            <Image src='/images/Home/plans.png' width={320} height={320} />
                        </Stack>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Plans;