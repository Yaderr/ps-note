import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { ConfirmDialog } from '.'
import { useDeleteCardMutation, useUpdateCardMutation } from '../store/services/psNoteApi'
import { EditCardModal } from './EditCardModal'
import { Card } from '../interface'
import './css/cardItem.css'

export const CardItem = (card: Card) => {

    const numLength = card.number.toString().length
    const anonNumber = '**** '.repeat((numLength-4)/4)+card.number.toString().substring(numLength-4)
    
    return (
        <div className='item-container'>
            <div className='card-item'>
                <a target="_blank" rel="noopener noreferrer" title={card.type}>
                    <div className='cards-icon-details'>
                        <div className='icon'>
                            <img src={`/src/assets/networks/${card.type}_logo.svg`} alt="" />
                        </div>
                        <div className='details'>
                            <span>{ card.title }</span>
                            <p>{ anonNumber }</p>
                        </div>
                    </div>
                </a>
                <div className='password-icon-action'>
                    <ActionMenu card={card}  />
                </div>
            </div>
        </div>
    )
}

const ActionMenu = ({ card }: { card: Card }) => {

    const [remove] = useDeleteCardMutation()
    const [updateCard] = useUpdateCardMutation()
    
    // Edit Modal
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const openEditModal = () => {
        setIsOpenEditModal(true)
    }
    const closeEditModal = () => {
        setIsOpenEditModal(false)
    }

    // Confirm Dialog 
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false)
    const handleDelete = () => {
        setIsOpenConfirmDialog(true)
    }
    const closeConfirmDialog = () => {
        setIsOpenConfirmDialog(false)
    }

    const copy = () => {
        navigator.clipboard.writeText(`${card.number.toString()}`)
    }

    const deleteCard = async () => {
        console.log(`Yes delte card ${card.id}`);
        await remove(card.id)
        setIsOpenConfirmDialog(false)
    }

    const fav = () => {
        updateCard({ id: card.id, body: { isFav: !card.isFav }})
    }
    
    return (
        <div className='action-menu'>
            <ConfirmDialog 
                title='Are you sure?'
                isOpen={ isOpenConfirmDialog }
                closeDialog={closeConfirmDialog} 
                confirmDialog={deleteCard}
                body='This action cannot be undone, All value associated with this will be lost.'
            />
            <EditCardModal 
                card={card}
                isOpen={ isOpenEditModal }
                closeModal={ closeEditModal } 
            />
            <Menu as="div" className='menu'>
                    {card.isFav && <StarIcon className='fav-active' width={25} height={25} />}
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
                        <Menu.Item>
                            <button onClick={ fav } className={`item fav ${card.isFav && 'fav-active'}`}>
                                <StarIcon width={18} height={18} />
                                { card.isFav ? 'Unstar': 'Star'}
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