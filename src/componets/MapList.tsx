import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react"
import { NetworkError } from "./NetworkError"

interface MapListProps<T> {
    ComponentElementItem: JSX.ElementType,
    Loader: JSX.ElementType
    queryResult: TypedUseQueryHookResult<T[], void, any>
}

export const MapList = <T extends { id: string }>({ ComponentElementItem, Loader, queryResult }: MapListProps<T>) => {

    const { data, error, isLoading, refetch } = queryResult
    
    return (
        <>
            {
                isLoading ? (<Loader />)
                :error ? (<NetworkError error={error} reload={refetch} />)
                :data ? (
                    <>
                        {
                            data.map((item: T) => (
                                <ComponentElementItem
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </>
                )
                :(
                    <span>
                        Empty
                    </span>
                )
            }
        </>
    )
}