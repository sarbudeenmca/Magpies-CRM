import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FilterLeads = () => {
    return (
        <div className='filters'>
            <input type='input' className='search' placeholder='Search' />
            <label className='page-info'><i>Page 1 of 3</i> <FontAwesomeIcon icon={faAngleLeft} className='left-icon' /><FontAwesomeIcon icon={faAngleRight} className='right-icon' /></label>
        </div>
    )
}

export default FilterLeads