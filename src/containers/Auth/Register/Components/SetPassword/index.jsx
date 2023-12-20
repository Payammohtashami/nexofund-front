import React from 'react';
import Icon from 'components/Icon';
import TextFieldComponent from 'components/TextField';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { confirmPasswordValidationSchema } from 'validations/auth';

const SetPassword = ({turnBack, setTurnBack, setStep}) => {

    const { 
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {password: '', confirm_password: ''}, 
        resolver: yupResolver(confirmPasswordValidationSchema),
    });

    const editEmailHandler = () => {
        setStep('REGISTER');
        setTurnBack(true);
    };

    const sendCode = () => {
        setTurnBack(false);
        setStep('CONFIRM_CODE')
    };
    return (
        <div>
            <button onClick={editEmailHandler} className='flex items-center mb-4 gap-3' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
            >
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Confirmation Code</p>
            </button>
            <div className='flex flex-col gap-6'>
                <div 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    data-aos-delay='150'
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
                    data-aos-delay='150'
                >
                    <Controller
                        name='confirm_password'
                        control={control}
                        render={({field}) => (
                            <TextFieldComponent
                                field={field}
                                type='password'
                                name='password'
                                label='Confirm Password'
                                placeholder='Repeat Your Password'
                                errors={errors?.password?.message}
                                Icon={<Icon name='passwod' size='24' />}
                            />
                            )
                        }
                    />
                </div>
                <div
                    data-aos-delay='250'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <button className='btn btn-blue w-full' onClick={sendCode}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;