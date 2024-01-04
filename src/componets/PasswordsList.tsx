import { ElementType } from "react";
import { Password } from "../interface";
import { useGetAllPasswordsQuery } from "../store/services/psNoteApi"
import { MapList } from "./MapList"
import { NetworkError } from "./NetworkError"
import { PasswordItem, PasswordItemProps } from './PasswordItem';
import './css/passwordList.css'
import { PasswordListLoader } from "./loaders"

export const PasswordsList = () => {

    const a = useGetAllPasswordsQuery()

    const da = [
        {
            id: 'id123123',
            title: "behance",
            websiteUrl: "www.behance.net",
            userNameEmail: "apple001@gmail.com",
            password: "123123123123123123231",
            websiteDetails: {
                websiteUrl: 'www.behance.net',
                title: 'apple',
                icon: 'https://www.behance.net/favicon.ico'
            }
        },
        {
            id: 'id1231323123123',
            title: "behance2",
            websiteUrl: "www.behance.net",
            userNameEmail: "apple001@gmail.com",
            password: "123123123123123123231",
            websiteDetails: {
                websiteUrl: 'www.amazon.com',
                title: 'Amazon',
                icon: 'https://www.amazon.com/favicon.ico'
            }
        }
    ]
    
    return (
        <div className="password-list">
            <MapList<Password> 
                ComponentElementItem={PasswordItem}
                Loader={PasswordListLoader}
                query={a} 
            />
            {/* {
                isLoading ? (<PasswordListLoader />)
                :error ? (<NetworkError error={error} reload={refetch} />)
                :data ? (
                    <>
                        {
                            data.map(password => (
                                <PasswordItem
                                    key={password.id}
                                    title={password.title}
                                    userNameEmail={password.userNameEmail}
                                    password={password.password}
                                    websiteUrl={password.websiteUrl}
                                    websiteDetails={password.websiteDetails}
                                />                                 
                            ))
                        }
                    </>
                )
                : (
                    <span>
                        Empty
                    </span>
                )
            } */}
        </div>
    )
}