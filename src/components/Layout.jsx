import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Outlet from './Outlet'
import './Layout.css'

const Layout = () => {
  return (
    <section className='layout'>
      <section className='lefthalf'>
        <section className='sidebar'>
          <Sidebar />
        </section>
      </section>
      <section className='righthalf'>
        <section className='topbar'>
          <Topbar />
        </section>
        <section className="outlet">
          <Outlet />
        </section>
      </section>
    </section>
  )
}

export default Layout