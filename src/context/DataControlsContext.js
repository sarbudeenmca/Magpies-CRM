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

    //DataTable Instance Props
    const { leadsUpdated, setLeadsUpdated } = useContext(MessageModalDataContext)
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

    }, useGlobalFilter, useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter: setFilter } = tableInstance
    const { globalFilter: filter } = state

    return (
        <DataControlsContext.Provider value={{ dataLength, setDataLength, handleDataLength, filter, setFilter, getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }}>
            {children}
        </DataControlsContext.Provider>
    )
}

export default DataControlsContext