import React from 'react';
import Link from 'next/link';
import routes from 'config/routes';

// forms & hooks
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { loginValidationSchema } from 'validations/auth';

// components
import Icon from 'components/Icon';
import CustomButton from 'components/CustomButton';
import TextFieldComponent from 'components/TextField';
import { updateUserData } from 'feature/user/asyncActions';

const LoginForms = ({ setStep, turnBack}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { 
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {email: "", password: ''}, 
        resolver: yupResolver(loginValidationSchema),
    });
    
    const loginHandler = (data) => {
        // router.push(routes.wallet.base);
        dispatch(updateUserData({
            email: data?.email,
        }));
    };
    return (
        <form noValidate onSubmit={handleSubmit(loginHandler)}>
            <Link href={routes.base} className='flex items-center mb-4 gap-3' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
            >
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Login</p>
            </Link>
            <div className='flex flex-col gap-6'>

                <div 
                    data-aos-delay='150'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
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
                                Icon={
                                    <Icon name='email' size='24' />
                                }
                            />
                            )
                        }
                    />
                </div>

                <div 
                    data-aos-delay='300'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <Controller
                        name='password'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='password'
                                name='password'
                                label='Your Password'
                                placeholder='Enter Your Password'
                                errors={errors?.password?.message}
                                Icon={<Icon name='passwod' size='24' />}
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
                        Login With Google
                    </button>
                </div>
                <button 
                    data-aos-delay='100'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    onClick={() => setStep('FORGOT_PASSWORD')}
                    className='text-primary-300 hover:text-primary-500 transition-colors w-fit'
                >
                    Forgot Your Password?
                </button>

                <div 
                    data-aos-delay='300'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <CustomButton 
                        type='submit'
                        loading={false}
                        className="btn btn-blue w-full disabled:bg-primary-400/50"
                        // disabled={!isValid || isSubmitting}
                    >
                        Login
                    </CustomButton>
                    <p className='text-darkness-100 text-sm mt-3'>
                        Don’t Have An Account?
                        <Link href={routes.auth.register} className='text-primary-300 hover:text-primary-500 transition-colors ml-2'>
                            Sign Up
                        </Link>
                    </p>
                </div>

            </div>
        </form>
    );
};

export default LoginForms;