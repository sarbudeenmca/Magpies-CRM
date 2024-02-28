import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'
import LeadDataContext, { LeadDataProvider } from '../context/LeadContext'
import { DataControlsProvider } from '../context/DataControlsContext'
import DataControls from './views/DataControls'
import DataTable from './views/DataTable'

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
      <DataControlsProvider>
        <DataControls />
        <DataTable />
      </DataControlsProvider>
      {isAddNewLeadOpen && (
        <div className="form-backdrop" onClick={handleAddLeadClick} />
      )}
      <AddLead />
    </>
  )
}

export default Leads