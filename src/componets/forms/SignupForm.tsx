import { LoginProviders } from "../LoginProviders"
import { PasswordInput } from "../input/PasswordInput"
import './form.css'

export const SignupForm = () => {
   
    return (
        <div className="form-container">
            <h2>Sign up</h2>
            <form>
                <input type="text" name="full-name" placeholder='Full Name' required />
                <input type="email" name="email" placeholder='Email' required />
                <PasswordInput />
                <PasswordInput placeholder="Repeat Password" />
                <input type="submit" value="Sign up" />
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