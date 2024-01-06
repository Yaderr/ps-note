import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Password } from "../../interface"
import { RootState } from "../store"

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export const psNoteApi = createApi({
    reducerPath: 'psNoteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_PS_NOTE_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if(token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllPasswords: builder.query<Password[], void> ({
            query: () => ({
                url: 'passwords',
                method: 'GET'
            }),
        }),
        
    })
})




export const { useGetAllPasswordsQuery } = psNoteApi