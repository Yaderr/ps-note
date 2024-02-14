import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { LoginParams, LoginResponse, SignupParams, User } from "../../interface"

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
        })
    })
})

export const { useLoginMutation, useSignUpMutation } = authApi