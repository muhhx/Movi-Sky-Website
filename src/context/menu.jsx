import { useEffect, useState, useContext, createContext } from 'react'
import hamOpen from '../assets/ham_open.png'
import hamClose from '../assets/ham_close.png'

const MenuContext = createContext()

export function useMenu() {
    return useContext(MenuContext)
}

export function MenuProvider(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [hamImage, setHamImage] = useState(hamOpen)

    useEffect(() => {
        setHamImage(isOpen === true ? hamClose : hamOpen)
    }, [isOpen])

    function handleMenu() {
        setIsOpen(isOpen === false ? true : false)
    }

    const value = {
        isOpen,
        hamImage,
        handleMenu
    }

    return (
        <MenuContext.Provider value={value}>
            {props.children}
        </MenuContext.Provider>
    )
}