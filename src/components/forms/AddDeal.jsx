import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarControlContext from '../../context/SidebarControlContext'
import LeadNameSelect from '../formElements/LeadNameSelect'

const AddDeal = () => {

    const { isAddNewOpen, handleAddClick } = useContext(SidebarControlContext)
    return (
        <>
            <aside className={`form ${isAddNewOpen ? '' : 'translate-x-full'}`}>
                <div className="title-header">
                    <h1 className="main-title">Add New Deal</h1>
                    <button className='form-close' onClick={handleAddClick}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <form action="#" className='form-container'>
                    <div className="form-fields">
                        <LeadNameSelect />
                        <label htmlFor="leadName" className="form-label">
                            Lead Name
                        </label>
                    </div>
                    <div className="form-fields">
                        <select id="serviceType" name="serviceType" className="form-select peer" >
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
                            Status
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
                        <button type='button' className='cancel-btn' onClick={handleAddClick}>Cancel</button>
                    </div>
                </form>
            </aside>
        </>
    )
}

export default AddDeal