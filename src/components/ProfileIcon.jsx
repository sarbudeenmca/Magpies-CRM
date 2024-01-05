import React from 'react'
import './ProfileIcon.css'
import avatar from '../assets/img/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ProfileIcon = () => {
    return (
        <>
            <div className='profile-avatar'>
                <img src={avatar} alt="avatar" className='avatar-img' />
            </div>
            <div className="prifile-name">
                <p>Sarbudeen</p> <FontAwesomeIcon icon={faChevronDown} className='profile-icon' />
            </div>
        </>
    )
}

export default ProfileIcon