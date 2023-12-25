import React from 'react';

// components
import Status from './components/Status';
import DailyNews from './components/DailyNews';
import Isolation from './components/Isolation';
import CoinChart from './components/CoinChart';

const Panel = () => {
    return (
        <div className='container pt-32 mx-auto px-2 xl:max-w-screen-xl relative top-0 md:px-0 mb-24'>
            <div className='grid items-stretch gap-5 grid-cols-1 md:grid-cols-3 min-h-screen'>
                <div className='col-span-1 md:col-span-2'>
                    <CoinChart />
                </div>
                <div className='col-span-1 md:col-span-1'>
                    <DailyNews />
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <Isolation />
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <Status />
                </div>
            </div>
        </div>
    );
};

export default Panel;