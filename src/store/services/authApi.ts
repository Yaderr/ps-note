import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AuthResponse, ChangePasswordParams, LoginParams, LoginResponse, SignupParams, User } from "../../interface"

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_PS_NOTE_API_BASE_URL
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginParams>({
            query: (body: LoginParams) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        }),
        signUp: builder.mutation<User, SignupParams>({
            query: (body: SignupParams) => ({
                url: 'auth/register',
                method: 'POST',
                body
            })
        }),
        resetPasword: builder.mutation<any, { email: string}>({
            query: (body: { email: string}) => ({
               url: 'auth/reset' ,
               method: 'PATCH',
               body 
            })
        }),
        changePassword: builder.mutation<AuthResponse, ChangePasswordParams>({
            query: (body: { token: string, oldPassword: string, newPassword: string }) => ({
               url: 'auth/change-password' ,
               method: 'POST',
               body
            })
        })
    })
})

export const { 
    useLoginMutation,
    useSignUpMutation,
    useResetPaswordMutation,
    useChangePasswordMutation 
} = authApi