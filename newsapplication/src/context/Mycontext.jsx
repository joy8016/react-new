import { createContext, useContext, useState, useEffect } from "react";
import api from "../axiosinstance/api";

const Newscontext = createContext()




//context provider

const NewscontextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const[loader,setLoader]=useState(false);




    const fetchNews = async (url = "/everything?q=india") => {
        try {
            setLoader(true)

            const response = await api.get(`${url}&apiKey=ec54f364b7974040b40a541aac480630`)
            setLoader(false)
            return response.data
        } catch (error) {
            setLoader(true)
            console.log(error)
            setLoader(false)

        }
    }
    const value = {
        news,
        setNews,
        fetchNews,
        loader,
        setLoader
    }




    return (
        <Newscontext.Provider value={value}>
            {
                children
            }

        </Newscontext.Provider>
    )

}

//use context hook

const useContexthook = () => {
    return useContext(Newscontext);
}

export { useContexthook, NewscontextProvider }

