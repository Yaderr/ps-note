import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Password } from "../../interface"

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export const psNoteApi = createApi({
    reducerPath: 'psNoteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_PS_NOTE_API_BASE_URL,

    }),
    endpoints: (builder) => ({
        getAllPasswords: builder.query<Password[], void>({
            query: () => ({
                url: 'passwords',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTM1OWI3LTk5ZmQtNDk0YS04ZjQwLTY4ZDkxNTc4MTI2MiIsImlhdCI6MTcwMzgwMTQwMywiZXhwIjoxNzAzODA1MDAzfQ.n1lAy9DbjbKMBUQqWfrW3qzYlMw3MF7jwHLhh1W5QVo`
                }
            }),
        })
    })
})




export const { useGetAllPasswordsQuery } = psNoteApi