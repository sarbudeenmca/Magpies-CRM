import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddLead from './forms/AddLead'
import SidebarControlContext from '../context/SidebarControlContext'
import DataControls from './views/DataControls'
import DataTable from './views/DataTable'

const Leads = () => {
  const { isAddNewOpen, handleAddClick } = useContext(SidebarControlContext)

  return (
    <>
      <div className='title-header'>
        <h1 className='main-title'>Leads</h1>
        <button className='btn-add-new' onClick={() => handleAddClick()}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
      </div>
        <DataControls />
        <DataTable />
      {isAddNewOpen && (
        <div className="form-backdrop" onClick={handleAddClick} />
      )}
      <AddLead />
    </>
  )
}

export default Leads