import { NetworkError } from "./NetworkError"

interface MapListProps<T> {
    ComponentElementItem: JSX.ElementType,
    Loader: JSX.ElementType
    query: any
}

export const MapList = <T extends { id: string }>({ ComponentElementItem, Loader, query }: MapListProps<T>) => {

    const { error, isLoading, refetch, data } = query
    
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
                                    type={null}
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