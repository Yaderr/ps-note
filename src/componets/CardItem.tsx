import { EllipsisVerticalIcon, PencilIcon, Square2StackIcon, TrashIcon, cop } from '@heroicons/react/24/outline'
import { Card } from '../interface'
import './css/cardItem.css'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const CardItem = ({ id, title, number, expire, sec_code, type, typeDetails }: Card) => {

    const numLength = number.toString().length
    const anonNumber = '**** '.repeat((numLength-4)/4)+number.toString().substring(numLength-4) 

    console.log(anonNumber)

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
                    <ActionMenu />
                </div>
            </div>
        </div>
    )
}

const ActionMenu = () => {

    const remove = () => {
        console.log('remove action')
    }
    
    return (
        <div className='action-menu'>
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
                            <button aria-selected={true} className='item'>
                                <Square2StackIcon width={18} height={18} />
                                Copy
                            </button>            
                        </Menu.Item>
                        <Menu.Item >
                            <button className='item'>
                                <PencilIcon width={18} height={18} />
                                Edit
                            </button>
                        </Menu.Item>
                        <Menu.Item >
                            <button className='item remove'>
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