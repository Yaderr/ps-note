import { createSlice } from "@reduxjs/toolkit/react";
import { User } from "../../interface";
import { LoginResponse } from '../../interface/user';
import type { PayloadAction } from "@reduxjs/toolkit/react"

export type AuthState = {
    user: User | null,
    token: string | null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (state, { payload: { user, access_token } }: PayloadAction<LoginResponse>) => {
            state.user = user
            state.token = access_token
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions