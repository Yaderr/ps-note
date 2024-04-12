import { useSearchParams } from "react-router-dom"
import { PasswordInput } from "../input/PasswordInput"
import { useState } from "react"
import { useChangePasswordMutation } from "../../store/services/authApi"
import { Spinner } from "./LoginForm"
import { AlertError } from "../AlertError"
import { SuccessMessage } from "../SuccessMessage"

export const ResetPasswordForm = () => {

    const [changePassword, { data, isLoading, error, isSuccess }] = useChangePasswordMutation()
    const [queryParams] = useSearchParams()
    const [token] = useState(queryParams.get('token') ?? '')
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: ''
    })


    const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        await changePassword({
            token,
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword
        })

        console.log(error)
    }
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({  ...formData, [event.target.name]: event.target.value })
    }

    if(isSuccess) {
        return <SuccessMessage message={data.message} type="./auth/login" />
    }

    return (
        <div className="form-container">
            <h2>Change password</h2>
            <AlertError errorMessage={ error ? ( 'data' in error && error.data['message'])?error.data['message']: error?.error : null } />
            <form onSubmit={submitForm}>
                <PasswordInput value={ formData.oldPassword } onChange={inputChange} name='oldPassword' placeholder="Old password or Recovery hash" />
                <PasswordInput value={ formData.newPassword } onChange={inputChange} name='newPassword' placeholder="New password" />
                <PasswordInput value={ formData.repeatNewPassword } onChange={inputChange} name='repeatNewPassword' placeholder="Repeat new password" />
                <button type="submit">
                    {
                        isLoading ? <Spinner />:'Change password'
                    }
                </button>
            </form>
        </div>
    )
}