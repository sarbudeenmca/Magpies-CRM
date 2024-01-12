import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddLead = ({ isAddNewOpen, handleAddClick }) => {
    return (
        <>
            <aside className={`form ${isAddNewOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Lead</h1>
                    <button className='form-close' onClick={handleAddClick}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <form action="#" className='form-container'>
                    <div className="form-fields">
                        <input type="text" id="leadName" className="form-input peer" placeholder=" " />
                        <label htmlFor="leadName" className="form-label">
                            Lead Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="companyName" className="form-input peer" placeholder=" " />
                        <label htmlFor="companyName" className="form-label">
                            Company Name
                        </label>
                    </div>
                </form>
            </aside>
        </>
    )
}

export default AddLead