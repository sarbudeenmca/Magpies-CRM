import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import DataControlsContext from '../../context/DataControlsContext'

const DataControls = () => {
    const { dataLength, handleDataLength, filter, setFilter } = useContext(DataControlsContext)
    return (
        <div className='data-controls'>
            <input type='input' value={filter} onChange={(e) => setFilter(e.target.value)} className='search' placeholder='Search' />
            <label className='page-info'><i>Page 1 of 3</i> <FontAwesomeIcon icon={faAngleLeft} className='left-icon' /><FontAwesomeIcon icon={faAngleRight} className='right-icon' /></label>
            <select
                value={dataLength}
                onChange={handleDataLength}
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

export default DataControls