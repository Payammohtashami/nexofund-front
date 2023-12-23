import React from 'react';
import Layout from '../Layout';

const MainSection = ({setStep, setActiveCoin, activeCoin}) => {
    return (
        <>
            <p className='font-semibold text-xl text-white'>Wallet</p>
            <Layout {...{setActiveCoin, activeCoin}}>
                <div className='flex justify-center gap-4'>
                    <button
                        onClick={() => setStep(1)}
                        className='rounded-2xl transition-all px-6 py-3 bg-other-green text-darkness-600 capitalize hover:text-white hover:bg-darkness-500'
                        >
                        Deposit
                    </button>
                    <button 
                        className='rounded-2xl transition-all px-6 py-3 bg-other-red text-darkness-600 capitalize hover:text-white hover:bg-darkness-500'
                        onClick={() => setStep(3)}
                    >
                        Withdraw
                    </button>
                </div>
            </Layout>
        </>
    );
};

export default MainSection;