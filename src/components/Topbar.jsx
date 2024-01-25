import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'
import React from 'react'
import ProfileIcon from './ProfileIcon'
import axios from '../api/axios'

const Topbar = ({ toggleSidebar }) => {

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('response', res);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
      <div className='bars-icon' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='profile-bar' onClick={handleLogout}>
        <ProfileIcon />
      </div>
    </>
  )
}

export default Topbar