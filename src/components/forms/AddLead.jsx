import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddLead = () => {
    return (
        <aside className='form'>
            <div className="title-header">
                <h1 className="main-title">Add New Lead</h1>
                <button className='form-close'><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <form action="#">
                <div className="form-container">
                    <div className="form-fields w-3/6">
                        <label htmlFor="leadName" className="form-label"></label>
                        <input type="text" className="form-input" id="leadName" />
                    </div>
                </div>
            </form>
        </aside>
    )
}

export default AddLead