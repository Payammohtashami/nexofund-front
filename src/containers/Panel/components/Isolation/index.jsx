import React, { useState } from 'react';
// forms
import { Controller, useForm } from 'react-hook-form';

// components
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';


const Isolation = () => {
    const [activeMode, setActiveMode] = useState('SELL');
    const { control, formState: { errors }, } = useForm({ defaultValues: { amount: '', take_profit: '', stop_loss: '', leverage: '', liquid_price: '' }});
    return (
        <div className='border border-darkness-500 relative backdrop-blur-lg rounded-3xl w-full overflow-auto bg-darkness-500 px-6 py-4'>

            <div className='flex justify-between items-start'>
                <div>
                    <h5 className='text-xl mb-1 text-white font-semibold'>Isolation</h5>
                    <p className='text-darkness-200 text-lg'>
                        Your Balance : 
                        <span className='text-darkness-100 text-xl ml-1'>8,900$</span>
                    </p>
                </div>
                <div className='flex'>
                    <button 
                        onClick={() => setActiveMode('BUY')}
                        className={`rounded-s-xl px-4 transition-colors py-2 text-white bg-darkness-500 border-2 ${activeMode === 'BUY' ? 'border-other-green' : 'border-transparent'}`}
                        >
                        Buy
                    </button>
                    <button
                        onClick={() => setActiveMode('SELL')}
                        className={`rounded-e-xl px-4 py-2 transition-colors text-white bg-darkness-500 border-2 ${activeMode === 'SELL' ? 'border-other-red' : 'border-transparent'}`}
                    >
                        Sell
                    </button>
                </div>
            </div>

            <div className='my-6 flex justify-between gap-4 items-end'>
                <div className='flex-1'>
                    <Controller
                        name='amount'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='amount'
                                label='Amount'
                                placeholder='Enter Your Amount'
                                errors={errors?.amount?.message}
                                Icon={
                                    <Icon name='Wallet' size='24' />
                                }
                            />
                            )
                        }
                    />
                </div>
                <button className={`rounded-xl transition-all px-6 py-4 text-darkness-600 capitalize hover:text-white hover:bg-darkness-500 ${activeMode === 'SELL' ? 'bg-other-red' : 'bg-other-green' }`}>Submit</button>
            </div>

            <div className='mb-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12'>
                <div>
                    <Controller
                        name='take_profit'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                name='take_profit'
                                label='Take Profit'
                                field={field}
                                errors={errors?.take_profit?.message}
                                placeholder='0.48'
                            />
                            )
                        }
                    />
                </div>
                <div>
                    <Controller
                        name='stop_loss'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                name='stop_loss'
                                label='Stop Loss'
                                field={field}
                                errors={errors?.stop_loss?.message}
                                placeholder='0.48'
                            />
                            )
                        }
                    />
                </div>
                <div>
                    <Controller
                        name='leverage'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                name='leverage'
                                label='Leverage'
                                field={field}
                                errors={errors?.leverage?.message}
                                placeholder='15x'
                            />
                            )
                        }
                    />
                </div>
                <div>
                    <Controller
                        name='liquid_price'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                name='liquid_price'
                                label='Liquid Price'
                                field={field}
                                errors={errors?.liquid_price?.message}
                                placeholder='$62.85'
                            />
                            )
                        }
                    />
                </div>
            </div>

            <div>
                <h5 className='text-white text-xl font-semibold'>AI Analyse</h5>
                <div className='mt-2 rounded-lg px-4 py-2 bg-darkness-500'>
                    <p className='text-darkness-200 text-sm'>
                        Lorem ipsum dolor sit amet, t dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud Lorem ipsum dolor sit amet, t dolore magna aliqua. 
                        Ut enim ad 
                    </p>
                </div>
                <div className='flex items-center gap-6 py-3 px-4'>
                    <p className='flex items-center text-darkness-200'>
                        60%
                        <Icon name='increaseArrow' size='24px' />
                    </p>
                    <p className='flex items-center text-darkness-200'>
                        40%
                        <Icon name='decreaseArrow' size='24px' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Isolation;