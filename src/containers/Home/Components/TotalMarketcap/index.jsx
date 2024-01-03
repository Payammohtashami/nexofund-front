import React, { useEffect, useRef } from 'react';

// components
import Icon from 'components/Icon';


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

    const coins = [
        {
            name: 'Bitcoin',
            icon: 'Bitcoin',
            day: {
                status: 'INCREASE',
                value: '66',
                float: '1',
            },
            hour: {
                status: 'INCREASE',
                value: '+3.1'
            },
        },
        {
            name: 'Ethereum',
            icon: 'ETH',
            day: {
                status: 'INCREASE',
                value: '66',
                float: '1',
            },
            hour: {
                status: 'INCREASE',
                value: '+3.%'
            },
        },
        {
            name: 'Binance Coin',
            icon: 'BNB',
            day: {
                status: 'INCREASE',
                value: '66',
                float: '1',
            },
            hour: {
                status: 'DECREASE',
                value: '+3.1'
            },
        },
    ];
    return (
        <div className='pb-20'>
            <h3 className='title mb-4'>Crypto Total Market Cap, $</h3>
            <div>
                <div className='grid grid-cols-12 gap-4 items-start'>
                    <div className='col-span-12 md:col-span-11 w-full'>
                        <div className='mb-5 w-full' ref={widthRef}>
                            <div className='tradingview-widget-container'>
                                <div id='tradingview_cad91' />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-2'>
                            <div className='col-span-4 md:col-span-1 p-4 border  bg-darkness-500 border-darkness-500 rounded-3xl'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon name='TOTALMARKETCAP' size='28' />
                                        <p className='text-white text-xs'>Total Market Cap</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button className='bg-primary-400 rounded-xl p-2 transition-colors hover:bg-primary-500'>
                                            <Icon name='ArrowTop' />
                                        </button>
                                        <button className='bg-primary-400 rounded-xl p-2 transition-colors hover:bg-primary-500'>
                                            <Icon name='ArrowBottom' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {coins?.map((items) => (
                                <div key={items?.name} className='flex items-center justify-between col-span-4 md:col-span-1 p-4 border  bg-darkness-500 border-darkness-500 rounded-3xl'>
                                    <div className='flex gap-2 items-center'>
                                        <Icon name={items?.icon} size='28' />
                                        <p className='text-white'>{items?.day?.value}<span className='text-xs text-darkness-200'>.{items?.day?.float}%</span></p>
                                    </div>
                                    <span className={`${items?.hour?.status === 'INCREASE' ? 'text-other-green' : 'text-other-red'} mt-1 text-xs`}>{items?.hour?.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1 gap-4 flex flex-col p-2 border  bg-darkness-500 border-darkness-500 rounded-3xl'>
                        <button className='flex items-center justify-center rounded-full p-2 transition-colors w-fit mx-auto hover:bg-darkness-500'>
                            <Icon name='Camera' size='24' />
                        </button>
                        <button className='flex items-center justify-center rounded-full p-2 transition-colors w-fit mx-auto hover:bg-darkness-500'>
                            <Icon name='FullScreen' size='24' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalMarketcap;