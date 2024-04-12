import { createBrowserRouter } from "react-router-dom";
import { 
    Auth,
    SignupAuth,
    LoginAuth,
    MainLayoutView,
    Home,
    Card,
    Password,
    CreateLayoutView,
    CreateCard,
    CreatePassword,
    Account,
    ResetPassword,
    ForgotPassword
} from "../views";

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
            },
            {
                path: 'forgot-password',
                Component: ForgotPassword
            },
            {
                path: 'reset-password?',
                Component: ResetPassword
            }
        ]
    },
    {
        path: 'create',
        Component: CreateLayoutView,
        children: [
            {
                path: 'card',
                Component: CreateCard
            },
            {
                path: 'password',
                Component: CreatePassword
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
            },
            {
                path: 'account',
                Component: Account
            }
        ]
    }
])