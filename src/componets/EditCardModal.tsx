import { Dialog, Transition } from "@headlessui/react"
import { Card } from "../interface"
import { Fragment } from "react"
import { CardForm } from "."
import { XMarkIcon } from "@heroicons/react/24/outline"

interface EditCardModalProps {
    card: Card,
    isOpen: boolean,
    closeModal: () => void
}

export const EditCardModal = ({ card, isOpen, closeModal }: EditCardModalProps) => {
    
    
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
                                <CardForm card={card} />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}