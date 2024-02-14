import { useState } from "react"
import { useCreatePasswordMutation, useUpdatePasswordMutation } from "../store/services/psNoteApi"
import { Password, PasswordParams } from "../interface"
import { PasswordInput } from "./input/PasswordInput"
import { Spinner } from "."
import { AlertError } from "./AlertError"
import { SuccessMessage } from "./SuccessMessage"

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
                    <AlertError errorMessage={ error ? ( 'data' in error && error.data['message'])?error.data['message']: error?.error : null } />
                    <AlertError errorMessage={ errorUpdate ? ( 'data' in errorUpdate && errorUpdate.data['message'])?errorUpdate.data['message']: errorUpdate?.error : null } />
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