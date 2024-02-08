import { useState, createContext } from "react";

const LeadDataContext = createContext({})

export const LeadDataProvider = ({ children }) => {

    const [isAddNewLeadOpen, setAddNewLeadOpen] = useState(false);
    const handleAddLeadClick = () => {
        setAddNewLeadOpen(!isAddNewLeadOpen);
    }

    <LeadDataContext.Provider value={{ isAddNewLeadOpen, handleAddLeadClick }} >
        {children}
    </LeadDataContext.Provider>
}

export default LeadDataContext