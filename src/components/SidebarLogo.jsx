import React from 'react'
import Logo from '../assets/img/magpies-crm-light.png'
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