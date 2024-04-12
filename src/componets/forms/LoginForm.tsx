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
        
        if('data' in response) {
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
                <PasswordInput value={formState.password} onChange={inputChange} />
                <a href='./forgot-password'>Forgot Password?</a>
                <button disabled={ isLoading } type="submit">
                    {
                        isLoading ? <Spinner />
                        :'Login'
                    }
                </button>
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

export const Spinner = () => {
    return (
        <svg className='spinner'>
            <circle stroke='currentColor' strokeWidth={4} cx={12} cy={12} r={10}></circle>
            <path className="path"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            >
            </path>
        </svg>
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