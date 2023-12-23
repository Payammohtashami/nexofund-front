import React from 'react';
import Icon from 'components/Icon';

const Layout = ({ children, activeCoin, setActiveCoin }) => {
    return (
        <div className='mt-3 max-w-md w-full bg-darkness-500 rounded-3xl border p-6 border-darkness-500 backdrop-blur-lg'>
            <div className='flex justify-center'>
                <button 
                    className={`btn bg-darkness-500 !text-base !px-4 flex items-center !rounded-e-none border-2 border-transparent ${activeCoin === 'USDT' ? "!border-primary-400 shadow-btn" : ''}`}
                    onClick={() => setActiveCoin('USDT')}
                >
                    <Icon name='USDT' size='24px' className="mr-2" />
                    USDT
                </button>
                <button 
                    className={`btn bg-darkness-500 !text-base !px-4 flex items-center !rounded-s-none border-2 border-transparent ${activeCoin === 'DOGE' ? "!border-primary-400 shadow-btn" : ''}`}
                    onClick={() => setActiveCoin('DOGE')}
                >
                    <Icon name='DOGE' size='24px' className="mr-2" />
                    DOGE
                </button>
            </div>
            <div className='text-center mb-8 mt-4'>
                <p className='text-white'>Balance : <span className='font-semibold'>400 USDT</span></p>
                <span className='text-xs text-darkness-200'>1 USDT = 16.14 DOGE</span>
            </div>
            {children}
        </div>
    );
};

export default Layout;