import { BaseQueryFn, TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react"
import { NetworkError } from "./NetworkError"
import { ReactNode } from "react"
import { PaginatedParams } from '../store/services/psNoteApi';
import { PaginatedResponse } from "../interface";

interface PaginatedMapListProps<T> {
    queryResult: TypedUseQueryHookResult<PaginatedResponse<T[]>, PaginatedParams, BaseQueryFn>
    ElementItemComponent: JSX.ElementType,
    Loader: JSX.ElementType,
    Empty: ReactNode
}

export const PaginatedMapList= <T extends { id: string }>({
    queryResult,
    ElementItemComponent,
    Loader,
    Empty
}: PaginatedMapListProps<T>) => {

    const { data, error, isLoading, refetch } = queryResult
    
    return (
        <>
            {
                isLoading ? (<Loader />)
                :error ? (<NetworkError error={error} reload={refetch} />)
                :data && data.results.length ? (
                    <>
                        {
                            data.results.map((item: T) => (
                                <ElementItemComponent
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </>
                )
                : (
                    <>
                        {Empty}
                    </>
                )
            }
        </>
    )
}