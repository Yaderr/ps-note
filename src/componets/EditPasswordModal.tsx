import { Dialog, Transition } from "@headlessui/react"
import { Password } from "../interface"
import { PasswordForm } from './PasswordForm';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface EditCardModalProps {
    password: Password,
    isOpen: boolean,
    closeModal: () => void
}

export const EditPasswordModal = ({ password, isOpen, closeModal }: EditCardModalProps) => {



    return (
        <>
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
                                    <button onClick={closeModal}>
                                        <XMarkIcon strokeWidth={2} width={20} height={20} />
                                    </button>
                                </div>
                                <PasswordForm password={ password } />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}