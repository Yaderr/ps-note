import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { Card } from '../interface'
import './css/cardItem.css'

export const CardItem = ({ id, title, number, expire, sec_code, type, typeDetails }: Card) => {

    const numLength = number.toString().length
    const anonNumber = '**** '.repeat((numLength-4)/4)+number.toString().substring(numLength-4) 

    console.log(anonNumber)

    return (
        <div className='item-container'>
            <div className='card-item'>
                <a target="_blank" rel="noopener noreferrer" title={typeDetails.name}>
                    <div className='cards-icon-details'>
                        <div className='icon'>
                            <img src={ typeDetails.icon } alt="" />
                        </div>
                        <div className='details'>
                            <span>{ title }</span>
                            <p>{ anonNumber }</p>
                        </div>
                    </div>
                </a>
                <div className='password-icon-action'>
                    <button>
                        <EllipsisVerticalIcon width={25} height={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}