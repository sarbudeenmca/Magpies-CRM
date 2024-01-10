import React from 'react'
import ViewLeads from './views/ViewLeads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'

const Leads = () => {
  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new'><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
      </div>
      <ViewLeads />
      <AddLead />
    </>
  )
}

export default Leads