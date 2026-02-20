import { createContext , useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider =(props)=>{
    const [user,setUser] = useState(false);
    const [showLogin,setShowLogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'));
    const [credit,setCredit] = useState(false);
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate()
    const loadCreditData = async()=>{
        try {
            const {data} = await axios.get(backendURL + '/api/user/credits',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
            )
            if(data.success){
                setCredit(data.creditBalance);
                setUser(data.user);
            }
            
        } catch (error) {
            console.error("Error fetching user credits:", error);
           toast.error("Error fetching user credits");
        }
    }

    const generateImage = async(prompt)=>{
        try {
           const {data} = await axios.post(backendURL + '/api/image/generate-image',{prompt},{headers :{
                Authorization : `Bearer ${token}`
            } })
            if(data.success){
                await loadCreditData()
                if(data.creditBalance === 0){
                    toast.info("Credits exhausted! Please buy more credits.");
                    setTimeout(() => navigate('/buy-credits'), 1000)
                    return null
                }
                return data.resultImage
            }else{
                toast.error(data.message || "Error generating image");
                const creditBal = data.creditBalance !== undefined ? data.creditBalance : 0;
                if(creditBal <= 0){
                    toast.info("No credits available. Redirecting to buy credits...");
                    setTimeout(() => navigate('/buy-credits'), 1000)
                } else {
                    await loadCreditData();
                }
            }
        } catch (error) {
            console.error("Error generating image:", error);
           toast.error("Error generating image");
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setUser(false);
        setToken('');        
        toast.success("Logged out successfully");
    }

    useEffect(()=>{
        if(token){
            loadCreditData();
        }
    },[token])

    const value = {
        user , setUser , showLogin , setShowLogin , backendURL,token,setToken,credit,setCredit,loadCreditData,logout,generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;