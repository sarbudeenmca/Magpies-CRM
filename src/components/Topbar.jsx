import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Topbar.css'

import React from 'react'

const Topbar = ({ toggleSidebar }) => {
  return (
    <>
      <div className='bars-icon' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  )
}

export default Topbar