import { createContext, useContext, useState } from "react";

const context = createContext()

//provider

const MyContextProvider = ({ children }) => {
    const[count, setCount]=useState(0);
    const value ={
        count,
        setCount
    }
    return (
        <context.Provider value={value}>


            {children}
          
        </context.Provider>
        
      

    )
      
}

//usecontext
const useMyContext = () => {
    return useContext(context);
}


export { MyContextProvider,useMyContext }