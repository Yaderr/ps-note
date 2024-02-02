
import { BaseQueryFn, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react'
import { useGetAllCardsQuery } from '../store/services/psNoteApi'
import { MapList } from './MapList'
import './css/cardsList.css'
import { Card } from '../interface'
import { CardItem } from './CardItem'
import { CardListLoader } from './loaders'
import { EmptyMessage } from './loaders/EmptyMessage'
import { CreditCardIcon } from '@heroicons/react/24/outline'

export const CardList = () => {

    const getAllCardsQuery: TypedUseQueryHookResult<Card[], void, BaseQueryFn> = useGetAllCardsQuery()

    return (
        <div className="card-list">
            <MapList
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