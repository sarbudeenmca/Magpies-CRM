import React, { useContext } from 'react'
import ViewLeads from './views/ViewLeads'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'
import LeadDataContext, { LeadDataProvider } from '../context/LeadContext'

const Leads = () => {
  return (
    <LeadDataProvider>
      <LeadsContent />
    </LeadDataProvider>
  )
}

const LeadsContent = () => {
  const { isAddNewLeadOpen, handleAddLeadClick } = useContext(LeadDataContext)

  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new' onClick={() => handleAddLeadClick()}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
      </div>
      <ViewLeads />
      {isAddNewLeadOpen && (
        <div className="form-backdrop" onClick={handleAddLeadClick} />
      )}
      <AddLead />
    </>
  )
}

export default Leads