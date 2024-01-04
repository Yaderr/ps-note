import { TrashIcon } from '@heroicons/react/20/solid'
import { PasswordInput } from '../../componets/input/PasswordInput'
import '../css/create.css'
import { useState } from 'react'

const cardNetworks = {
    'visa': {
        startWith: 4,
        maxLength: 19,
        networkName: 'Visa'
    },
    'default': {
        startWith: 0,
        maxLength: 19,
        networkName: 'NONE'
    },
    'masterCard': {
        startWith: 5,
        maxLength: 19,
        networkName: 'MasterCard'
    },
    'amex': {
        startWith: 7,
        maxLength: 18,
        networkName: 'American Express'
    }
}

export const CreateCard = () => {

    const [formatCardNumber, setformatCardNumber] = useState('')
    const [ccNetwork, setCcNetwork] = useState('')

    const handleInputChange = (event: React.BaseSyntheticEvent) => {

        let network = null
        const value = event.target.value
        const cardDigits = value.split('')
        switch (cardDigits[0]) {
            case '4':
                network = cardNetworks['visa']
                setCcNetwork('visa')
                break
            case '5':
                network = cardNetworks['masterCard']
                setCcNetwork('masterCard')
                break
            case '7':
                network = cardNetworks['amex']
                setCcNetwork('amex')
                break
            default:
                network = cardNetworks['default']
                setCcNetwork('')
        }
        
        if((!Number.isNaN(Number(value.split('').pop())) || value.length === 0) && value.length <= network.maxLength) {
            setformatCardNumber(value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
        }
    }

    return (
        <div className="create-password">
            <div className='nav-header'>
                <button>
                    <TrashIcon width={30} height={30} />
                </button>
                { ccNetwork }
            </div>
            <div className="password-form">
                <form action="">
                    <input type="text" name="title" id="title" placeholder='Title' required />
                    {/* TODO: icon network type */}
                    <input value={ formatCardNumber } onChange={ handleInputChange } type="text" name="card-number" id="card-number" placeholder='Card Number' required />
                    <div className="two-inline-input">
                        <input type="number" min={1} max={999} name="cvv" id="cvv" placeholder='CVV' required />
                        <input type="month" name="expire-date" id="expire-date" placeholder='00/2029' required />
                    </div>
                    <input type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
}