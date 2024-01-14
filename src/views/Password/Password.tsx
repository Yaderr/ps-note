import { CreateNewButtonModal, PasswordsList } from "../../componets"

export const Password = () => {

    return (
        <div>
            <div className="head-nav">
                <h2>Passwords</h2>
                <CreateNewButtonModal type="Password" />
            </div>
            <PasswordsList />
        </div>
    )
}