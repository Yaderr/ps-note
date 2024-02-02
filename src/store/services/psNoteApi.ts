import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Card, CardParam, Password, PasswordParams } from "../../interface"
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
        },
        
    }),
    endpoints: (builder) => ({
        getAllPasswords: builder.query<Password[], void> ({
            query: () => ({
                url: 'passwords',
                method: 'GET'
            }),
            providesTags: () => [{ type: 'Passwords' as never, id: 'LIST'}]
        }),
        createPassword: builder.mutation<void, PasswordParams> ({
            query: (body: PasswordParams) => ({
                url: 'passwords',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Passwords' as never, id: 'LIST' }],
        }),
        getAllCards: builder.query<Card[], void> ({
            query: () =>({
                url: 'cards',
                method: 'GET'
            }),
            providesTags: () => [{ type: 'Card' as never, id: 'LIST' }]
        }),
        createCard: builder.mutation<void, CardParam> ({
            query: (body: CardParam) => ({
                url: 'cards',
                method: 'POST',
                body
            }),
            invalidatesTags: () => [{ type: 'Card' as never, id: 'LIST'}]
        }),
        update: builder.mutation<void, { id: string, body: CardParam }> ({
            query: ({id, body}) => ({
                url: `cards/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: () => [{ type: 'Card' as never, id: 'LIST'}]
        }),
        deleteCard: builder.mutation<void, string> ({
            query: (id: string) => ({
                url: `cards/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Card' as never, id: 'LIST' }],
        })
    }),
})




export const {
    useGetAllPasswordsQuery,
    useCreatePasswordMutation,
    useGetAllCardsQuery,
    useCreateCardMutation,
    useDeleteCardMutation ,
    useUpdateMutation
} = psNoteApi