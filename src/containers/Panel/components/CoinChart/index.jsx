import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

let tvScriptLoadingPromise;

const CoinChart = () => {
    const smallDevice = useMediaQuery('(min-width:1024px)');
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
                height: !smallDevice ? 420 : 644,
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
        [widthRef, smallDevice]
    );
    return (
        <div className='mb-5 w-full' ref={widthRef}>
            <div className='tradingview-widget-container'>
                <div id='tradingview_cad91' />
            </div>
        </div>
    );
};

export default CoinChart;