import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import Select from 'react-select';

const LeadNameSelect = () => {
    const [selectedLeadName, setSelectedLeadName] = useState('')
    const [leadNames, setLeadNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //Lead Name fetching
    useEffect(() => {
        const fetchData = async (input) => {
            try {
                const response = await axios.get(`/api/leadnames`, {
                    params: { keyword: input }
                })
                const leadNames = response.data.leadNames.map(lead => ({
                    value: lead.id,
                    label: lead.lead_name
                }))
                // return leadNames
                setLeadNames(leadNames)
            } catch (error) {
                console.error('Error fetching lead names:', error)
                return []
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()
    }, [])

    const handleChangeLeadName = (selectedOption) => {
        setSelectedLeadName(selectedOption)
    }

    const loadOptions = (input) => {
        return leadNames.filter(option =>
            option.label.toLowerCase().includes(input.toLowerCase())
        );
    };

    return (
        <Select
            className="react-form-select peer"
            id="leadName"
            name="leadName"
            value={selectedLeadName}
            onChange={handleChangeLeadName}
            options={leadNames}
            isClearable={true}
            placeholder={isLoading ? "Loading..." : "Type to search leads"}
            isSearchable={!isLoading}
            isLoading={isLoading}
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    background: 'transparent',
                    border: 'none',
                }),
            }}
            classNames={{
                control: (state) =>
                    state.isFocused ? 'border-red-600' : 'border-grey-300',
            }}
        />
    )
}

export default LeadNameSelect