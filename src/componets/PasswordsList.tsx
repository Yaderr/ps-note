import { BaseQueryFn, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import { useGetAllPasswordsQuery } from "../store/services/psNoteApi"
import { Password } from "../interface";
import { PasswordItem } from './PasswordItem';
import { MapList } from "./MapList"
import { PasswordListLoader } from "./loaders"
import './css/passwordList.css'
import { EmptyMessage } from './loaders/EmptyMessage';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export const PasswordsList = () => {

    const getAllPasswordsQuery: TypedUseQueryHookResult<
        Password[], void, BaseQueryFn
    > = useGetAllPasswordsQuery()
    
    return (
        <div className="password-list">
            <MapList<Password>
                queryResult={getAllPasswordsQuery}
                ElementItemComponent={PasswordItem}
                Loader={PasswordListLoader}
                Empty={ 
                    <EmptyMessage 
                        Icon={LockClosedIcon}
                        type='password' 
                    />
                }
            />
        </div>
    )
}