import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

export const leadColumns = [
    {
        header: 'Lead Name',
        footer: 'Lead Name',
        accessor: 'lead_name',
    },
    {
        header: 'Company',
        footer: 'Company',
        accessor: 'company_name',
    },
    {
        header: 'Telephone',
        footer: 'Telephone',
        accessor: 'phone_number',
        Cell: ({ row }) => (
            <a href={`tel:${row.original.phone_number}`}>
                {row.original.phone_number}
            </a>
        )
    },
    {
        header: 'Email Address',
        footer: 'Email Address',
        accessor: 'email_address',
        Cell: ({ row }) => (
            <a href={`mailto:${row.original.email_address}`}>
                {row.original.email_address}
            </a>
        )
    },
    {
        header: 'Country',
        footer: 'Country',
        accessor: 'country',
    },
    {
        header: 'Status',
        footer: 'Status',
        accessor: 'lead_status',
        Cell: ({ row }) => (
            <div className={row.original.lead_status === 'Active' ? 'active' : 'inactive'}>
                <label>{row.original.lead_status}</label>
            </div>
        )
    },
    // {
    //     header: 'Source',
    //     footer: 'Source',
    //     accessor: 'lead_source'
    // }, {
    //     header: 'Description',
    //     footer: 'Description',
    //     accessor: 'description',
    //     Cell: ({ row }) => (
    //         <div>
    //             {
    //                 row.original.description.length > 10 ? row.original.description.slice(0,10) + '...' : row.original.description
    //             }
    //         </div>
    //     )
    // },
    {
        header: 'Action',
        footer: 'Action',
        accessor: 'id',
        Cell: ({ row }) => (
            <div>
                <button className='edit-icon'><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button className='trash-icon'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        )
    }
];