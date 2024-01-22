import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddLead = ({ isAddNewLeadOpen, handleAddLeadClick }) => {
    return (
        <>
            <aside className={`form ${isAddNewLeadOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Lead</h1>
                    <button className='form-close' onClick={handleAddLeadClick}><FontAwesomeIcon icon={faTimes} /></button>
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
                    <div className="form-fields">
                        <input type="text" id="mobileNumber" className="form-input peer" placeholder=" " />
                        <label htmlFor="mobileNumber" className="form-label">
                            Mobile Number
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="emailAddress" className="form-input peer" placeholder=" " />
                        <label htmlFor="emailAddress" className="form-label">
                            Email Address
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="city" className="form-input peer" placeholder=" " />
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="country" className="form-input peer" placeholder=" " />
                        <label htmlFor="country" className="form-label">
                            Country
                        </label>
                    </div>
                    <div className="form-fields">
                        <select
                            id="leadStatus"
                            name="status"
                            className="form-input peer"
                        >
                            <option value="New">New</option>
                            <option value="Potential">Potential</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Dead">Dead</option>
                            <option value="Followup">Followup</option>
                            <option value="Revert">Revert</option>
                        </select>
                        <label htmlFor="leadStatus" className="form-label">
                            Lead Status
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <textarea rows="4" id="leadDescription" className="form-input peer" placeholder=" " ></textarea>
                        <label htmlFor="leadDescription" className="form-label">
                            Lead Description
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <button type='button' className='submit-btn'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={handleAddLeadClick}>Cancel</button>
                    </div>
                </form>
            </aside>
        </>
    )
}

export default AddLead