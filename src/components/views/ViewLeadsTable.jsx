import { useTable } from 'react-table'
import { leadColumns } from './ViewLeadColumns'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from '../../api/axios';

const ViewLeadsTable = () => {

    const [leadData, setLeadData] = useState([])

    const fetchLeads = useCallback(async () => {
        try {
            const response = await axios.get('/api/leads')
            console.log("Data:", response.data.leads)
            setLeadData(response.data.leads)
        } catch (error) {
            console.error('Error fetching leads:', error);
            return [];
        }
    }, [])

    const memorizedColumns = useMemo(() => leadColumns, [])
    const memorizedData = useMemo(() => leadData, [leadData])
    useEffect(() => {
        fetchLeads();
    }, [fetchLeads])


    const tableInstance = useTable({
        columns: memorizedColumns,
        data: memorizedData

    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table {...getTableProps()} className='datatable'>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} >
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
}

export default ViewLeadsTable