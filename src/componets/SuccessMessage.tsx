import { Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

export const SuccessMessage = ({ message, type }: { message: string, type: string }) => {
    
    return (
        <div className="password-success">
            <Transition
                show
                as={Fragment}
                appear
                enter="success-animation-enter"
                enterFrom="success-animation-enter-from"
                enterTo="success-animation-enter-to"
            >
                <div className="password-success-message-container">
                    <div className="password-success-message">
                        <div className="success-icon">
                            <CheckIcon className="icon-ss" width={30} height={30} />
                        </div>
                        <h2>{message}</h2>
                    </div>
                </div>

            </Transition>
            <a  href={`/${type}`}>Go back</a>
        </div>
    )
}