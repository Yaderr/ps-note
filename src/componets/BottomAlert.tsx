import { CheckCircleIcon } from '@heroicons/react/24/outline'
import './css/bottomAlert.css'

export const BottomAlert = ({ open }) => {

    

    return (
        <div style={{ display: open? 'flex':'none', opacity: open? '100': '0'}} className="alert">
            <div>
                <CheckCircleIcon width={25} height={25} />
            </div>
            <div>
                <p>Contraseña copiada al portapapeles</p>
            </div>
        </div>
    )
}