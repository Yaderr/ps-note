import { ProfileDataForm } from "../componets/account/ProfileDataForm"
import { useAuth } from "../hooks/useAuth"


export const Account = () => {

    const user = useAuth()
    
    if(user) {
        return (
            <ProfileDataForm { ...user } />
        )
    }
}