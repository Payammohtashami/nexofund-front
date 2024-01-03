import React from 'react';

// forms
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { otpCodeValidationSchema } from 'validations/auth';

// components
import Icon from 'components/Icon';
import CustomButton from 'components/CustomButton';
import { OtpInputCustom } from 'components/ConfirmCode';

const ConfirmCode = ({turnBack, setTurnBack, setStep}) => {
    const editEmailHandler = () => {
        setTurnBack(true);
        setStep('FORGOT_PASSWORD');
    };

    const { control, handleSubmit } = useForm({
        mode: "onSubmit",
        defaultValues: {code: ""}, 
        resolver: yupResolver(otpCodeValidationSchema),
    });

    const confirmCodeHandler = () => {
        setStep('SET_PASSWORD');
    };
    return (
        <>
            <button
                onClick={editEmailHandler}
                className='flex items-center mb-4 gap-3' 
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='400'
            >
                <Icon name='Back' size='20' />
                <p className='text-xl text-darkness-100 font-semibold'>Confirmation Code</p>
            </button>
            <div>
                <p
                    className='text-sm lg:text-base text-darkness-200'
                    data-aos-delay='200' 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    >
                    we sent the confirmation code to your email , wrong email?
                </p>
                <button 
                    data-aos-delay='150' 
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                    className='text-sm lg:text-base text-primary-300 mb-6 hover:text-primary-500 transition-colors'
                    onClick={editEmailHandler}
                >
                    Edit email
                </button>
            </div>
            <form
                noValidate
                onSubmit={handleSubmit(confirmCodeHandler)}
                data-aos={turnBack ? "fade-left" : "fade-right"}
                data-aos-delay='150'
            >
                <div className="[&>div]:flex mb-8 [&>div]:gap-1 [&>div]:lg:gap-2 [&>div>input]:h-14 [&>div>input]:flex-1 [&>div>input]:rounded-2xl [&>div>input]:bg-darkness-500 [&>div>input]:text-white [&>div>input]:border-darkness-400 [&>div>input]:border">
                    <Controller
                        name='code'
                        control={control}
                        render={({field: { onChange, value }}) => (
                            <OtpInputCustom
                                value={value}
                                onChange={onChange}
                                numInputs={5}
                                renderSeparator={<span></span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        )}
                    />  
                </div>
                <div
                    data-aos-delay='300'
                    data-aos={turnBack ? "fade-left" : "fade-right"}
                >
                    <CustomButton type='submit' className='btn btn-blue w-full'>
                        Confirm
                    </CustomButton>
                </div>
            </form>
        </>
    );
};

export default ConfirmCode;