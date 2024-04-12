import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Card, CardParam, LoginParams, PaginatedResponse, Password, PasswordParams, User } from "../../interface"
import { RootState } from "../store"

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export interface PaginatedParams {
    q?: string,
    orderBy?: string,
    page?: number,
    pageSize?: number
}

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
    tagTypes: ['Passwords', 'Card'],
    endpoints: (builder) => ({
        getAllPasswords: builder.query<Password[], void> ({
            query: () => ({
                url: 'passwords',
                method: 'GET'
            }),
            providesTags: [{ type: 'Passwords', id: 'LIST'}]
        }),
        searchPassword: builder.query<PaginatedResponse<Password[]>, PaginatedParams> ({
            query: (query) =>({
                url: 'passwords/search',
                method: 'GET',
                params: query
            }),
            providesTags: [{ type: 'Passwords', id: 'SERACH-LIST' }]
        }),
        createPassword: builder.mutation<void, PasswordParams> ({
            query: (body: PasswordParams) => ({
                url: 'passwords',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Passwords', id: 'LIST' }, { type: 'Passwords', id: 'SERACH-LIST' }],
        }),
        updatePassword: builder.mutation<void, { id: string, body: PasswordParams }> ({
            query: ({ id, body }) => ({
                url: `passwords/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: 'Passwords', id: 'LIST' }, { type: 'Passwords', id: 'SERACH-LIST' }]
        }),
        deletePassword: builder.mutation<void, string> ({
            query: (id: string) => ({
                url: `passwords/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Passwords', id: 'LIST' }]
        }),
        getAllCards: builder.query<Card[], void> ({
            query: () =>({
                url: 'cards',
                method: 'GET'
            }),
            providesTags: [{ type: 'Card', id: 'LIST' }]
        }),
        searchCards: builder.query<PaginatedResponse<Card[]>, PaginatedParams> ({
            query: (query) =>({
                url: 'cards/search',
                method: 'GET',
                params: query
            }),
            providesTags: [{ type: 'Card', id: 'SERACH-LIST' }]
        }),
        getFavoritesCards: builder.query<Card[], void> ({
            query: () => ({
                url: 'cards/favorites'
            }),
            providesTags: [{type: 'Card', id: 'FAV-LIST'}]
        }),
        createCard: builder.mutation<void, CardParam> ({
            query: (body: CardParam) => ({
                url: 'cards',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Card', id: 'LIST'}, { type: 'Card', id: 'SERACH-LIST' }]
        }),
        updateCard: builder.mutation<void, { id: string, body: Partial<CardParam> }> ({
            query: ({id, body}) => ({
                url: `cards/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags:  [
                { type: 'Card', id: 'LIST' },
                { type: 'Card', id: 'SERACH-LIST' },
                { type: 'Card', id: 'FAV-LIST'}
            ]
        }),
        deleteCard: builder.mutation<void, string> ({
            query: (id: string) => ({
                url: `cards/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Card', id: 'LIST' }, { type: 'Card', id: 'FAV-LIST' }],
        }),
        editUserInfo: builder.mutation<User, Partial<User>> ({
            query: (body: LoginParams) => ({
                url: 'auth/user',
                method: 'PATCH',
                body
            }),
            
        }),
        upload: builder.mutation<{filePatch: string}, File>({
            query: (body: File) => {
                const bodyForm = new FormData()
                bodyForm.append('file', body)
                return {
                    url: 'media/user/upload',
                    method: 'POST',
                    body: bodyForm ,
                    
                }
            }
        })
    }),
})




export const {
    useGetAllPasswordsQuery,
    useCreatePasswordMutation,
    useGetAllCardsQuery,
    useCreateCardMutation,
    useDeleteCardMutation ,
    useUpdateCardMutation,
    useUpdatePasswordMutation,
    useDeletePasswordMutation,
    useSearchCardsQuery,
    useSearchPasswordQuery,
    useGetFavoritesCardsQuery,
    useEditUserInfoMutation,
    useUploadMutation
} = psNoteApi