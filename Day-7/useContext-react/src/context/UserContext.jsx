//user data
//step-1 : create a context using createContext()

import { createContext,useState } from "react";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    console.log(children)
    const [name,setName] = useState("chandra")
    return (
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}



