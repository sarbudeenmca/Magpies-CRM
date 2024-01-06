import React from 'react'
import Logo from '../assets/img/logo-w.png'
import './SidebarLogo.css'
import { useNavigate } from 'react-router-dom'
const SidebarLogo = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/Login')
    }
    return (
        <div className='logo-container' onClick={handleLogoClick}>
            <img src={Logo} alt='Site Logo' className='sidebar-logo' />
        </div>
    )
}

export default SidebarLogo