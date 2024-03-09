import React, { useState } from 'react'
import axios from '../../api/axios'
import Select from 'react-select';

const LeadNameSelect = () => {
    const [selectedLeadName, setSelectedLeadName] = useState('')
    const [options, setOptions] = useState([])

    const handleChangeLeadName = (selectedLeadName) => {
        setSelectedLeadName(selectedLeadName)
    }

    //Lead Name fetching
    const fetchLeadNames = async (input) => {
        try {
            const response = await axios.get(`/api/leadnames`, {
                params: { keyword: input }
            })
            const leadNames = response.data.leadNames.map(lead => ({
                value: lead.id,
                label: lead.lead_name
            }))
            return leadNames
        } catch (error) {
            console.error('Error fetching lead names:', error)
            return []
        }
    }

    return (
        <Select
            id="leadName"
            name="leadName"
            className="form-select peer"
            value={selectedLeadName}
            onChange={handleChangeLeadName}
            loadOptions={fetchLeadNames}
            onInputChange={(inputValue) => {
                return fetchLeadNames(inputValue); // Ensure fetchLeadNames is called with the input value
            }}
            isClearable={true}
            placeholder="Type to search leads"
            isSearchable
        />
    )
}

export default LeadNameSelect