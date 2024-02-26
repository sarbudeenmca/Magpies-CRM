import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeadDataContext from '../../context/LeadContext'
import React, { useContext, useState } from 'react'
import axios from '../../api/axios'
import MessageModal from '../modals/MessageModal'
import MessageModalDataContext from '../../context/MessageModalContext'

const AddLead = () => {
    const { isAddNewLeadOpen, handleAddLeadClick } = useContext(LeadDataContext)
    const { setIsOpen, setModalTitle, setModalMessage, setMessageType, setLeadsUpdated } = useContext(MessageModalDataContext)

    const [leadName, setLeadName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [leadStatus, setLeadStatus] = useState("")
    const [leadSource, setLeadSource] = useState("")
    const [description, setDescription] = useState("")

    const handleLeadSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            lead_name: leadName,
            company_name: companyName,
            phone_number: phoneNumber,
            mobile_number: mobileNumber,
            email_address: emailAddress,
            city: city,
            country: country,
            lead_status: leadStatus,
            lead_source: leadSource,
            description: description
        }

        try {
            const response = await axios.post('/api/leads', formData);
            setMessageType('message-theme-success');
            setModalTitle('Success')
            setModalMessage(response.data.message)
            setIsOpen(true)
            setLeadName('')
            setCompanyName('')
            setPhoneNumber('')
            setMobileNumber('')
            setEmailAddress('')
            setDescription('')
            setLeadsUpdated(true)

        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                const errors = error.response.data.errors;
                const errorMessage = Object.values(errors).flat().map((error, index) => (
                    <div key={index}>{error}</div>
                )

                );
                setMessageType('message-theme-warning');
                setModalTitle('Validation Error');
                setModalMessage(errorMessage);
            } else {
                // Other errors
                setMessageType('message-theme-error');
                setModalTitle('An error occurred!');
                setModalMessage(error.message);
            }
            setIsOpen(true);
        }

    }

    return (
        <>
            <aside className={`form ${isAddNewLeadOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Lead</h1>
                    <button className='form-close' onClick={handleAddLeadClick}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <form action="" className='form-container' onSubmit={handleLeadSubmit}>
                    <div className="form-fields">
                        <input type="text" id="leadName" value={leadName} onChange={(e) => setLeadName(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="leadName" className="form-label">
                            Lead Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="companyName" className="form-label">
                            Company Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="form-input peer" placeholder=" " />
                        <label htmlFor="mobileNumber" className="form-label">
                            Mobile Number
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="form-input peer" placeholder=" " />
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
                            className="form-select peer"
                            onChange={(e) => setLeadStatus(e.target.value)}
                        >
                            <option value="">-select-</option>
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
                            className="form-select peer"
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
                        <textarea rows="4" id="leadDescription" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input peer" placeholder=" " ></textarea>
                        <label htmlFor="leadDescription" className="textarea form-label">
                            Lead Description
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <button type='submit' className='submit-btn' onClick={handleAddLeadClick}>Submit</button>
                        <button type='button' className='cancel-btn' onClick={handleAddLeadClick}>Cancel</button>
                    </div>
                </form>
            </aside>
            <MessageModal />
        </>
    )
}

export default AddLead