import { LoginProviders } from '../LoginProviders'
import { PasswordInput } from '../input/PasswordInput'
import './form.css'

export const LoginForm = () => {
    
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form>
                <input type="email" name="email" placeholder='Email' required />
                <PasswordInput />
                <a href='/reset-password'>Forgot Password?</a>
                <input type="submit" value="Login" />
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