import { Password } from './password';
export interface User {
    id: string,
    fullName: string,
    email: string,
    profilePic: string,
    lastLogin: Date
}

export interface LoginParams {
    email: string,
    password: string
}

export interface LoginResponse {
    user: User,
    access_token: string
}

export interface SignupParams {
    fullName: string,
    email: string,
    password: string,
    repeat_password?: string
}