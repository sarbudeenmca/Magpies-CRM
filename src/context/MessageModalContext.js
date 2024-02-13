import { createContext, useState } from "react"

const MessageModalDataContext = createContext()

export const MessageModalDataProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalMessage, setModalMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    return (
        <MessageModalDataContext.Provider value={{ isOpen, setIsOpen, modalTitle, setModalTitle, modalMessage, setModalMessage, messageType, setMessageType }}>
            {children}
        </MessageModalDataContext.Provider>
    )
}

export default MessageModalDataContext