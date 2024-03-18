import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddDeal from './forms/AddDeal'
import SidebarControlContext from '../context/SidebarControlContext'
import DataTable from './views/DataTable'
import DataControls from './views/DataControls'

const Deals = () => {
    const { handleAddClick } = useContext(SidebarControlContext)
    return (
        <>
            <div className='title-header'>
                <h1 className='main-title'>Deals</h1>
                <button className='btn-add-new' onClick={handleAddClick}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
            </div>

            <DataControls />
            <DataTable />
            <AddDeal />
        </>
    )
}

export default Deals