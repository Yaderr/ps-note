import { createSlice } from "@reduxjs/toolkit/react";
import { User } from "../../interface";
import { LoginResponse } from '../../interface/user';
import type { PayloadAction } from "@reduxjs/toolkit/react"
import { psNoteApi } from "../services/psNoteApi";

export type AuthState = {
    user: User | undefined,
    token: string |undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: undefined, token: undefined } as AuthState,
    reducers: {
        setCredentials: (state, { payload: { user, access_token } }: PayloadAction<LoginResponse>) => {
            state.user = user
            state.token = access_token
        },
        updatePicture: (state, { payload: {filePatch} }: PayloadAction<{ filePatch: string }>) => {
            if(state.user) state.user.profilePic = filePatch
        },
        updateUserInfo: (state, { payload: { fullName, email, profilePic } }: PayloadAction<User>) => {
            if(state.user != undefined) {
                state.user.fullName = fullName
                state.user.email = email
                state.user.profilePic = profilePic
            }
        },
        logOut: (state) => {
            state.user = undefined
            state.token = undefined
            psNoteApi.util.resetApiState()
        }
    }
})

export const { setCredentials, logOut, updateUserInfo, updatePicture } = authSlice.actions