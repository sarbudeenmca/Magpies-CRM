import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { leadColumns } from '../components/views/ViewLeadColumns'
import React, { createContext, useCallback, useEffect, useMemo, useState, useContext } from 'react'
import MessageModalDataContext from './MessageModalContext';
import axios from '../api/axios'
import { useLocation } from 'react-router-dom';

const DataControlsContext = createContext()

export const DataControlsProvider = ({ children }) => {
    const location = useLocation()

    // State for controlling the number of data rows displayed in the table
    const [dataLength, setDataLength] = useState(5)

    // Function to handle changes in data length
    const handleDataLength = (e) => {
        e.preventDefault()
        setDataLength(e.target.value)
    };

    // Context to check if leads have been updated
    const { datasUpdated, setDatasUpdated } = useContext(MessageModalDataContext)

    // State for holding table data
    const [tableData, setTableData] = useState([])

    // Function to fetch table data based on location
    const fetchTableData = useCallback(async () => {
        try {
            let response
            let pathname = location.pathname;
            if (pathname === '/leads') {
                response = await axios.get(`/api/leads?limit=${dataLength}`)
                setTableData(response.data.leads)
                console.info('LEADS FETCHED')
            } else if (pathname === 'deals') {
                response = await axios.get(`/api/deals?limit=${dataLength}`)
                setTableData(response.data.deals)
                console.info('DEALS FETCHED')
            }
            setDatasUpdated(false)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }, [location.pathname, dataLength, setDatasUpdated])

    // Memoized values for columns and data
    const memorizedColumns = useMemo(() => leadColumns, [])
    const memorizedData = useMemo(() => tableData, [tableData])

    // Fetch data on initial render or when leads have been updated
    useEffect(() => {
        fetchTableData()
    }, [fetchTableData, datasUpdated])

    // Table instance creation
    const tableInstance = useTable(
        {
            columns: memorizedColumns,
            data: memorizedData
        },
        useGlobalFilter,
        useSortBy
    )

    // Destructuring table instance properties
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter: setFilter } = tableInstance
    const { globalFilter: filter } = state

    // Provide context values to children components
    return (
        <DataControlsContext.Provider
            value={{
                dataLength,
                setDataLength,
                handleDataLength,
                filter,
                setFilter,
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow
            }}
        >
            {children}
        </DataControlsContext.Provider>
    )
}

export default DataControlsContext