import { CC_TYPE, Card } from '../interface'
import { CardItem } from './CardItem'
import './css/cardsList.css'


const cards: Card[] = [
    {
        title: 'Ban polombia',
        id: '1234-1234',
        number: 7234567891209456,
        expire: new Date("01/11/2025"),
        sec_code: 123,
        type: CC_TYPE.VISA,
        typeDetails: {
            name: 'Visa',
            icon: 'https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png'
        }
    },
    {
        title: 'Ban polombia',
        id: '1234-12345',
        number: 72345678912094544,
        expire: new Date("01/06/2028"),
        sec_code: 123,
        type: CC_TYPE.MASTER,
        typeDetails: {
            name: 'Mastercard',
            icon: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_dla_symbol_92.png'
        }
    },
    {
        title: 'Amex Card',
        id: '1234-12346',
        number: 72345678912094544,
        expire: new Date("01/06/2028"),
        sec_code: 123,
        type: CC_TYPE.MASTER,
        typeDetails: {
            name: 'Mastercard',
            icon: 'https://w7.pngwing.com/pngs/382/146/png-transparent-american-express-logo-icons-logos-emojis-iconic-brands.png'
        }
    }
] 

export const CardList = () => {

    return (
        <div className="card-list">
            {
                cards.map(card => (
                    <CardItem
                        id={card.id}
                        key={card.id}
                        title={card.title}
                        number={card.number}
                        expire={card.expire}
                        sec_code={card.sec_code}
                        type={card.type}
                        typeDetails={card.typeDetails}
                    />
                ))
            }
        </div>
    )
}