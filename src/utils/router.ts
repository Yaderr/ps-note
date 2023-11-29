import { createBrowserRouter } from "react-router-dom";
import { Auth, SignupAuth, LoginAuth } from "../views";

export const router = createBrowserRouter([
    {
        path: '/auth',
        Component: Auth,
        children: [
            {
                index: true,
                Component: LoginAuth
            },
            {
                path: 'login',
                Component: LoginAuth
            },
            {
                path: 'signup',
                Component: SignupAuth
            }
        ]
    }
])