import { createContext, useState } from "react";


const DealDataContext = createContext()

export const DealDataProvider = ({ children }) => {

    const [isAddNewDealOpen, setAddNewDealOpen] = useState(false);
    const handleAddDealClick = () => {
        setAddNewDealOpen(!isAddNewDealOpen);
        console.log("clicked Add New");
    }

    <DealDataContext.Provider value={{ isAddNewDealOpen, setAddNewDealOpen, handleAddDealClick }}>
        {children}
    </DealDataContext.Provider>
}

export default DealDataContext
