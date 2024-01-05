import React from 'react'
import './SidebarNavs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faFileInvoice, faFileInvoiceDollar, faFileSignature, faFilter, faLayerGroup, faPhone, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faEnvelope, faFileExcel, faFileLines, faFilePdf, faUser } from '@fortawesome/free-regular-svg-icons'

const SidebarNavs = () => {
    return (
        <>
            <ul className='sidebar-navs'>
                <li className='active'><FontAwesomeIcon icon={faChartArea} className='navicon' /> Dashboard</li>
                <li><FontAwesomeIcon icon={faUser} className='navicon' /> Leads</li>
                <li><FontAwesomeIcon icon={faFilter} className='navicon' /> Deals</li>
                <li><FontAwesomeIcon icon={faBuilding} className='navicon' /> Accounts</li>
                <li><FontAwesomeIcon icon={faFilePdf} className='navicon' /> Quotations</li>
                <li><FontAwesomeIcon icon={faFileSignature} className='navicon' /> Contracts</li>
                <li><FontAwesomeIcon icon={faTicket} className='navicon' /> Support Ticket</li>
                <li><FontAwesomeIcon icon={faFileInvoiceDollar} className='navicon' /> Invoice</li>
                <li><FontAwesomeIcon icon={faPhone} className='navicon' /> Calls</li>
                <li><FontAwesomeIcon icon={faEnvelope} className='navicon' /> Meetings</li>
                <li><FontAwesomeIcon icon={faLayerGroup} className='navicon' /> Tasks</li>
                <li><FontAwesomeIcon icon={faFileLines} className='navicon' /> Lease</li>
                <li><FontAwesomeIcon icon={faFileInvoice} className='navicon' /> AMC</li>
                <li><FontAwesomeIcon icon={faFileExcel} className='navicon' /> Reports</li>
            </ul>
        </>
    )
}

export default SidebarNavs