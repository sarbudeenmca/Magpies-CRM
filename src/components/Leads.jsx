import React, { useState } from 'react'
import ViewLeads from './views/ViewLeads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'
const Leads = () => {

  const [isAddNewOpen, setAddNewOpen] = useState(false);
  const handleAddClick = () => {
    setAddNewOpen(!isAddNewOpen);
  }

  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new' onClick={() => handleAddClick()}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
      </div>
      <ViewLeads />
      <AddLead isAddNewOpen={isAddNewOpen} handleAddClick={() => handleAddClick()} />
      {isAddNewOpen && (
        <div className="backdrop" onClick={handleAddClick} />
      )}
    </>
  )
}

export default Leads