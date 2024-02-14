import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon, EllipsisVerticalIcon, GlobeAltIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { EditPasswordModal } from './EditPasswordModal'
import { CopyButton } from './CopyButton'
import { Password } from '../interface'
import { ConfirmDialog } from '.'
import { useDeletePasswordMutation } from '../store/services/psNoteApi'
import './css/passwordItem.css'

export const PasswordItem = (passwordParam: Password) => {

    const { id, title, userNameEmail, password, websiteUrl, websiteDetails } = passwordParam
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)

    const openEditModal = () => {
        setIsOpenEditModal(true)
    }

    const closeEditModal = () => {
        setIsOpenEditModal(false)
    }

    return (
        <>
            <EditPasswordModal password={ passwordParam } isOpen={ isOpenEditModal } closeModal={closeEditModal} />
            <div className="item-container">
                <div className="password-item">
                    <a onClick={openEditModal} rel="oopener noreferrer" href="#">
                        <div className="password-icon-details">
                            <div className="icon">
                                <PasswordIcon icon={ websiteDetails?.icon } />
                            </div>
                            <div className="details">
                                <span>{ title }</span>
                                <p>{ userNameEmail }</p>
                            </div>
                        </div>
                    </a>
                    <div className="password-icon-action">
                        <CopyButton link={websiteUrl} text={password} />
                        <PasswordActionMenu id={id} link={websiteUrl} openEditModal={openEditModal} />
                    </div>
                </div>
            </div>
        </>
    )
}

interface PasswordActionMenuProps {
    link: string,
    id: string,
    openEditModal: () => void
}

const PasswordActionMenu = ({ id, link, openEditModal }: PasswordActionMenuProps) => {

    const [removePassword] = useDeletePasswordMutation()
    
    // Confirm Dialog 
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false)
    const handleDelete = () => {
        setIsOpenConfirmDialog(true)
    }
    const closeConfirmDialog = () => {
        setIsOpenConfirmDialog(false)
    }

    const deletePassword = async () => {
        console.log(`Yes delte card ${id}`);
        await removePassword(id)
        setIsOpenConfirmDialog(false)
    }
    
    const open = () => {
        window.open(`https://${link}`)
    }
    
    return (
        <div className='action-menu'>
            <ConfirmDialog 
                title='Are you sure?'
                isOpen={ isOpenConfirmDialog }
                closeDialog={closeConfirmDialog} 
                confirmDialog={deletePassword}
                body='This action cannot be undone, all values associated with it will be lost.'
            />
            
            <Menu as="div" className='menu'>
                <Menu.Button> 
                    <EllipsisVerticalIcon width={25} height={25} />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="menu-animation-enter"
                    enterFrom="menu-animation-enter-from"
                    enterTo="menu-animation-enter-to"
                    leave="menu-animation-leave"
                    leaveFrom="menu-animation-leave-from"
                    leaveTo="menu-animation-leave-to"
                >
                    <Menu.Items className='menu-items'>
                        <Menu.Item>
                            <button onClick={ open } aria-selected={false} className='item'>
                                <ArrowTopRightOnSquareIcon width={18} height={18}/>
                                Open
                            </button>            
                        </Menu.Item>
                        <Menu.Item >
                            <button className='item' onClick={ openEditModal }>
                                <PencilIcon width={18} height={18} />
                                Edit
                            </button>
                        </Menu.Item>
                        <Menu.Item >
                            <button className='item remove' onClick={ handleDelete }>
                                <TrashIcon width={18} height={18} />
                                Delete
                            </button>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

const PasswordIcon = ({ icon }: { icon?: string }) => ( //create component for icon images
    icon ? <img onError={(a) => {}} src={icon} alt="" />
    : <GlobeAltIcon />
)