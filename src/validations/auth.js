import * as Yup from 'yup';


export const emailValidationSchema = Yup.object({
    email: Yup.string().email('Email not valid!').required('Email is required'),
});