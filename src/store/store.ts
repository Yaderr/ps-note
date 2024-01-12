import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { psNoteApi } from "./services/psNoteApi";
import { authApi } from "./services/authApi";
import { authSlice } from "./slice/authSlice";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rtkQueryErrorLogger } from "./services/QueryErrorMiddleware";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth']
}

const rootReducers = combineReducers({
    [psNoteApi.reducerPath]: psNoteApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(psNoteApi.middleware, rtkQueryErrorLogger, authApi.middleware)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type storeDispatch = typeof store.dispatch