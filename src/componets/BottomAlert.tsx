import { ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import './css/alert.css'

interface AletProps {
    isOpen: boolean,
    link: stirng
}

export const BottomAlert = ({ isOpen, link }: AletProps) => {

    

    return (
        <div style={{ display: isOpen? 'flex':'none', opacity: isOpen? '100': '0'}} className="alert">
            <div>
                <CheckCircleIcon width={25} height={25} />
            </div>
            <div className='bottom-alert-text'>
                <p>
                    Contraseña copiada al portapapeles <a color='white' target="_blank" className="copy-button" href={`https://${link}`}>Click to Open</a>
                </p>
            </div>
        </div>
    )
}