import { BaseQueryFn, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import { PaginatedParams, useSearchPasswordQuery } from "../store/services/psNoteApi"
import { Password } from "../interface";
import { PasswordItem } from './PasswordItem';
import { PasswordListLoader } from "./loaders"
import { EmptyMessage } from './loaders/EmptyMessage';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { PaginatedMapList } from './PaginatedMapList';
import { PaginatedResponse } from '../interface/index';
import './css/passwordList.css'

export const PaginatedPasswordList = () => {

    const getAllPasswordsQuery: TypedUseQueryHookResult<
        PaginatedResponse<Password[]>, PaginatedParams, BaseQueryFn
    > = useSearchPasswordQuery({
        page: 1,
        pageSize: 1000000
    })
    
    return (
        <div className="password-list">
            <PaginatedMapList<Password>
                queryResult={getAllPasswordsQuery}
                ElementItemComponent={ PasswordItem }
                Loader={ PasswordListLoader }
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