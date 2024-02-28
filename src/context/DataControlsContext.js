import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { leadColumns } from '../components/views/ViewLeadColumns'
import React, { createContext, useCallback, useEffect, useMemo, useState, useContext } from 'react'
import MessageModalDataContext from './MessageModalContext';
import axios from '../api/axios'

const DataControlsContext = createContext()

export const DataControlsProvider = ({ children }) => {

    //DataTable Length Props
    const [dataLength, setDataLength] = useState(5)
    const handleDataLength = (e) => {
        e.preventDefault()
        setDataLength(e.target.value)
    }

    //Check Lead updated status for re-render table after form submission
    const { leadsUpdated, setLeadsUpdated } = useContext(MessageModalDataContext)

    //change state for tableData once data is fetched
    const [tableData, setTableData] = useState([])

    //data fetching
    const fetchTableData = useCallback(async () => {
        try {
            const response = await axios.get(`/api/leads?limit=${dataLength}`)
            setTableData(response.data.leads)
            setLeadsUpdated(false)
            console.info('Lead Rendered');
        } catch (error) {
            console.error('Error fetching leads:', error);
            return [];
        }
    }, [setLeadsUpdated, dataLength])

    //memorize for avoid unnecessary re-renders
    const memorizedColumns = useMemo(() => leadColumns, [])
    const memorizedData = useMemo(() => tableData, [tableData])

    //initial fetching
    useEffect(() => {
        fetchTableData();
    }, [fetchTableData, leadsUpdated])

    //Table instance
    const tableInstance = useTable({
        columns: memorizedColumns,
        data: memorizedData

    }, useGlobalFilter, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter: setFilter } = tableInstance
    const { globalFilter: filter } = state

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
            }}>
            {children}
        </DataControlsContext.Provider>
    )
}

export default DataControlsContext