import React, { useContext, useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import './Layout.css'
import { useOutlet } from 'react-router-dom'
import SidebarControlContext from '../context/SidebarControlContext'
import 'react-loading-skeleton/dist/skeleton.css'

const Layout = () => {

  const outlet = useOutlet();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  const { isAddNewOpen, handleAddClick } = useContext(SidebarControlContext)

  return (
    <section className='layout'>
      <section className={`sidebar ${isSidebarOpen ? 'translate-x-0 w-1/6 opacity-1' : '-translate-x-full w-0 opacity-0'}`}>
        <Sidebar />
      </section>
      <section className={`rightside ${isSidebarOpen ? 'w-5/6' : 'w-full'}`}>
        <section className='topbar'>
          <Topbar toggleSidebar={toggleSidebar} />
        </section>
        <section className="outlet">
          {React.cloneElement(outlet)}
        </section>
        {isAddNewOpen && (
          <div className='form-backdrop' onClick={handleAddClick}></div>
        )}
      </section>
    </section>
  )
}

export default Layout