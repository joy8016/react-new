import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

export const AppContextProvider =({children})=>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();

    const [allcourses, setAllcourses] = useState([]);
    const fetchAllcourses =async ()=>{
        setAllcourses(dummyCourses);
    }
    useEffect(()=>{
        fetchAllcourses();
    },[])
    const value ={
        currency, allcourses,navigate

    }
    return (
        <Appcontext.Provider value={value}>
            {children}

        </Appcontext.Provider>
    )
}