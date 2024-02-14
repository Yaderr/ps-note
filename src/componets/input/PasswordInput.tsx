import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import './input.css'
import { useToggler } from '../../hooks/useToggler';

interface PasswordInputProps {
    placeholder?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export const PasswordInput = ({ placeholder="Password", onChange, value }: PasswordInputProps) => {

    const { visibility, toggleVisibility } = useToggler()

    return (
        <div className="password-input" role="input">
            <input 
                value={ value }
                onChange={ onChange }
                className="password-i"
                type={ visibility? 'text': 'password' }
                name={placeholder.toLowerCase().replace(' ', '_')}
                placeholder={placeholder} required
            />
            <button type="button" onClick={ toggleVisibility }>
                {
                    (!visibility) ? <EyeIcon className="right-icon" width={28} height={28} />
                    : <EyeSlashIcon className="right-icon" width={28} height={28} />
                }
            </button>
        </div>
    )
}