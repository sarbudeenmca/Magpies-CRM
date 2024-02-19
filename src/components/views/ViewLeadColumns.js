import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

export const leadColumns = [
    {
        header: 'Lead Name',
        accessor: 'lead_name',
        Cell: ({ row }) => (
            <div>
                {row.original.lead_name}
                <br />
                <a href={`tel:${row.original.mobile_number}`}>{row.original.mobile_number}</a>
            </div>
        )
    },
    {
        header: 'Company',
        accessor: 'company_name',
        Cell: ({ row }) => (
            <div>
                {row.original.company_name}
                <br />
                <a href={`mailto:${row.original.email_address}`}>{row.original.email_address}</a>
            </div>
        )
    },
    {
        header: 'Country',
        accessor: 'country'
    },
    {
        header: 'Status',
        accessor: 'lead_status',
        Cell: ({ row }) => (
            <div className={row.original.lead_status === 'Active' ? 'active' : 'inactive'}>
                <label>{row.original.lead_status}</label>
            </div>
        )
    },
    {
        header: 'Action',
        accessor: 'id',
        Cell: ({ row }) => (
            <div>
                <button className='edit-icon'><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button className='trash-icon'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        )
    }
];

// export const leadColumns = [
//     {
//         header: 'Id',
//         accessor: 'id'
//     },
//     {
//         header: 'Lead Name',
//         accessor: 'lead_name'
//     },
//     {
//         header: 'Company Name',
//         accessor: 'company_name'
//     },
//     {
//         header: 'Phone',
//         accessor: 'phone_number'
//     },
//     {
//         header: 'Mobile',
//         accessor: 'mobile_number'
//     },
//     {
//         header: 'Email',
//         accessor: 'email_address'
//     },
//     {
//         header: 'City',
//         accessor: 'city'
//     },
//     {
//         header: 'Country',
//         accessor: 'country'
//     },
//     {
//         header: 'Lead Status',
//         accessor: 'lead_status'
//     },
//     {
//         header: 'Lead Source',
//         accessor: 'lead_source'
//     },
//     {
//         header: 'Description',
//         accessor: 'description'
//     }
// ]