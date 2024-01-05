import React from 'react'
import Logo from '../assets/img/logo-w.png'
import './SidebarLogo.css'
const SidebarLogo = () => {
    return (
        <div className='logo-container'>
            <img src={Logo} alt='Site Logo' className='sidebar-logo' />
        </div>
    )
}

export default SidebarLogo