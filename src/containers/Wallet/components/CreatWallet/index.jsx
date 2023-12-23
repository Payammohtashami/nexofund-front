import React from 'react';
import Icon from 'components/Icon';
import Layout from '../Layout';

const CreateWallet = ({setStep, setActiveCoin, activeCoin}) => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <button 
                    className='text-darkness-200 font-medium text-lg'
                    onClick={() => setStep(0)} 
                >
                    Wallet
                </button>
                <Icon name='RightArrow' size='14px' />
                <button 
                    className='text-darkness-200 font-medium text-lg'
                    onClick={() => setStep(1)} 
                >
                    Deposit
                </button>
                <Icon name='RightArrow' size='14px' />
                <p className='font-semibold text-xl text-white'>Address</p>
            </div>
            <Layout {...{setActiveCoin, activeCoin}}>
                <div>
                    <p className='ml-3 text-white text-sm'>Here is your address</p>
                    <div className='flex items-center justify-between mt-4 rounded-2xl bg-darkness-700 py .-1 px-5 border border-primary-400'>
                        <p className='text-white text-sm tracking-wider'>fweffkigrgigeisgir-0fisfw00fiff0f</p>
                        <button className='rounded-full p-2 transition-colors hover:bg-darkness-500'>
                            <Icon name='copy' size='24px' />
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='ml-3 text-white text-sm'>Or Scan This QR</p>
                    <div className='flex justify-center mb-12 mt-3'>
                        <Icon name='simpleQRCode' size='88px' />
                    </div>
                    <button className='rounded-2xl transition-all px-6 py-3 bg-other-green text-darkness-600 capitalize hover:text-white hover:bg-darkness-500 w-full'>
                        Deposit
                    </button>
                </div>
            </Layout>
        </>
    );
};

export default CreateWallet;