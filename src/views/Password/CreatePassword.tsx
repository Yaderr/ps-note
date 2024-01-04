import { TrashIcon } from '@heroicons/react/24/outline'
import { PasswordInput } from '../../componets/input/PasswordInput'
import '../css/create.css'

export const CreatePassword = () => {

    return (
        <div className="create-password">
            <div className='nav-header'>
                <button>
                    <TrashIcon width={30} height={30} />
                </button>
            </div>
            <div className="password-form">
                <form action="">
                    <input type="text" name="title" id="title" placeholder='Title' />
                    <input type="text" name="websiteUrl" id="websiteUrl" placeholder='Website URL' />
                    <input type="text" name="userNameEmail" id="userNameEmail" placeholder='Username or Email' />
                    <PasswordInput />
                    <input type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
}