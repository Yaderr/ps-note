import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { User } from '../interface'
import { PencilIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { logOut } from '../store/slice/authSlice'

interface userProfileProps {
	user: User
}

export const UserProfile = ({ user }: userProfileProps) => {

	console.log();
	
	
	return (
		<div className="user-profile">
			<Popover className="relative">
				{() => (
					<>
						<Popover.Button>
							<img src={ user?.profilePic} alt="" />
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
				<div className="edit-profile-pic">					
					<input type="file" name="input-profilepic" id="input-profilepic" />
					<label style={{ backgroundImage: `url(${profilePic})` }} htmlFor="input-profilepic">
						<PencilIcon width={20} height={20} />
					</label>
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