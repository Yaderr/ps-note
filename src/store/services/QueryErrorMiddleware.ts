import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { logOut } from '../slice/authSlice'

export const rtkQueryErrorLogger: Middleware =
  ({ dispatch }: MiddlewareAPI) => (next) => (action) => {

    const typedAction: PayloadAction<FetchBaseQueryError, string> = (action as PayloadAction<FetchBaseQueryError>)

    if (isRejectedWithValue(action) && action.type.split('/')[0] === 'psNoteApi') {
      if(typedAction.payload?.status === 401) {
        dispatch(logOut())
      }
    }    

    return next(action)
  }