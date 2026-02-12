import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

export const AppContextProvider =({children})=>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();

    const [allcourses, setAllcourses] = useState([]);
    const[isEducator, setIsEducator]=useState(true);

    const fetchAllcourses =async ()=>{
        setAllcourses(dummyCourses);
       

    }
  

    // only for testimonials section

 

    //function to calculate average raigng of course
    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach (rating =>{
            totalRating+=rating.rating;
        })
        return totalRating /course.courseRatings.length
    }


    useEffect(()=>{
        fetchAllcourses();
    
    },[])


    const value ={
        currency, allcourses,navigate,calculateRating,isEducator, setIsEducator

    }
    return (
        <Appcontext.Provider value={value}>
            {children}

        </Appcontext.Provider>
    )
}