import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon, TrashIcon, cop } from '@heroicons/react/24/outline'
import { Card } from '../interface'
import './css/cardItem.css'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ConfirmDialog } from '.'
import { useNavigate } from 'react-router-dom'

export const CardItem = ({ id, title, number, typeDetails }: Card) => {

    const numLength = number.toString().length
    const anonNumber = '**** '.repeat((numLength-4)/4)+number.toString().substring(numLength-4) 
    
    return (
        <div className='item-container'>
            <div className='card-item'>
                <a target="_blank" rel="noopener noreferrer" title={typeDetails.name}>
                    <div className='cards-icon-details'>
                        <div className='icon'>
                            <img src={ typeDetails.icon } alt="" />
                        </div>
                        <div className='details'>
                            <span>{ title }</span>
                            <p>{ anonNumber }</p>
                        </div>
                    </div>
                </a>
                <div className='password-icon-action'>
                    <ActionMenu id={id} text={number.toString()} />
                </div>
            </div>
        </div>
    )
}

const ActionMenu = ({ id, text }: { id: string, text: string }) => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleDelete = () => {
        setOpen(true)
    }

    const close = () => {
        setOpen(false)
    }

    const copy = () => {
        navigator.clipboard.writeText(`${text}`)
    }

    const deleteCard = () => {
        console.log(`Yes delte card ${id}`);
        setOpen(false)
    }

    const goToEdit = () => {
        navigate(`/edit/card/${id}`)
    }
    
    return (
        <div className='action-menu'>
            <ConfirmDialog 
                title='Are you sure you want to delete this card?'
                isOpen={open}
                closeDialog={close}
                confirmDialog={ deleteCard }
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
                            <button onClick={ copy } aria-selected={true} className='item'>
                                <Square2StackIcon width={18} height={18} />
                                Copy
                            </button>            
                        </Menu.Item>
                        <Menu.Item >
                            <button className='item' onClick={ goToEdit }>
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