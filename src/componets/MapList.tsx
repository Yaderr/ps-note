import { BaseQueryFn, TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react"
import { NetworkError } from "./NetworkError"
import { ReactNode } from "react"

interface MapListProps<T> {
    queryResult: TypedUseQueryHookResult<T[], void, BaseQueryFn>
    ElementItemComponent: JSX.ElementType,
    Loader: JSX.ElementType,
    Empty: ReactNode
}

export const MapList = <T extends { id: string }>({ 
    queryResult, ElementItemComponent, Loader, Empty
}: MapListProps<T>) => {

    const { data, error, isLoading, refetch } = queryResult    
    
    return (
        <>
            {
                isLoading ? (<Loader />)
                :error ? (<NetworkError error={error} reload={refetch} />)
                :data && data.length ? (
                    <>
                        {
                            data.map((item: T) => (
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