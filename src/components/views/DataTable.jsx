import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import './DataTable.css'
import DataControlsContext from '../../context/DataControlsContext';
import DataTableSkeleton from './DataTableSkeleton';

const DataTable = () => {

    const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow, tableLoading } = useContext(DataControlsContext)

    return (
        <>
            {tableLoading ? (
                <DataTableSkeleton />
            ) : (
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
            )}
        </>
    )
}

export default DataTable