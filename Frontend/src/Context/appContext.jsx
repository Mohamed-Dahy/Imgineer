import { createContext , useState } from "react";

export const AppContext = createContext()

const AppContextProvider =(props)=>{
    const [user,setUser] = useState(false);
    const [showLogin,setShowlogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'));
    const [credit,setCredit] = useState(false);

const backendURL = import.meta.env.VITE_BACKEND_URL;


    const value = {
        user , setUser , showLogin , setShowlogin , backendURL,token,setToken,credit,setCredit
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;