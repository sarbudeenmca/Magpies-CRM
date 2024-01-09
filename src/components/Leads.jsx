import React from 'react'
import ViewLeads from './views/ViewLeads'

const Leads = () => {
  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new'>Add New</button>
      </div>
      <ViewLeads />
    </>
  )
}

export default Leads