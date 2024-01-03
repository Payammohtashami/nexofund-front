import React from 'react';
import Link from 'next/link';
import routes from 'config/routes';

// components
import Icon from 'components/Icon';
import CustomButton from 'components/CustomButton';
import TextFieldComponent from 'components/TextField';

// forms
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { emailValidationSchema } from 'validations/auth';

const ForgotPasswordComponent = ({ setStep }) => {
    const { 
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: ''}, 
        resolver: yupResolver(emailValidationSchema),
    });
    const forgotPasswordHandler = (data) => {
        setStep('CONFIRM_CODE');
    };
    return (
        <form noValidate onSubmit={handleSubmit(forgotPasswordHandler)}>
            <Link href={routes.auth.login} className='flex items-center mb-4 gap-3'>
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Forgot Password</p>
            </Link>
            <p className='text-darkness-200 mb-6'>
                We will send you A 4 digit confirmation code please make sure your email is currect.
            </p>
                <Controller
                    name='email'
                    control={control}
                    render={({field}) => (
                        <TextFieldComponent
                            field={field}
                            type='text'
                            name='email'
                            label='Your Email'
                            placeholder='Enter Your Email'
                            errors={errors?.email?.message}
                            Icon={
                                <Icon name='email' size='24' />
                            }
                        />
                        )
                    }
                />
                <CustomButton
                    withSpinner
                    type='submit'
                    loading={false}
                    className="btn btn-blue w-full disabled:bg-primary-400/50 mt-6"
                >
                    Send Code
                </CustomButton>
        </form>
    );
};

export default ForgotPasswordComponent;