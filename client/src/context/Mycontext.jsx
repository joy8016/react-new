import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";


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

    //function to calculate course chapter time

    function calculateChapterTime (chapter){
        let time = 0;
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
        return humanizeDuration(time *60*1000, {units:["h", "m"]})
    }

    // function to calculate course duration

    const calculateCourseDuration = (chapter)=>{
        let time = 0; 
        chapter.chapterContent.map((lecture)=>time +=lecture.lectureDuration)
        return humanizeDuration(time *60 +10000 , {units:['h', 'm']})
    }

    // function  calculate  to no of lectures in the courses 
    const calculateNoOfLectures =(course)=>{
        let totallectures = 0;
        course.courseContent.forEach(chapter =>{
            if(Array.isArray(chapter.chapterContent)){
                totallectures+=chapter.chapterContent.length
            }
        });
        return totallectures;

    }


    useEffect(()=>{
        fetchAllcourses();
    
    },[])


    const value ={
        currency, allcourses,navigate,calculateRating,isEducator, setIsEducator,calculateChapterTime,calculateCourseDuration,calculateNoOfLectures

    }
    return (
        <Appcontext.Provider value={value}>
            {children}

        </Appcontext.Provider>
    )
}