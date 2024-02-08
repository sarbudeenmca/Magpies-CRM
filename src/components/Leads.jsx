import React, { useContext } from 'react'
import ViewLeads from './views/ViewLeads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'
import LeadDataContext from '../context/leadContext'

const Leads = () => {
  const { isAddNewLeadOpen, handleAddLeadClick } = useContext(LeadDataContext)
  return (
    <>
      <LeadDataContext>
        <div className='title-header'>
          <h1 className='main-title'>Leads</h1>
          <button className='btn-add-new' onClick={() => handleAddLeadClick()}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
        </div>
        <ViewLeads />
        <AddLead />
        {isAddNewLeadOpen && (
          <div className="backdrop" onClick={handleAddLeadClick} />
        )}
      </LeadDataContext>
    </>
  )
}

export default Leads