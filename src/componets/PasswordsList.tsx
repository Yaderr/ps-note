import { TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import { Password } from "../interface";
import { useGetAllPasswordsQuery } from "../store/services/psNoteApi"
import { MapList } from "./MapList"
import { PasswordItem } from './PasswordItem';
import './css/passwordList.css'
import { PasswordListLoader } from "./loaders"

export const PasswordsList = () => {

    const getAllPasswordsQuery: TypedUseQueryHookResult<Password[], void, any> = useGetAllPasswordsQuery()
    
    return (
        <div className="password-list">
            <MapList<Password>
                ComponentElementItem={PasswordItem}
                Loader={PasswordListLoader}
                queryResult={getAllPasswordsQuery}
            />
        </div>
    )
}