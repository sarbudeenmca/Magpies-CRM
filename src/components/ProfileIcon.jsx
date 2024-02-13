import React, { Fragment, useContext } from 'react'
import avatar from '../assets/img/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Menu, Transition } from '@headlessui/react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import AuthDataContext from '../context/AuthContext'

const ProfileIcon = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const { handleLogout } = useContext(AuthDataContext)

    return (
        <>
            <div className='profile-avatar'>
                <img src={avatar} alt="avatar" className='avatar-img' />
            </div>

            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="prifile-name">
                    <p>Sarbudeen</p> <FontAwesomeIcon icon={faChevronDown} className='profile-icon' />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="tb-menu-items">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'dd-item-active' : '', 'dd-item')} >
                                        <FontAwesomeIcon className='pr-2 w-4 text-center' icon={faUser} /> View Profile
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" onClick={handleLogout} className={classNames(active ? 'dd-item-active' : '', 'dd-item')} >
                                        <FontAwesomeIcon className='pr-3 w-4 text-center' icon={faPowerOff} />Logout
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

        </>
    )
}

export default ProfileIcon