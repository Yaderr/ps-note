import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PasswordForm } from './PasswordForm'
import './css/createNewButtonModal.css'
import { CreateCard } from '../views'

interface CreateNewButtonModalProps {
    type: string
}


export const CreateNewButtonModal = ({ type }: CreateNewButtonModalProps) => {
    
    const FORMS_COMPONENTS: { [key:string]: JSX.Element } = {
        'Password': <PasswordForm />,
        'Card': <CreateCard />
    }
    
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className='create-new-top-button'>
                <button onClick={openModal}>
                    <PlusIcon width={20} height={20} strokeWidth={2} />
                    { type }
                </button>
            </div>
            <Transition 
                show={isOpen} 
                appear
                enter=""
                enterFrom=""
                enterTo=""
                leave=""
                leaveFrom=""
                leaveTo=""
                as={Fragment}
            >
                <Dialog onClose={closeModal} as='div' className="create-new-modal-dialog">
                    <div className="create-new-modal-backdrop"></div>
                    <div className='create-new-modal-ovelay'>
                        <div className='create-new-modal'>
                            <Dialog.Panel className='create-new-modal-panel'>
                                <div className="h-nav">
                                    <h2>{type}</h2>
                                    <button onClick={closeModal}>
                                        <XMarkIcon width={20} height={20} />
                                    </button>
                                </div>
                                {
                                   FORMS_COMPONENTS[type] 
                                }
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}