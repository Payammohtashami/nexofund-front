import React, { useEffect, useRef, useState } from 'react';
import Icon from 'components/Icon';
import Link from 'lib/Link';
import Image from 'next/image';
import styles from './styles.js';
import { Box, Button, ButtonBase, Divider, Grid, Stack, Typography } from '@mui/material';
import Aos from 'aos';

const Plans = () => {
    const [activePlan, setActivePlan] = useState('plans-1');
    const [plansChanged, setPlanChanged] = useState(false)
    useEffect(() => {
        Aos.init({
            anchorPlacement: plansChanged,
        });
        console.log({plansChanged}, 'I am Here');
    }, [plansChanged])
    const planHandler = (id) => {
        setActivePlan(id);
        setPlanChanged(true);
        setTimeout(() => {
            setPlanChanged(false)
        }, 300)
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
    ]
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
                    <PlansDetail plansChanged={plansChanged} data={plansData?.find((item) => item?.id === activePlan)} />
                </Grid>
            </Grid>
        </Box>
    );
};

const PlansCard = ({data, isActive, handler}) => {
    return (
        <ButtonBase onClick={handler} sx={isActive ? styles.activePlanCardWrapper : styles.planCardWrapper}>
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
                    <Link href='' className={isActive ? styles.activePlanCardButton : styles.planCardButton}>
                        <span>$</span>
                        {data?.price}
                        <span>/month</span>
                        <Icon name='launch' size='24' />
                    </Link>
                </Grid>
            </Grid>
        </ButtonBase>
    );
};


const PlansDetail = ({data, plansChanged}) => {
    const ref = useRef(null);
    const offsetWidth = ref?.current?.offsetWidth || 100;

    return (
        <Box sx={styles.PlansDetailWrapper}>
            <Grid container spacing={2} alignItems='stretch' sx={{height: '100%'}}>
                <Grid item xs={12} md={6}>
                    <Stack direction='column' justifyContent='center' sx={{height: '100%'}}>
                        <Typography sx={styles.PlansDetailTitle}>What’s in this plan?</Typography>
                        <Stack gap='32px' sx={{mt: '32px'}}>
                            {data?.details?.map((item, index) => (
                                <Stack
                                    key={`index-${index}`}
                                    data-aos={plansChanged ? 'fade-left' : 'fade-right'}
                                    data-aos-delay={index * 30}
                                    direction='row' 
                                    alignItems='center' 
                                    gap='8px'
                                >
                                    <Typography sx={styles.planDetailText}>{item?.title}</Typography>
                                    <Divider sx={{flex: 1, bgcolor: 'rgba(255,255,255,0.1)'}} />
                                    <Typography sx={styles.planDetailText}>{item?.value}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack alignItems='center' justifyContent='center' sx={{width: '100%', height: '100%'}} ref={ref}>
                        <Image src='/images/Home/plans.png' width={offsetWidth} height={offsetWidth} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Plans;