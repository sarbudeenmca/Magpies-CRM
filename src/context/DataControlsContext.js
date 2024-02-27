import { createContext, useState } from "react"

const DataControlsContext = createContext()

export const DataControlsProvider = ({ children }) => {
    const [dataLength, setDataLength] = useState(5)
    const handleDataLength = (e) => {
        e.preventDefault()
        setDataLength(e.target.value)
    }
    return (
        <DataControlsContext.Provider value={{ dataLength, setDataLength, handleDataLength }}>
            {children}
        </DataControlsContext.Provider>
    )
}

export default DataControlsContext