import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from '../../api/axios'
import DealDataContext from '../../context/DealContext'

const AddDeal = () => {

    const { isAddNewDealOpen, handleAddDealClick } = useContext(DealDataContext)
    const [selectedLead, setSelectedLead] = useState('');

    const handleChangeLeadName = (e) => {
        setSelectedLead(e.target.value)
    }

    const [leadNames, setLeadName] = useState([])
    //Lead Name fetching

    useEffect(() => {
        const fetchLeadNames = async () => {
            try {
                const response = await axios.get(`/api/leadnames`)
                setLeadName(response.data.leadNames)
                console.info('Lead Names Rendered for Select');
            } catch (error) {
                console.error('Error fetching lead names:', error);
                return [];
            }
        }
        fetchLeadNames();
    }, [])

    return (
        <>
            <aside className={`form ${isAddNewDealOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Deal</h1>
                    <button className='form-close' onClick={handleAddDealClick}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <form action="#" className='form-container'>
                    <div className="form-fields">
                        <select id="leadName" name="leadName" className="form-select peer" value={selectedLead} onChange={handleChangeLeadName}>
                            <option value="">- Select -</option>
                            {leadNames.map(leadName => (
                                <option key={leadName} value={leadName}>{leadName}</option>
                            ))}
                        </select>
                        <label htmlFor="leadName" className="form-label">
                            Lead Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <select id="serviceType" name="serviceType" className="form-input peer" >
                            <option value="">- Select -</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web App Development">Web App Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="SEO">SEO</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                        </select>
                        <label htmlFor="serviceType" className="form-label">
                            Service Type
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="estimatedAmount" className="form-input peer" placeholder=" " />
                        <label htmlFor="estimatedAmount" className="form-label">
                            Estimated Amount
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="date" id="kickOffDate" className="form-input peer" placeholder=" " />
                        <label htmlFor="kickOffDate" className="form-label">
                            Kick-off Date
                        </label>
                    </div>
                    <div className="form-fields">
                        <input type="text" id="city" className="form-input peer" placeholder=" " />
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                    </div>
                    <div className="form-fields">
                        <select id="dealStatus" name="dealStatus" className="form-select peer" >
                            <option value="">- Select -</option>
                            <option value="Hold On">Hold On</option>
                            <option value="RFI">RFI</option>
                            <option value="RFQ">RFQ</option>
                            <option value="Quoted">Quoted</option>
                            <option value="Negotiation">Negotiation</option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                        </select>
                        <label htmlFor="dealStatus" className="form-label">
                            Service Type
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <textarea rows="4" id="followupDescription" className="form-input peer" placeholder=" " ></textarea>
                        <label htmlFor="followupDescription" className="form-label">
                            Followup Description
                        </label>
                    </div>
                    <div className="form-fields col-span-2">
                        <button type='button' className='submit-btn'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={handleAddDealClick}>Cancel</button>
                    </div>
                </form>
            </aside>
        </>
    )
}

export default AddDeal