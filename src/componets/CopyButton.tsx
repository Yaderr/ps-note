import { Square2StackIcon } from "@heroicons/react/24/outline"
import { BottomAlert } from "./BottomAlert"
import { useState } from "react"

interface CopyButtonProps {
    text: string,
    link: string
}

export const CopyButton = ({ text, link }: CopyButtonProps) => { //TODO: Copy hook

    const [isOpen, setIsOpen] = useState(false)

    const openAlert = () => {
        setIsOpen(true)
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(`${text}`)
    }

    return (
        <>
            <button className="copy-button" onClick={openAlert}>
                <Square2StackIcon width={25} height={25} onClick={copyToClipBoard} />
            </button>
            <BottomAlert link={link} isOpen={isOpen} />
        </>
    )
}