import React from 'react';
import Link from 'next/link';
import routes from 'config/routes';

// components
import Icon from 'components/Icon';
import CustomButton from 'components/CustomButton';
import TextFieldComponent from 'components/TextField';

// forms
import { Controller, useForm } from 'react-hook-form';

const SetPassword = ({ turnBack }) => {
    const { 
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {password: '', confirmPassword: ''}, 
    });

    const setPassword = () => {};
    return (
        <>
            <Link href={routes.auth.login} className='flex items-center mb-4 gap-3'>
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Choose Your Password</p>
            </Link>
            
            <form noValidate onSubmit={handleSubmit(setPassword)}>
                <div
                    className='mt-6'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <Controller
                        name='password'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='password'
                                label='Your New Password'
                                placeholder='Enter Your Password'
                                errors={errors?.password?.message}
                                Icon={
                                    <Icon name='passwod' size='24' />
                                }
                            />
                            )
                        }
                    />
                </div>
                <div
                    className='mt-6'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
                    <Controller
                        name='password'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='text'
                                name='password'
                                label='Your New Password'
                                placeholder='Enter Your Password'
                                errors={errors?.password?.message}
                                Icon={
                                    <Icon name='passwod' size='24' />
                                }
                            />
                            )
                        }
                    />
                </div>
                <CustomButton
                    withSpinner
                    type='submit'
                    loading={false}
                    className="btn btn-blue w-full disabled:bg-primary-400/50 mt-6"
                >
                    Confirm
                </CustomButton>
            </form>
        </>
    );
};

export default SetPassword;