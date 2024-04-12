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

export interface EditUserInfo {
    fullName?: string,
    email?: string,
    profilePic?: string
}

export interface AuthResponse {
    ok: boolean,
    message: string
}

export interface ChangePasswordParams {
    token: string,
    oldPassword: string,
    newPassword: string,
    repeatNewPassword?: string
}