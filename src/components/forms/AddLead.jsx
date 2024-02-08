import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeadDataContext from '../../context/leadContext'
import React, { useContext, useState } from 'react'
import axios from 'axios'

const AddLead = () => {
    const { isAddNewLeadOpen, handleAddLeadClick } = useContext(LeadDataContext)

    const [leadName, setLeadName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [phonNumber, setPhoneNumber] = useState("")
    const [mobilNumber, setMobileNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [leadStatus, setLeadStatus] = useState("")
    const [leadSource, setLeadSource] = useState("")
    const [descrption, setDescription] = useState("")

    const handleLeadSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/leads', { leadName, companyName, phonNumber, mobilNumber, emailAddress, city, country, leadStatus, leadSource, descrption });
            console.log(response.message);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <aside className={`form ${isAddNewLeadOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Lead</h1>
                    <button className='form-close' onClick={handleAddLeadClick}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <form action="#" className='form-container' onSubmit={handleLeadSubmit}>
                    <div className="form-fields">
                        <input type="text" id="leadName" onChange={(e) => setLeadName(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="leadName" className="form-label">
                            Lead Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="companyName" onChange={(e) => setCompanyName(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="companyName" className="form-label">
                            Company Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="mobileNumber" onChange={(e) => setMobileNumber(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="mobileNumber" className="form-label">
                            Mobile Number
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="emailAddress" onChange={(e) => setEmailAddress(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="emailAddress" className="form-label">
                            Email Address
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="city" onChange={(e) => setCity(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="country" onChange={(e) => setCountry(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="country" className="form-label">
                            Country
                        </label>
                    </div>
                    <div className="form-fields">
                        <select
                            id="leadStatus"
                            name="lead_status"
                            className="form-input peer"
                            onChange={(e) => setLeadStatus(e.target.value)}
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
                        <select
                            id="leadSource"
                            name="lead_source"
                            className="form-input peer"
                            onChange={(e) => setLeadSource(e.target.value)}
                        >
                            <option value="">-select-</option>
                            <option value="Google">Google</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Cold Call">Cold Call</option>
                            <option value="Networking Event">Networking Event</option>
                            <option value="Trade Show">Trade Show</option>
                            <option value="Website">Website</option>
                        </select>
                        <label htmlFor="leadSource" className="form-label">
                            Lead Source
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <textarea rows="4" id="leadDescription" onChange={(e) => setDescription(e.target.value)} className="form-input peer" placeholder=" " ></textarea>
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