import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import './css/dialogs.css'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface confirmDialogProps {
    isOpen: boolean, 
    closeDialog: () => void,
    confirmDialog: () => void,
    title?: string,
    body?: string
}

export const ConfirmDialog = ({ isOpen, closeDialog, confirmDialog, title, body }: confirmDialogProps) => {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="confirm-dialog" onClose={closeDialog}>
                    <div className="back-drop" />
                    <div className="dialog-container">
                        <div className="panel-container">
                            <Transition.Child
                                as={Fragment}
                                enter="dialog-animation-enter"
                                enterFrom="dialog-animation-enter-from"
                                enterTo="dialog-animation-enter-to"
                                leave="dialog-animation-leave"
                                leaveFrom="dialog-animation-leave-from"
                                leaveTo="dialog-animation-leave-to"
                            >
                                <Dialog.Panel className='dialog-panel'>
                                    <div className="icon">
                                        <ExclamationTriangleIcon width={30} height={30} />
                                    </div>
                                    <Dialog.Title as="h3">{ title }</Dialog.Title>
                                    <div className="dialog-body">
                                        <p className="text-sm text-gray-500">
                                        { body }
                                        </p>
                                    </div>
                                    <div className="dialog-actions">
                                        <button className='cancel' onClick={ closeDialog }>
                                            Cancel
                                        </button>
                                        <button className='delete' onClick={ confirmDialog }>
                                            Delete
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}