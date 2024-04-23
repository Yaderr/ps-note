import { useEffect, useState } from 'react'
import './input.css'
import { CC_TYPE } from '../../interface'
import { CreditCardIcon } from '@heroicons/react/24/outline'

interface CardInputProps {
    onChange: (event: React.BaseSyntheticEvent) => void,
    value: string
}

export const startWithNetwork: {[key: string]: CC_TYPE} = {
    '5': CC_TYPE.MASTER,
    '4': CC_TYPE.VISA,
    '3': CC_TYPE.AMEX,
    '6': CC_TYPE.DISCO
} 

export const CardInput = ({ onChange, value }: CardInputProps) => {

    const [network, setNetwork] = useState('')

    useEffect(() => {
        if(value.length > 0) {
            setNetwork(startWithNetwork[value.charAt(0)])
        } else {
            setNetwork('')
        }
    }, [value])

    return (
        <div className="card-input">
            <input placeholder='Card number' type="text" value={ value } onChange={onChange} />
            <div className='card-network-flag'>
                {
                    !network ? (
                        <CreditCardIcon width={38} />
                    )   
                    : <img src={`/icons/${network}_icon.svg`} alt="" />
                }
            </div>
        </div>
    )
}