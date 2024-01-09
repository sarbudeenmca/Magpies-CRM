import React from 'react'
import ViewDeals from './views/ViewDeals'

const Deals = () => {
    return (
        <>
            <div className='title-header'>
                <h1 className='main-title'>Deals</h1>
                <button className='btn-add-new'>Add New</button>
            </div>
            <ViewDeals />
        </>
    )
}

export default Deals