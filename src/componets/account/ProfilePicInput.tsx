import { CameraIcon } from '@heroicons/react/24/outline'
import '../css/account.css'
import { useUploadMutation } from '../../store/services/psNoteApi'
import { useDispatch } from 'react-redux'
import { updatePicture } from '../../store/slice/authSlice'

interface ProfilePicInputProps {
    picture: string
}

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export const ProfilePicInput = ({ picture }: ProfilePicInputProps) => {

    const [upload, { error }] = useUploadMutation()
    const dispatch = useDispatch()

    const uploadPicture = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = (event.target as HTMLInputElement).files

        if(!files || !files.length) {
            console.log('No files detected')
            return 0
        }
        const response = await upload(files[0]).unwrap()
        if(!error) {
            dispatch(updatePicture(response))
        }
    }

    return (
        <div className="edit-profile-pic">			
            <input onChange={uploadPicture} type="file" name="input-profilepic" id="input-profilepic" />
            <label style={{ backgroundImage: `url(${VITE_PS_NOTE_API_BASE_URL}/media/${picture})` }} htmlFor="input-profilepic">
                <CameraIcon width={40} height={40} /> 
            </label>
        </div>
    )
}