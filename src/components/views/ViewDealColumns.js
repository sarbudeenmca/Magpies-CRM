import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

export const dealColumns = [
    {
        header: 'Lead Name',
        footer: 'Lead Name',
        accessor: 'lead_name',
    },
    {
        header: 'Service Type',
        footer: 'Service Type',
        accessor: 'service_type',
    },
    {
        header: 'Estimated Amount',
        footer: 'Estimated Amount',
        accessor: 'estimated_price',
        Cell: ({ row }) => (
            <div className='text-right pr-16'>
                {row.original.estimated_price}
            </div>
        )

    },
    {
        header: 'Kick Off Date',
        footer: 'Kick Off Date',
        accessor: 'kick_off_date'
    },
    {
        header: 'Status',
        footer: 'Status',
        accessor: 'status',
    },
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