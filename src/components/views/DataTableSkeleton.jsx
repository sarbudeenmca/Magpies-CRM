import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './DataTable.css'

const DataTableSkeleton = () => {
    const rowCount = 5;
    return (
        <table className='data-table-skeleton'>
            <thead>
                <tr>
                    <th><Skeleton className='th' /></th>
                    <th><Skeleton className='th' /></th>
                    <th><Skeleton className='th' /></th>
                    <th><Skeleton className='th' /></th>
                    <th><Skeleton className='th' /></th>
                    <th><Skeleton className='th' /></th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: rowCount }).map((_, index) => (
                    <tr>
                        <td><Skeleton className='td' /></td>
                        <td><Skeleton className='td' /></td>
                        <td><Skeleton className='td' /></td>
                        <td><Skeleton className='td' /></td>
                        <td><Skeleton className='td' /></td>
                        <td><Skeleton className='td' /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTableSkeleton