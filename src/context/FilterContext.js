import { createContext, useState } from "react"

const FilterDataContext = createContext()

export const FilterDataProvider = ({ children }) => {
    const [dataLength, setDataLength] = useState(5)
    const handleDataLength = (e) => {
        e.preventDefault()
        setDataLength(e.target.value)
    }
    return (
        <FilterDataContext.Provider value={{ dataLength, setDataLength, handleDataLength }}>
            {children}
        </FilterDataContext.Provider>
    )
}

export default FilterDataContext