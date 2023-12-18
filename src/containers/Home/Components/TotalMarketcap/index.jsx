import React, { useEffect, useRef } from 'react';
import Icon from 'components/Icon';
import styles from './styles';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';


let tvScriptLoadingPromise;
const TotalMarketcap = () => {
    const widthRef = useRef(null);
    const onLoadScriptRef = useRef();
    useEffect(() => {
        onLoadScriptRef.current = createWidget;
        if (!tvScriptLoadingPromise) {
            tvScriptLoadingPromise = new Promise((resolve) => {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.type = 'text/javascript';
            script.onload = resolve;

            document.head.appendChild(script);
            });
        }

        tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

        return () => onLoadScriptRef.current = null;

        function createWidget() {
            if (document.getElementById('tradingview_cad91') && 'TradingView' in window) {
            new window.TradingView.widget({
                width: widthRef?.current?.offsetWidth + 2,
                height: 560,
                symbol: "BINANCE:BTCUSD",
                interval: "D",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "en",
                toolbar_bg: "#f1f3f6",
                enable_publishing: false,
                allow_symbol_change: true,
                hide_top_toolbar: true,
                save_image: false,
                container_id: "tradingview_cad91"
            });
            }
        }
        },
        [widthRef]
    );
    return (
        <div className='pb-20'>
            <h3 className='title'>Crypto Total Market Cap, $</h3>
            <Box sx={{mt: 2}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={11}>
                        <Stack gap='20px'>
                            <Box 
                                ref={widthRef} 
                                sx={{
                                    ...styles.boxesWrapper, 
                                    p: 0,
                                }}
                                >
                                <div className='tradingview-widget-container'>
                                    <div id='tradingview_cad91' />
                                </div>
                            </Box>
                            <Grid container direction='row' spacing='6px'>
                                <Grid item xs={12} md={3.3}>
                                    <Box sx={{...styles.boxesWrapper, flex: 1.5}}>
                                        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                            <Stack direction='row' gap='6px' alignItems='center'>
                                                <Icon name='TOTALMARKETCAP' size='28' />
                                                <Typography sx={styles.percentageText}>Total Market Cap</Typography>
                                            </Stack>
                                            <Stack direction='row' gap='6px'>
                                                <IconButton sx={styles.arrowButton}>
                                                    <Icon name='ArrowTop' />
                                                </IconButton>
                                                <IconButton sx={styles.arrowButton}>
                                                    <Icon name='ArrowBottom' />
                                                </IconButton>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={2.9}>
                                    <Box sx={styles.boxesWrapper}>
                                        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                            <Stack direction='row' gap='6px' alignItems='center'>
                                                <Icon name='Bitcoin' size='28' />
                                                <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                            </Stack >
                                            <Typography sx={styles.positiveText}>+0.03%</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={2.9}>
                                    <Box sx={styles.boxesWrapper}>
                                        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                            <Stack direction='row' gap='6px' alignItems='center'>
                                                <Icon name='BNB' size='28' />
                                                <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                            </Stack >
                                            <Typography sx={styles.positiveText}>+0.03%</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={2.9}>
                                    <Box sx={styles.boxesWrapper}>
                                        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={styles.secondBoxWrapper}>
                                            <Stack direction='row' gap='6px' alignItems='center'>
                                                <Icon name='ETH' size='28' />
                                                <Typography sx={styles.percentageText}>66<span>.9%</span></Typography>
                                            </Stack >
                                            <Typography sx={styles.positiveText}>+0.03%</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <Stack sx={styles.boxesWrapper} gap={'12px'}>
                            <IconButton sx={styles.iconButton}>
                                <Icon name='Camera' size='24' />
                            </IconButton>
                            <IconButton sx={styles.iconButton}>
                                <Icon name='FullScreen' size='24' />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default TotalMarketcap;