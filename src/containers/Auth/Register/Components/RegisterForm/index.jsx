import React from 'react';
import Link from 'next/link';
import routes from 'config/routes';

// forms
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from 'react-hook-form';
import { emailValidationSchema } from 'validations/auth';

// components
import Icon from 'components/Icon';
import CustomButton from 'components/CustomButton';
import TextFieldComponent from 'components/TextField';


const RegisterForm = ({setStep, turnBack}) => {
    const { 
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: ""}, 
        resolver: yupResolver(emailValidationSchema),
    });
    const registerHandler = () => {
        setStep('CONFIRM_CODE')
    };
    return (
        <form noValidate onSubmit={handleSubmit(registerHandler)}>
            <Link href={routes.base} className='flex items-center mb-4 gap-3' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
            >
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Sign Up</p>
            </Link>
            <p
                data-aos="fade-right"
                data-aos-delay='200' 
                className='mb-6 text-darkness-200'
            >
                We will send you A 4 digit confirmation code please make sure your email is currect.
            </p>
            <div className='flex flex-col gap-6'>
                <div
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
                >
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
                                Icon={<Icon name='email' size='24' />}
                            />
                            )
                        }
                    />
                </div>
                <div 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='200'
                >
                    <button className='flex items-center text-darkness-600 bg-white w-full rounded-xl px-5 py-3 gap-3 border border-transparent hover:border-primary-400 hover:text-white hover:shadow-btn  hover:bg-darkness-500 transition-all'>
                        <img src='/images/google.png' alt='' />
                        Send Code With Google
                    </button>
                </div>
                <div 
                    data-aos-delay='300'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <CustomButton
                        type="submit"
                        withSpinner
                        spinnerColor='#FFF'
                        className='btn btn-blue w-full' 
                    >
                        Send Code
                    </CustomButton>
                    <p className='text-darkness-100 text-sm mt-3'>
                        Already Have An Account?
                        <Link href={routes.auth.login} className='text-primary-300 hover:text-primary-500 transition-colors ml-2'>
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;