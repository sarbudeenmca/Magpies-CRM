import React, { useState } from 'react'
import ViewDeals from './views/ViewDeals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddDeal from './forms/AddDeal'

const Deals = () => {
    const [isAddNewDealOpen, setAddNewDealOpen] = useState(false);
    const handleAddDealClick = () => {
        setAddNewDealOpen(!isAddNewDealOpen);
    }

    return (
        <>
            <div className='title-header'>
                <h1 className='main-title'>Deals</h1>
                <button className='btn-add-new' onClick={handleAddDealClick}><FontAwesomeIcon icon={faPlus} /><span>Add New</span></button>
            </div>
            <ViewDeals />
            <AddDeal isAddNewDealOpen={isAddNewDealOpen} handleAddDealClick={handleAddDealClick} />
            {isAddNewDealOpen && (
                <div className='backdrop' onClick={handleAddDealClick}></div>
            )}
        </>
    )
}

export default Deals