import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'

import React from 'react'
import ProfileIcon from './ProfileIcon'

const Topbar = ({ toggleSidebar }) => {
  return (
    <>
      <div className='bars-icon' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='profile-bar'>
        <ProfileIcon />
      </div>
    </>
  )
}

export default Topbar