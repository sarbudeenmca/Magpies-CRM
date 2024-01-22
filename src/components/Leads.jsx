import React, { useState } from 'react'
import ViewLeads from './views/ViewLeads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'

const Leads = () => {
  const [isAddNewLeadOpen, setAddNewLeadOpen] = useState(false);
  const handleAddLeadClick = () => {
    setAddNewLeadOpen(!isAddNewLeadOpen);
  }

  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new' onClick={() => handleAddLeadClick()}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
      </div>
      <ViewLeads />
      <AddLead isAddNewLeadOpen={isAddNewLeadOpen} handleAddLeadClick={() => handleAddLeadClick()} />
      {isAddNewLeadOpen && (
        <div className="backdrop" onClick={handleAddLeadClick} />
      )}
    </>
  )
}

export default Leads