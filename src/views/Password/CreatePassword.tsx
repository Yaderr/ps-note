import { useState } from 'react'
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PasswordInput } from '../../componets/input/PasswordInput'
import { PasswordParams } from '../../interface'
import '../css/create.css'
import { useCreatePasswordMutation } from '../../store/services/psNoteApi'


export const CreatePassword = () => {

    const [createPasword, { data, isLoading, error }] = useCreatePasswordMutation()
    const [password, setPassword] = useState<PasswordParams>({
        title: '',
        websiteUrl: '',
        userNameEmail: '',
        password: ''
    })

    const submitForm = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(password);
        
        const res = await createPasword(password)
        if(error) {
            console.log(error);
        }
        if(data) {
            console.log(data);
            
        }
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({ ...password , [event.target.name]: event.target.value })
    }

    return (
        <div className="create-password">
            <div className='nav-header'>
                <button>
                    <TrashIcon width={30} height={30} />
                </button>
            </div>
            <div className="password-form">
                <form onSubmit={ submitForm }>
                    <div style={{ display: error? '':'none'}} className='error-alert'>
                        <ExclamationTriangleIcon width={20} height={20} />
                        <ul className=''>
                            {
                                error && 'data' in error ? error.data.message.map((e: string) => (
                                    
                                    <li>{e}</li>
                                    
                                    
                                ))
                                :""
                            }
                        </ul>
                    </div>
                    <input onChange={inputChange} type="text" name="title" id="title" placeholder='Title' />
                    <input onChange={inputChange} type="text" name="websiteUrl" id="websiteUrl" placeholder='Website URL' />
                    <input onChange={inputChange} type="text" name="userNameEmail" id="userNameEmail" placeholder='Username or Email' />
                    <PasswordInput onChange={inputChange} />
                    <input disabled={ isLoading } type="submit" value={isLoading ? 'Saving': 'Save'} />
                </form>
            </div>
        </div>
    )
}