import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  passowrd: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[^\w\s]/, 'Password must contain at least one symbol')
    .required('Password is required'),
});

export type LoginFormData = Yup.InferType<typeof LoginSchema>;
