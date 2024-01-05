import React from 'react'
import './SidebarNavs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faFileInvoice, faFileInvoiceDollar, faFileSignature, faFilter, faLayerGroup, faPhone, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faEnvelope, faFileExcel, faFileLines, faFilePdf, faUser } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'

const SidebarNavs = () => {
    return (
        <>
            <ul className='sidebar-navs'>
                <NavLink to="/" activeClassName='active'>
                    <li>
                        <FontAwesomeIcon icon={faChartArea} className='navicon' /> Dashboard
                    </li>
                </NavLink>
                <NavLink to="/leads" activeClassName='active'>
                    <li>
                        <FontAwesomeIcon icon={faUser} className='navicon' /> Leads
                    </li>
                </NavLink>
                <NavLink to="/deals" activeClassName='active'>
                    <li>
                        <FontAwesomeIcon icon={faFilter} className='navicon' /> Deals
                    </li>
                </NavLink>
                <NavLink to="/accounts" activeClassName='active'>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} className='navicon' /> Accounts
                    </li>
                </NavLink>
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