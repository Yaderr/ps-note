import { useState } from "react"

export const useToggler = (): { visibility: boolean, toggleVisibility: () => void} => {

    const [ visibility,  setvisibility ] = useState<boolean>(false)

    const toggleVisibility = (): void => {
        setvisibility(visibility => !visibility)
    }

    return {
        visibility,
        toggleVisibility
    }
}