import { BaseQueryFn, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react'
import { PaginatedParams, useSearchCardsQuery } from '../store/services/psNoteApi'
import './css/cardsList.css'
import { Card, PaginatedResponse } from '../interface'
import { CardItem } from './CardItem'
import { CardListLoader } from './loaders'
import { EmptyMessage } from './loaders/EmptyMessage'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import { PaginatedMapList } from './PaginatedMapList'

export const PaginatedCardList = () => {

    const getAllCardsQuery: TypedUseQueryHookResult<PaginatedResponse<Card[]>, PaginatedParams, BaseQueryFn> = useSearchCardsQuery({
        page: 1,
        pageSize: 1000000
    })

    return (
        <div className="card-list">
            <PaginatedMapList<Card>
                queryResult={ getAllCardsQuery }
                ElementItemComponent={ CardItem }
                Loader={ CardListLoader }
                Empty={ 
                    <EmptyMessage 
                        Icon={ CreditCardIcon }
                        type="card"
                    /> 
                }                
            />
        </div>
    )
}