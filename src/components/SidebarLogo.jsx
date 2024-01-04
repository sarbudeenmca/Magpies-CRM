import React from 'react'
import Logo from '../assets/img/logo-w.png'
import './SidebarLogo.css'
const SidebarLogo = () => {
    return (
        <>
            <img src={Logo} alt='Site Logo' className='sidebar-logo' />
        </>
    )
}

export default SidebarLogo