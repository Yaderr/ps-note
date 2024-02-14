import { ExclamationTriangleIcon, ArrowPathIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { useEffect } from "react"

type reloadFn = () => void
interface NetworkErrorProps {
    error: FetchBaseQueryError | SerializedError
    reload: reloadFn
}

type ErrorItemType = {
    icon: typeof ExclamationTriangleIcon,
    message: string
}

const CUS_ERRORS: {[key: string | number]: ErrorItemType} = {
    'FETCH_ERROR': {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    "PARSING_ERROR": {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    "TIMEOUT_ERROR": {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    "CUSTOM_ERROR": {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    401: {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    403: {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    404: {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    405: {
        icon:  ExclamationTriangleIcon,
        message: 'Something went wrong. try reloading'
    },
    500: {
        icon: InformationCircleIcon,
        message: 'An unexpected error has occurred. try again later.'
    },
    501: {
        icon: InformationCircleIcon,
        message: 'An unexpected error has occurred. try again later.'
    },
    502: {
        icon: InformationCircleIcon,
        message: 'An unexpected error has occurred. try again later.'
    },
    503: {
        icon: InformationCircleIcon,
        message: 'An unexpected error has occurred. try again later.'
    },
    504: {
        icon: InformationCircleIcon,
        message: 'An unexpected error has occurred. try again later.'
    }
}

export const NetworkError = ({ error, reload }: NetworkErrorProps) => {
    
    useEffect(() => {
        console.log({ error })
    },[error])

    return (
        <div className="network-error-container">
            <ExclamationTriangleIcon width={50} height={50} />
            <span>
                {
                    'status' in error ? CUS_ERRORS[error.status].message
                        : CUS_ERRORS[error.code ?? 502].message
                }
            </span>
            <button onClick={reload}>
                <ArrowPathIcon width={20} height={20} />
                Reload
            </button>
        </div>
    )
}