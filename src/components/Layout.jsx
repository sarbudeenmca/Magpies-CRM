import React, { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import './Layout.css'
import { useOutlet } from 'react-router-dom'

const Layout = () => {

  const outlet = useOutlet();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <section className='layout'>
      <section className={`sidebar ${isSidebarOpen ? 'translate-x-0 w-1/6' : '-translate-x-full w-0'}`}>
        <Sidebar />
      </section>
      <section className={`rightside ${isSidebarOpen ? 'w-5/6' : 'w-full'}`}>
        <section className='topbar'>
          <Topbar toggleSidebar={toggleSidebar} />
        </section>
        <section className="outlet">
          {React.cloneElement(outlet)}
        </section>
      </section>
    </section>
  )
}

export default Layout