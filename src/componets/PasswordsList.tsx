import { PasswordItem } from "./PasswordItem"
import './css/passwordList.css'

interface WebsiteDetail {
    title: string,
    icon: string
}

interface PasswordItemProps {
    id: string,
    title: string,
    userNameEmail: string,
    password: string,
    websiteUrl: string,
    websiteDetails: WebsiteDetail
}

const passwords: PasswordItemProps[] = [
    {
        id: '123-123',
        title: 'Google',
        userNameEmail: 'yaderson@gmail.com',
        password: '123',
        websiteUrl: 'https://www.google.com/',
        websiteDetails: {
            title: 'Google',
            icon: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
        }
    },
    {
        id: '123-1234',
        title: 'Apple',
        userNameEmail: 'yaderson@gmail.com',
        password: '1111111111111111',
        websiteUrl: 'https://www.apple.com/',
        websiteDetails: {
            title: 'Apple',
            icon: 'https://logo.clearbit.com/apple.com'
        }
    },
    {
        id: '123-1235',
        title: 'Behance',
        userNameEmail: 'yaderson@gmail.com',
        password: '22222222222',
        websiteUrl: 'https://www.behance.com/',
        websiteDetails: {
            title: 'Behance',
            icon: 'https://a5.behance.net/04ca6e97107367ae36795345ce3032352e3931fd/img/site/favicon.ico?cb=264615658'
        }
    }, 
    {
        id: '123-1236',
        title: 'Messenger',
        userNameEmail: 'test_email@mail.com',
        password: '22222222222',
        websiteUrl: 'https://www.messenger.com/',
        websiteDetails: {
            title: 'Messenger',
            icon: 'https://static.xx.fbcdn.net/rsrc.php/ym/r/YQbyhl59TWY.ico'
        }
    }, 
    {
        id: '123-1237',
        title: 'Facebook',
        userNameEmail: 'facebook-mail@mail.com',
        password: 'dsdasdadasdasdasd123123123dsdadsdasds',
        websiteUrl: 'https://www.facebook.com/',
        websiteDetails: {
            title: 'Facebook',
            icon: 'https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico'
        }
    }
]

export const PasswordsList = () => {
    
    return (
        <div className="password-list">
            {
                passwords.map(password => (
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
        </div>
    )
}