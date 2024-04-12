import { useEffect, useState } from "react"
import { Card, CardParam } from "../interface"
import { CardInput, Spinner, startWithNetwork } from "."
import { useCreateCardMutation, useUpdateCardMutation } from "../store/services/psNoteApi"
import { AlertError } from "./AlertError"
import { SuccessMessage } from "./SuccessMessage"
import { DefErrorData, ErrorData } from "./account/ProfileDataForm"

interface CardFormProps {
    card?: Card
}

export const CardForm = ({ card: initialValue}: CardFormProps) => {

    const [createCard, { isLoading, error, isSuccess }] = useCreateCardMutation()
    const [updateCard, { isLoading: isLoadingUpadate, error: errorUpdate, isSuccess: isSuccessUpdate}] = useUpdateCardMutation()

    const [formatCardNumber, setformatCardNumber] = useState('')
    const [card, setCard] = useState<CardParam>({
        id: initialValue?.id,
        title: initialValue?.title || '',
        number: initialValue?.number || '',
        expire: initialValue?.expire || '',
        sec_code: initialValue?.sec_code || '',
        type: initialValue?.type
    })

    const btnLegend = card.id ? 'Update': 'Save'

    useEffect(() => {
        setformatCardNumber(card.number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
    }, [card.number])

    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        const value = event.target.value
        if((!Number.isNaN(Number(value.split('').pop())) || value.length === 0) && value.length <= 19) {            
            setformatCardNumber(value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
        }
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCard({ ...card , [event.target.name]: event.target.value })
    }

    const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const cardNumber: string = String(formatCardNumber).replaceAll(' ', '')
        const payload = {...card, number: cardNumber, type: startWithNetwork[cardNumber.charAt(0)]}
        createCard(payload)
    }

    const submitUpdateForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        const cardNumber: string = String(formatCardNumber).replaceAll(' ', '')
        const payload = {...card, number: cardNumber, type: startWithNetwork[cardNumber.charAt(0)] || ''}
        console.log(payload);
        delete payload.id
        if (!initialValue) return
        await updateCard({id: initialValue.id, body: payload})
    }

    if(isSuccess || isSuccessUpdate) {
        return  <SuccessMessage type="cards" message={`Your card was ${btnLegend}d`} />
    }

    return (
        <div className="card-form-container">
            <div className="card-form">
                <form onSubmit={ card.id ? submitUpdateForm : submitForm }>
                    { error && <AlertError
                        errorMessage={ (error as DefErrorData)?.error ? (error as DefErrorData)?.error: (error as ErrorData).data.message ? (error as ErrorData)?.data?.message: 'ERROR' } 
                    />}
                    { errorUpdate && <AlertError
                        errorMessage={ (errorUpdate as DefErrorData)?.error ? (errorUpdate as DefErrorData)?.error: (errorUpdate as ErrorData).data.message ? (errorUpdate as ErrorData)?.data?.message: 'ERROR' }
                    />}
                    <input value={ card.title } onChange={ inputChange } type="text" name="title" id="title" placeholder='Title' required />
                    <CardInput value={ formatCardNumber } onChange={ handleInputChange } />
                    <div className="two-inline-input">
                        <input value={ card.sec_code } onChange={ inputChange } type="number" min={0} max={9999} name="sec_code" id="cvv" placeholder='cvv' required />
                        <input value={ card.expire } onChange={ inputChange } type="date" name="expire" id="expire-date" placeholder='00/2029' required />
                    </div>
                    <button disabled={ isLoading || isLoadingUpadate} type="submit">
                        { 
                            isLoading || isLoadingUpadate ? <Spinner />
                            : btnLegend
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}