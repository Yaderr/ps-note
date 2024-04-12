import { useState } from "react"
import { useCreatePasswordMutation, useUpdatePasswordMutation } from "../store/services/psNoteApi"
import { Password, PasswordParams } from "../interface"
import { PasswordInput } from "./input/PasswordInput"
import { Spinner } from "."
import { AlertError } from "./AlertError"
import { SuccessMessage } from "./SuccessMessage"
import { DefErrorData, ErrorData } from "./account/ProfileDataForm"

interface PasswordFormParams {
    password?: Password
}

const ACTION_TEXT = {
    'UPDATE': {
        legend: 'Update',
        succesMessage: 'Your password was updated'
    },
    'SAVE': {
        legend: 'Save',
        succesMessage: 'Your password was created'
    }
}

export const PasswordForm = ({ password: initialValue }: PasswordFormParams) => {

    const [createPasword, { isLoading, error, isSuccess }] = useCreatePasswordMutation()
    const [updatePassword, { isLoading: isLoadingUpdate, error: errorUpdate, isSuccess: isSuccessUpdate}] = useUpdatePasswordMutation()
    const [password, setPassword] = useState<PasswordParams>({
        id: initialValue?.id,
        title: initialValue?.title || '',
        websiteUrl: initialValue?.websiteUrl || '',
        userNameEmail: initialValue?.userNameEmail || '',
        password: initialValue?.password || ''
    })
    const action = initialValue?.id ? 'UPDATE': 'SAVE'

    const submitForm = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        await createPasword(password)
    }

    const submitUpdateForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!initialValue?.id) return
        delete password.id
        await updatePassword({ id: initialValue.id, body: password })
    } 

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({ ...password , [event.target.name]: event.target.value })
    }

    if(isSuccess || isSuccessUpdate) {
        return <SuccessMessage type="passwords" message={ACTION_TEXT[action].succesMessage} />
    }

    return (
        <div className="password-form-container">
            <div className="password-form">
                <form onSubmit={ password.id? submitUpdateForm: submitForm }>
                    { error && <AlertError
                        errorMessage={ (error as DefErrorData)?.error ? (error as DefErrorData)?.error: (error as ErrorData).data.message ? (error as ErrorData)?.data?.message: 'ERROr' } 
                    />}
                    { error && <AlertError
                        errorMessage={ (errorUpdate as DefErrorData)?.error ? (errorUpdate as DefErrorData)?.error: (errorUpdate as ErrorData).data.message ? (errorUpdate as ErrorData)?.data?.message: 'ERROr' } 
                    />}
                    <input value={password.title} onChange={inputChange} type="text" name="title" id="title" placeholder='Title' />
                    <input value={password.websiteUrl} onChange={inputChange} type="text" name="websiteUrl" id="websiteUrl" placeholder='Website URL' />
                    <input value={password.userNameEmail} onChange={inputChange} type="text" name="userNameEmail" id="userNameEmail" placeholder='Username or Email' />
                    <PasswordInput value={password.password} onChange={inputChange} />
                    <button disabled={ isLoading || isLoadingUpdate } type="submit">
                        { 
                            isLoading || isLoadingUpdate ? <Spinner />
                            : ACTION_TEXT[action].legend
                        }
                    </button>
                    
                </form>
            </div>
        </div>
    )
}