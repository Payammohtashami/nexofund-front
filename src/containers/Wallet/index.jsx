import React, { useState } from 'react';
import MainSection from './components/MainSection';
import SelectChain from './components/SelectChain';
import CreateWallet from './components/CreatWallet';
import WithdrawWallet from './components/WithdrawWallet';

const MainWallet = () => {
    const [step, setStep] = useState(0);
    const [activeCoin, setActiveCoin] = useState('USDT');
    const [activeChain, setACtiveChain] = useState('ETH');
    return (
        <div className='container py-56 mx-auto px-2 xl:max-w-screen-xl top-0 md:px-0'>
            <div className='items-stretch grid grid-cols-1 md:grid-cols-2'>
                <div className='col-span1'>
                    {step === 0 ? <MainSection activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 1 ? <SelectChain activeCoin={activeCoin} activeChain={activeChain} setACtiveChain={setACtiveChain} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 2 ? <CreateWallet activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                    {step === 3 ? <WithdrawWallet activeCoin={activeCoin} setStep={setStep} setActiveCoin={setActiveCoin} /> : null}
                </div>
                <div className='col-span1'>
                    <img className='w-full' src='/images/Wallet/walletBackground.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default MainWallet;