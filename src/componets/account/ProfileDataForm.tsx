import { useState } from "react"
import { EditUserInfo, User } from "../../interface"
import { ProfilePicInput } from "./ProfilePicInput"
import { useEditUserInfoMutation } from "../../store/services/psNoteApi"
import { Spinner } from ".."
import { useDispatch } from "react-redux"
import { updateUserInfo } from "../../store/slice/authSlice"
import { AlertError } from "../AlertError"

export interface DefErrorData {
    error: string
}

export interface ErrorData {
    data: {
        error: string,
        message: string[],
        statusCode: number
    },
    status: number
}
export const ProfileDataForm = (user: User) => {

    const [editUserInfo, { isLoading, error }] = useEditUserInfoMutation()
    const dispatch = useDispatch()

    const[updateUser, setUpdateUser] = useState<EditUserInfo>({
        fullName: user.fullName,
        email: user.email
    })

    const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await editUserInfo(updateUser).unwrap()
        console.log(error)
        dispatch(updateUserInfo(response))
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateUser({ ...updateUser, [event.target.name]: event.target.value })
    }

    return (
        <div className="profile-data-form">
            <div className="form-centered">
            <div className="pic">
                <div className="pic-input">
                    <ProfilePicInput picture={ user.profilePic } />
                </div>
            </div>
            <form onSubmit={submitForm}>

                { error && <AlertError
                    errorMessage={ (error as DefErrorData)?.error ? (error as DefErrorData)?.error: (error as ErrorData).data.message ? (error as ErrorData)?.data?.message: 'ERROr' } 
                />}
                <input onChange={onInputChange} value={updateUser.fullName} type="text" name="fullName" id="fullName" placeholder="Full Name" />
                <input onChange={onInputChange} value={updateUser.email} type="email" name="email" id="email" placeholder="Email" />
                <button type="submit">
                    {
                        isLoading ? <Spinner />
                        : 'Save'
                    }
                </button>
            </form>
            </div>
        </div>
    )
}