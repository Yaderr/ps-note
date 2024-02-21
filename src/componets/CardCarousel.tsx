import { CreditCard } from "."
import { CC_TYPE } from "../interface"
import './css/carousel.css'

export const CardCarousel = () => {
    return (
        <div className="card-carousel">
            <CreditCard number={Number('01234567896325878')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.VISA} />
            <CreditCard number={Number('2123456789632587')} expire={new Date("11/01/2025")} sec_code={654} type={CC_TYPE.MASTER} />
            <CreditCard number={Number('2123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.MASTER} />
        </div>
    )
}