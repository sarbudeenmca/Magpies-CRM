import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'
import React, { useEffect, useState } from 'react'
import ProfileIcon from './ProfileIcon'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

const Topbar = ({ toggleSidebar }) => {

  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch or set the token when the component mounts
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        localStorage.removeItem('token');
        setToken('');
        navigate('/login');
        // const tokenCheck = localStorage.getItem('token');
        // console.log('Token removed from localStorage Token:(' + tokenCheck + ")");
      } else {
        console.error('Logout failed:', res.data);
      }

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