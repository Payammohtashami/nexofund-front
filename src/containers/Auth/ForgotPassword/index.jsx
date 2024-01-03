import React, { useState } from 'react';
import AuthLayout from '../Layout';
import ConfirmCode from './Components/ConfirmCode';
import SetPassword from './Components/SetPassword';
import ForgotPasswordComponent from './Components/ForgotPassword';

const ForgotPassword = () => {
    const [step, setStep] = useState('FORGOT_PASSWORD');
    const [turnBack, setTurnBack] = useState(false);
    return (
        <AuthLayout>
            {step === 'FORGOT_PASSWORD' ? 
                <ForgotPasswordComponent
                    setStep={setStep}
                    turnBack={turnBack}
                    setTurnBack={setTurnBack}
                /> 
            : null}
            {step === 'CONFIRM_CODE' ? 
                <ConfirmCode
                    setStep={setStep}
                    turnBack={turnBack}
                    setTurnBack={setTurnBack}
                /> 
            : null}
            {step === 'SET_PASSWORD' ? 
                <SetPassword
                    setStep={setStep}
                    turnBack={turnBack}
                    setTurnBack={setTurnBack}
                /> 
            : null}
        </AuthLayout>
    );
};

export default ForgotPassword;