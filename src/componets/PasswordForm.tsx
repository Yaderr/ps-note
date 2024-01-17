import { useState } from "react"
import { useCreatePasswordMutation } from "../store/services/psNoteApi"
import { Password, PasswordParams } from "../interface"
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { PasswordInput } from "./input/PasswordInput"
import { Spinner } from "."
import { AlertError } from "./AlertError"

interface PasswordFormParams {
    password?: Password
}


export const PasswordForm = ({ password: initialValue }: PasswordFormParams) => {

    const [createPasword, { isLoading, error, isSuccess }] = useCreatePasswordMutation()
    const [password, setPassword] = useState<PasswordParams>({
        title: initialValue?.title || '',
        websiteUrl: initialValue?.websiteUrl || '',
        userNameEmail: initialValue?.userNameEmail || '',
        password: initialValue?.password || ''
    })

    const submitForm = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()        
        await createPasword(password)
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({ ...password , [event.target.name]: event.target.value })
    }

    if(isSuccess) {
        return <SuccessMessage message='Your password was created' />
    }

    return (
        <div className="password-form-container">
            <div className="password-form">
                <form onSubmit={ submitForm }>
                    <AlertError errorMessage={ error ? ( 'data' in error && error.data['message'])?error.data['message']: error?.error : null } />
                    <input value={password.title} onChange={inputChange} type="text" name="title" id="title" placeholder='Title' />
                    <input value={password.websiteUrl} onChange={inputChange} type="text" name="websiteUrl" id="websiteUrl" placeholder='Website URL' />
                    <input value={password.userNameEmail} onChange={inputChange} type="text" name="userNameEmail" id="userNameEmail" placeholder='Username or Email' />
                    <PasswordInput value={password.password} onChange={inputChange} />
                    <button disabled={ isLoading } type="submit">
                        { 
                            isLoading ? <Spinner />
                            :'Save'
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

const SuccessMessage = ({ message }) => {
    
    return (
        
        <div className="password-success">
            <div className="password-success-message-container">
                <div className="password-success-message">
                    <div className="success-icon">
                        <CheckIcon width={30} height={30} />
                    </div>
                    <h2>{message}</h2>
                </div>
                
            </div>
            <a  href="/passwords">Go back</a>
        </div>
    )
}