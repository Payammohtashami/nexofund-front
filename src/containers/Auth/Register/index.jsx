import React, { useState } from 'react';

// lauout
import AuthLayout from '../Layout';

// components
import ConfirmCode from './Components/ConfirmCode';
import SetPassword from './Components/SetPassword';
import RegisterForm from './Components/RegisterForm';

const Register = () => {
    const [step, setStep] = useState('REGISTER');
    const [turnBack, setTurnBack] = useState(false);
    return (
        <AuthLayout>
            {step === 'REGISTER' ? 
                <RegisterForm
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

export default Register;