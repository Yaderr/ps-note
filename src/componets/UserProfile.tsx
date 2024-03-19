import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { User } from '../interface'
import { useDispatch } from 'react-redux'
import { logOut } from '../store/slice/authSlice'
import { ProfilePicInput } from './account/ProfilePicInput'

interface userProfileProps {
	user: User
}

const {
    VITE_PS_NOTE_API_BASE_URL
} = import.meta.env

export const UserProfile = ({ user }: userProfileProps) => {

	console.log();
	
	
	return (
		<div className="user-profile">
			<Popover className="relative">
				{() => (
					<>
						<Popover.Button>
							<img src={ `${VITE_PS_NOTE_API_BASE_URL}/media/${user.profilePic}` } alt="" />
						</Popover.Button>
						<Transition
							as={Fragment} enter="enter"
							enterFrom="enterFrom"
							enterTo="enterTo"
							leave="leave"
							leaveFrom="leaveFrom"
							leaveTo="leaveTo"
						>
							<Popover.Panel>
								<Panel {...user}  />
							</Popover.Panel>
						</Transition>
					</>
				)
				}
			</Popover>
		</div>
	)
}

const Panel = ({ fullName, profilePic, lastLogin }: User) => {

	const dispatch = useDispatch()

	const startLogOut = () => {
		dispatch(logOut())
	}
	
	return (
		<div className='panel'>
			<div className="user-name">
				<div className='prof-pic'>
					<div className="pic">
					<ProfilePicInput picture={ profilePic } />
					</div>
				</div>
				<span>{ fullName }</span>
				<p>Last login { new Date(lastLogin).toLocaleString('es') }</p>
			</div>
			<div className="user-menu" >
				<ul>
					<li><a href="/account">Cuenta</a></li>
					<li><a href="/privacy">Privacidad</a></li>
					<li><a href="/terms">Términos</a></li>
					<li><a href="/help">Ayuda</a></li>
					<li><a href="#logOut" onClick={ startLogOut } >Cerrar sesión</a></li>
				</ul>
			</div>
		</div>
	)
}