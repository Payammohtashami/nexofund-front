import * as Yup from 'yup';


export const emailValidationSchema = Yup.object({
    email: Yup.string().email('Email not valid!').required('Email is required'),
});

export const otpCodeValidationSchema = Yup.object({
    code: Yup.string().length(5, 'otp code not valid!').required('otp code is required'),
});

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Email not valid!').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const confirmPasswordValidationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    confirm_password: Yup.string().required('confirm Password is required'),
});