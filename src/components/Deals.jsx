import React, { useContext } from 'react'
import ViewDeals from './views/ViewDeals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddDeal from './forms/AddDeal'
import DealDataContext, { DealDataProvider } from '../context/DealContext'

const Deals = () => {
    return (
        <DealDataProvider>
            <DealsContent />
        </DealDataProvider>
    )
}

const DealsContent = () => {
    const { isAddNewDealOpen, handleAddDealClick } = useContext(DealDataContext)
    return (
        <>
            <div className='title-header'>
                <h1 className='main-title'>Deals</h1>
                <button className='btn-add-new' onClick={handleAddDealClick}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
            </div>
            <ViewDeals />
            <AddDeal />
            {isAddNewDealOpen && (
                <div className='backdrop' onClick={handleAddDealClick}></div>
            )}
        </>
    )
}

export default Deals