import { useTable, useSortBy } from 'react-table'
import { leadColumns } from './ViewLeadColumns'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from '../../api/axios';
import { useContext } from 'react';
import MessageModalDataContext from '../../context/MessageModalContext';
import FilterDataContext from '../../context/FilterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import './table.css'

const ViewLeadsTable = () => {

    const { leadsUpdated, setLeadsUpdated } = useContext(MessageModalDataContext)
    const { dataLength } = useContext(FilterDataContext)
    const [leadData, setLeadData] = useState([])

    const fetchLeads = useCallback(async () => {
        try {
            const response = await axios.get(`/api/leads?limit=${dataLength}`)
            setLeadData(response.data.leads)
            setLeadsUpdated(false)
        } catch (error) {
            console.error('Error fetching leads:', error);
            return [];
        }
    }, [setLeadsUpdated, dataLength])

    const memorizedColumns = useMemo(() => leadColumns, [])
    const memorizedData = useMemo(() => leadData, [leadData])

    useEffect(() => {
        fetchLeads();
    }, [fetchLeads, leadsUpdated])


    const tableInstance = useTable({
        columns: memorizedColumns,
        data: memorizedData

    }, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <table {...getTableProps()} className='datatable'>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('header')}
                                    <span className='sortIcon'>{
                                        column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSortUp} />) : <FontAwesomeIcon className='sort-default' icon={faSort} />
                                    }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()} >
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (<td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>)
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
            {/* <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot> */}
        </table>
    )
}

export default ViewLeadsTable