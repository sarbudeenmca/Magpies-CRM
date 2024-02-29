import { useState, createContext } from "react";

const SidebarControlContext = createContext()

export const SidebarControlProvider = ({ children }) => {

    const [isAddNewOpen, setAddNewOpen] = useState(false);
    const handleAddClick = () => {
        setAddNewOpen(!isAddNewOpen);
    }

    return (
        <SidebarControlContext.Provider value={{ isAddNewOpen, handleAddClick }} >
            {children}
        </SidebarControlContext.Provider>
    )
}

export default SidebarControlContext