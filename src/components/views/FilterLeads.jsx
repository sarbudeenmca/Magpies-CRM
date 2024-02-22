import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import FilterDataContext from '../../context/FilterContext'

const FilterLeads = () => {
    const { dataLength, handleDataLength } = useContext(FilterDataContext)
    return (
        <div className='filters'>
            <input type='input' className='search' placeholder='Search' />
            <label className='page-info'><i>Page 1 of 3</i> <FontAwesomeIcon icon={faAngleLeft} className='left-icon' /><FontAwesomeIcon icon={faAngleRight} className='right-icon' /></label>
            <select
                value={dataLength}
                onChange={() => handleDataLength()}
                name="lead_status"
                className="form-select data-length">
                <option value="5">5 rows</option>
                <option value="10">10 rows</option>
                <option value="25">25 rows</option>
                <option value="50">50 rows</option>
                <option value="100">100 rows</option>
            </select>
        </div>
    )
}

export default FilterLeads