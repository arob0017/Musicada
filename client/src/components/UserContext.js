import { createContext, useContext, useState } from "react"

const UserContext = createContext({})

export const UserProvider = (props) => {
    const [user, setUser] = useState()

    return <UserContext.Provider {...props} value={{ user, setUser }} />
}

export const useUserContext = () => {
    return useContext(UserContext)
}