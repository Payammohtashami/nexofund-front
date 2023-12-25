import React from 'react';
// forms
import { Controller, useForm } from 'react-hook-form';

// components
import Icon from 'components/Icon';
import Layout from '../Layout';
import TextFieldComponent from 'components/TextField';


const WithdrawWallet = ({setActiveCoin, activeCoin}) => {
    const { control, formState: { errors }, } = useForm({ defaultValues: { address: "" }});
    return (
        <Layout {...{setActiveCoin, activeCoin}}>
            <div className='flex flex-col gap-6 mb-8'>
                <div>
                    <Controller
                        name='address'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='address'
                                label='Your Address'
                                placeholder='Enter Your wallet address'
                                errors={errors?.email?.message}
                                Icon={<Icon name='Wallet' size='24' />}
                            />
                            )
                        }
                    />
                </div>
                <div>
                    <Controller
                        name='amount'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='amount'
                                label='Amount'
                                placeholder='Enter Your withdraw amount'
                                errors={errors?.email?.message}
                                Icon={<Icon name='Wallet' size='24' />}
                            />
                            )
                        }
                    />
                </div>
            </div>
            <button className='btn btn-blue w-full'>
                Complete
            </button>
        </Layout>
    );
};

export default WithdrawWallet;