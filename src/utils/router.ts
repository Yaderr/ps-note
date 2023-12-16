import { createBrowserRouter } from "react-router-dom";
import { Auth, SignupAuth, LoginAuth, MainLayoutView, Home, Card, Password } from "../views";

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
    },
    {
        path: '',
        Component: MainLayoutView,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/',
                Component: Home
            },
            {
                path: 'cards',
                Component: Card
            },
            {
                path: 'passwords',
                Component: Password
            }
        ]
    }
])