import { useState } from "react"
import { LoginProviders } from "../LoginProviders"
import { PasswordInput } from "../input/PasswordInput"
import './form.css'
import { SignupParams } from "../../interface"
import { useSignUpMutation } from "../../store/services/authApi"
import { AlertError } from "../AlertError"
import { Spinner } from ".."
import { SuccessMessage } from "../SuccessMessage"
import { DefErrorData, ErrorData } from "../account/ProfileDataForm"

export const SignupForm = () => {

    const [signUp, { error, isLoading, isSuccess }] = useSignUpMutation()
    const [accountData, setAccountData] = useState<SignupParams>({
        fullName: '',
        email: '',
        password: '',
        repeat_password: ''
    })

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountData({ ...accountData, [event.target.name]: event.target.value})
    }
    
    const submit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const res = await signUp({ 
            email: accountData.email,
            fullName: accountData.fullName,
            password: accountData.password
        })
        console.log(res);
        
    }
    if (isSuccess) {
        return <SuccessMessage type="Auth" message="Your account has been successfully registered" />
    }
    return (
        <div className="form-container">
            <h2>Sign up</h2>
            { error && <AlertError
                    errorMessage={ (error as DefErrorData)?.error ? (error as DefErrorData)?.error: (error as ErrorData).data.message ? (error as ErrorData)?.data?.message: 'ERROr' } 
                />}
            <form onSubmit={submit}>
                <input value={accountData.fullName} onChange={onInputChange} type="text" name="fullName" placeholder='Full name' required />
                <input value={accountData.email} onChange={onInputChange} type="email" name="email" placeholder='Email' required />
                <PasswordInput value={accountData.password} onChange={onInputChange} />
                <PasswordInput value={accountData.repeat_password ?? ''} onChange={onInputChange} placeholder="Repeat password" />
                <button disabled={ isLoading } type="submit">
                    {
                        isLoading ? <Spinner />
                        :'Sign up'
                    }
                </button>
                <p className="terms-legend">By proceeding you agree to our <a href="/privacy-policy">privacy policy</a> and <a href="/terms">terms</a>.</p>
            </form>
            <div className='or-providers'>
                <div className='or-providers-title'>
                    <hr /><span>Or Sign up with</span><hr />
                </div>
                <LoginProviders />
            </div>
        </div>
    )
}