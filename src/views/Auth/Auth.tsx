import { Outlet } from 'react-router-dom';
import '../css/auth.css'

export const Auth = () => {
    
    return (
        <div className="auth-container">
            <div className="bg"></div>
            <Outlet />
        </div>
    )
}