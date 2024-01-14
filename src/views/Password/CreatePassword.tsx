import { useState } from 'react'
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PasswordInput } from '../../componets/input/PasswordInput'
import { PasswordParams } from '../../interface'
import '../css/create.css'
import { useCreatePasswordMutation } from '../../store/services/psNoteApi'
import { PasswordForm } from '../../componets/PasswordForm'


export const CreatePassword = () => {

    return (
        <div className="create-password">
            <div className='nav-header'>
                <button>
                    <TrashIcon width={30} height={30} />
                </button>
            </div>
            <div className="password-form">
                <PasswordForm />
            </div>
        </div>
    )
}