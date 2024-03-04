import { useGetFavoritesCardsQuery } from "../store/services/psNoteApi"
import { CreditCard } from "."
import { NetworkError } from "./NetworkError"
import './css/carousel.css'
import { CardCarouselLoader } from "./loaders"

export const CardCarousel = () => {

    const { data, error, isLoading, refetch } = useGetFavoritesCardsQuery()

    return (
        isLoading ? (
            <CardCarouselLoader />
        )
        :error ? (<NetworkError error={error} reload={refetch} />)
        :data && data.length ? (
            <div className="card-carousel">
                {
                    data.map(card => (
                        <CreditCard key={card.id} number={card.number} expire={card.expire} sec_code={card.sec_code} type={card.type} />
                    ))
                }
            </div>
        )
        : (
           <></>                                            
        )
    )
}