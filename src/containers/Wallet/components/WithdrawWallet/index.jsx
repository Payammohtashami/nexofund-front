import React from 'react';
// forms
import { Controller, useForm } from 'react-hook-form';

// components
import Icon from 'components/Icon';
import Layout from '../Layout';
import TextFieldComponent from 'components/TextField';


const WithdrawWallet = ({setStep, setActiveCoin, activeCoin}) => {
    const { control, formState: { errors }, } = useForm({ defaultValues: { address: "" }});
    return (
        <Layout {...{setActiveCoin, activeCoin}}>
            <div className='mb-8'>
                <Controller
                    name='email'
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
            <button className='btn btn-blue w-full'>
                Next
            </button>
        </Layout>
    );
};

export default WithdrawWallet;