import React, { useState } from "react"
import { useResetPaswordMutation } from "../../store/services/authApi"
import { Spinner } from "./LoginForm"
import { SuccessMessage } from "../SuccessMessage"


export const ForgotPasswordForm = () => {
    
    const [email, setEmail] = useState('')
    const [resetPassowrd, { isLoading, isSuccess, data }] = useResetPaswordMutation()

    const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        resetPassowrd({ email })
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    if(isSuccess) {
        return <SuccessMessage message={data.message} type={"./auth/forgot-password"} />
    }

    return (
        <div className="form-container">
            <h2>Reset password</h2>
            <form onSubmit={ submitForm }>
                <input onChange={ onEmailChange } value={email} type="email" name="email" id="email" placeholder="Email" required />
                <button type="submit">
                    {
                        isLoading ? <Spinner />:'Reset password'
                    }
                </button>    
            </form>
        </div>
    )
}