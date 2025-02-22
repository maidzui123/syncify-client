import { InferType } from 'yup';
export declare const signInSchema: import("yup").ObjectSchema<{
    email: string;
    password: string;
}, import("yup").AnyObject, {
    email: undefined;
    password: undefined;
}, "">;
export declare const signUpSchema: import("yup").ObjectSchema<{
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
}, import("yup").AnyObject, {
    email: undefined;
    password: undefined;
    username: undefined;
    confirmPassword: undefined;
}, "">;
export declare const forgetPasswordSchema: import("yup").ObjectSchema<{
    email: string;
}, import("yup").AnyObject, {
    email: undefined;
}, "">;
export declare const resetPasswordSchema: import("yup").ObjectSchema<{
    password: string;
    confirmPassword: string;
}, import("yup").AnyObject, {
    password: undefined;
    confirmPassword: undefined;
}, "">;
export declare const userInfoSchema: import("yup").ObjectSchema<{
    displayName: string;
    tag: string | undefined;
    date: string;
    month: string;
    year: string;
    gender: string;
    country: string;
    tel: string;
}, import("yup").AnyObject, {
    displayName: undefined;
    tag: undefined;
    date: undefined;
    month: undefined;
    year: undefined;
    gender: undefined;
    country: undefined;
    tel: undefined;
}, "">;
export declare const changePasswordSchema: import("yup").ObjectSchema<{
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}, import("yup").AnyObject, {
    currentPassword: undefined;
    newPassword: undefined;
    confirmPassword: undefined;
}, "">;
export type signInDef = InferType<typeof signInSchema>;
export type signUpDef = InferType<typeof signUpSchema>;
export type userInfoDef = InferType<typeof userInfoSchema>;
export type changePasswordDef = InferType<typeof changePasswordSchema>;
