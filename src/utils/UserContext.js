import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:'Nandan',
    setLoggedInUser:()=>{}
})

export default UserContext;