import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useContext } from "react"
import './MessageModal.css'
import MessageModalDataContext from "../../context/MessageModalContext"
import LeadDataContext from "../../context/LeadContext"

const MessageModal = () => {

    const { handleAddLeadClick } = useContext(LeadDataContext)
    const { isOpen, modalTitle, modalMessage, setIsOpen, messageType } = useContext(MessageModalDataContext)

    function closeModal() {
        setIsOpen(false)
        if (modalTitle !== 'Success') {
            handleAddLeadClick();
        }
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="message-modal-backdrop" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="message-modal-wrap">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="message-modal">
                                    <Dialog.Title as="h3" className={`${messageType} message-modal-title`}>
                                        {modalTitle}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="message-modal-text">
                                            {modalMessage}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button type="button" className="message-modal-btn" onClick={closeModal} >
                                            OK
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default MessageModal