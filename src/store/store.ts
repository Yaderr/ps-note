import { configureStore } from "@reduxjs/toolkit";
import { psNoteApi } from "./services/psNoteApi";


export const store = configureStore({
    reducer: {
        [psNoteApi.reducerPath]: psNoteApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(psNoteApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type storeDispatch = typeof store.dispatch