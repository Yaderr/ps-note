import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Fragment, memo } from "react";
import './css/alert.css'
import { Transition } from "@headlessui/react";

interface AlertErrorProps {
    errorMessage: string | string[]
}

export const AlertError = memo(({ errorMessage }: AlertErrorProps) => {

    if(!errorMessage) return null
    return (
        <Transition
            appear
            as={Fragment}
            enter="dialog-animation-enter"
            enterFrom="dialog-animation-enter-from"
            enterTo="dialog-animation-enter-to"
            leave="dialog-animation-leave"
            leaveFrom="dialog-animation-leave-from"
            leaveTo="dialog-animation-leave-to"
        >

        <div className="alert-error">
            <div className="icon">
                <ExclamationTriangleIcon width={25} height={25} />
            </div>
            <div className="alert-content">
                {
                    Array.isArray(errorMessage) ? (
                        <>
                            <div>
                                <span>There were {errorMessage.length} errors with your submission</span>
                            </div>
                            <ul>
                                {
                                    errorMessage.map(message => (
                                        <li key={message}>{ message }</li>
                                        ))
                                    }
                            </ul>
                        </>
                        
                        )
                        :(
                            <span>
                            {errorMessage}
                        </span>
                    )
                    
                }
            </div>
        </div>
                </Transition>
    )
},)