import { createContext } from "react";

export const UserContext = createContext()



export const UserProvider = ({ children }) => {
    let data = {

    }
    console.log(process.env.REACT_APP_YOUR)

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}