import React, { useState } from 'react';
// layout
import AuthLayout from '../Layout';

// components
import LoginForms from './components/LoginForms';
import ConfirmCode from './components/ConfirmCode';

const Login = () => {
    const [step, setStep] = useState('LOGIN');
    const [turnBack, setTurnBack] = useState(false);
    return (
        <AuthLayout>
            {step === 'LOGIN' ? 
                <LoginForms 
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
        </AuthLayout>
    );
};

export default Login;