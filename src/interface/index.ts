export * from './card'
export * from './user'
export * from './password'

export interface PaginatedResponse<TData> {
    total: number,
    page: number,
    results: TData
}