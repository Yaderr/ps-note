import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PrivateOutlet = () => {

    const user = useAuth()
    const location = useLocation()

    return user ? (
        <Outlet />
    ): <Navigate to='/auth/login' state={{ from: location }} />
}