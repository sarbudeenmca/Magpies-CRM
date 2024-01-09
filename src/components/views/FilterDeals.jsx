import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const FilterDeals = () => {
    return (
        <div className='filters'>
            <input type='input' className='search' placeholder='Search' />
            <label className='page-info'><i>Page 1 of 3</i> <FontAwesomeIcon icon={faAngleLeft} className='left-icon' /><FontAwesomeIcon icon={faAngleRight} className='right-icon' /></label>
        </div>
    )
}

export default FilterDeals