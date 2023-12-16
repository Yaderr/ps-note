import { NavLink } from 'react-router-dom'
import { ArrowLeftOnRectangleIcon, BanknotesIcon, Bars3Icon, CreditCardIcon, DocumentTextIcon, HomeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import './css/sideNav.css'
import { useState } from 'react';

export const SideNavBar = () => {
    
    const [isOpen, setOpen] = useState(false)

    const open = () => {
        setOpen(open => !open)
    }

    return (
        <nav className={ isOpen ? 'open': ''}>
            <div className="nav-header">
                <div className="logo">
                    <div className='logo-icon'>
                        <BanknotesIcon width={30} height={30} />
                        <p>PsNote</p>
                    </div>
                    <button onClick={open}>
                        <Bars3Icon width={28} height={28} />
                    </button>
                </div>
            </div>
            <ul className="options">
                <li className="list-item">
                    <NavLink to='/'>
                        <HomeIcon width={28} height={28} />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to='/cards' >
                        <CreditCardIcon width={28} height={28} />
                        <span>Cards</span>
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to='/notes'>
                        <DocumentTextIcon width={28} height={28} />
                        <span>Notes</span>
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to='/passwords'>
                        <LockClosedIcon width={28} height={28} />
                        <span>Password</span>
                    </NavLink>
                </li>
                <li className="list-item bottom">
                    <button>
                        <ArrowLeftOnRectangleIcon width={28} height={28} />
                    </button>
                </li>
            </ul>
        </nav>
    )
}