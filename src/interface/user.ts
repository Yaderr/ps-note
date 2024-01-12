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