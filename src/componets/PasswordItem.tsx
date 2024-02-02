import { GlobeAltIcon, LinkIcon } from '@heroicons/react/24/outline'
import { CopyButton } from './CopyButton'
import './css/passwordItem.css'

interface WebsiteDetail {
    title: string,
    icon: string
}

export interface PasswordItemProps {
    title: string,
    userNameEmail: string,
    password: string,
    websiteUrl: string,
    websiteDetails?: WebsiteDetail
}

export const PasswordItem = ( { title, userNameEmail, password, websiteUrl, websiteDetails } : PasswordItemProps) => {

    return (
        <div className="item-container">
            <div className="password-item">
            <a target="_blank" rel="oopener noreferrer" href={ websiteUrl }>
                <div className="password-icon-details">
                    <div className="icon">
                        <PasswordIcon icon={ websiteDetails?.icon } />
                    </div>
                    <div className="details">
                        <span>{ title }</span>
                        <p>{ userNameEmail }</p>
                    </div>
                </div>
            </a>
            <div className="password-icon-action">
                <CopyButton text={password} />
            </div>
        </div>
        </div>
    )
}

const PasswordIcon = ({ icon }: { icon?: string }) => (
    icon ? <img onError={(a) => {}} src={icon} alt="" />
    : <GlobeAltIcon />
)