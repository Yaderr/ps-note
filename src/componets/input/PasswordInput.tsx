import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './input.css'
import { useToggler } from '../../hooks/useToggler';

export const PasswordInput = ({ placeholder="Password" }) => {

    const { visibility, toggleVisibility } = useToggler()

    return (
        <div className="password-input" role="input">
            <input className="password-i" type={ visibility? 'text': 'password' } name="password" placeholder={placeholder} required />
            <button type="button" onClick={ toggleVisibility }>
                {
                    (!visibility) ? <EyeIcon className="right-icon" width={28} height={28} />
                    : <EyeSlashIcon className="right-icon" width={28} height={28} />
                }
            </button>
        </div>
    )
}