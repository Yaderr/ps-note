import { FormEvent, useState } from 'react'
import { LoginProviders } from '../LoginProviders'
import { PasswordInput } from '../input/PasswordInput'
import { LoginParams } from '../../interface'
import { useLoginMutation } from '../../store/services/authApi'
import { setCredentials } from '../../store/slice/authSlice'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './form.css'

export const LoginForm = () => {

    const [formState, setFormState] = useState<LoginParams>({
        email: '',
        password: ''
    })
    const [login, { isLoading, error }] = useLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const startLogin = async (event: FormEvent) => {
        event.preventDefault()
        
        const response = await login(formState)

        if(!error && 'data' in response) {
            dispatch(setCredentials(response.data))
            navigate('/')
        }
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }
    
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <ErrorAlert error={error} />
            <form onSubmit={ startLogin }>
                <input onChange={ inputChange } type="email" name="email" placeholder='Email' required />
                <PasswordInput onChange={inputChange} />
                <a href='/reset-password'>Forgot Password?</a>
                <input disabled={ isLoading  } type="submit" value="Login" />
                <span style={{ display: isLoading ? "": "none" }}>Loading...</span>
            </form>
            <div className='or-providers'>
                <div className='or-providers-title'>
                    <hr /><span>Or Login with</span><hr />
                </div>
                <LoginProviders />
            </div>
            <p className="signup-user-cta">Don't have an account? <a href='/auth/signup'>Sign up</a></p>
        </div>
    )
}


const ErrorAlert = ({ error }) => {
    if(error) {
        return (
            <div className='error-alert'>
                <ExclamationTriangleIcon width={20} height={20} />
                <p>
                    {
                        'data' in error ? error.data.message : error.error
                    }
                </p>
            </div>
        )
    }
}