import React from 'react';
import Icon from 'components/Icon';
import Layout from '../Layout';

const SelectChain = ({activeChain, setACtiveChain, setStep, setActiveCoin, activeCoin}) => {
    const chainsList = [
        {
            name: 'ERC-20',
            icon: 'ETH',
        },
        {
            name: 'BEP-20',
            icon: 'BSC20'
        },
        {
            name: 'TRC-20',
            icon: 'TRC20'
        },
        {
            name: 'Polygon',
            icon: 'Polygon'
        },
    ]
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
                <p className='font-semibold text-xl text-white'>Deposit</p>
            </div>
            <Layout {...{setActiveCoin, activeCoin}}>
                <div className='flex flex-col gap-2'>
                    <h6 className='font-semibold text-white'>Choose Chain</h6>
                    <div className='grid grid-cols-2 gap-4'>
                        {chainsList?.map((item) => (
                            <div className='col-span-1' key={item?.name}>
                                <button className={`btn bg-darkness-500 !text-base flex border-2 border-transparent items-center w-full gap-2 ${item?.name === activeChain ? 'shadow-btn !border-primary-400' : ''}`} onClick={() => setACtiveChain(item?.name)}>
                                    <Icon name={item?.icon} size='24' />
                                    {item?.name}
                                </button>
                            </div>
                        ))}
                        <div className='col-span-2'>
                            <button className='btn btn-blue !text-base w-full' onClick={() => setStep(2)}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SelectChain;