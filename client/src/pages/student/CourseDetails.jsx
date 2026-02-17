import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../../context/Mycontext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCoursedata] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const { allcourses, calculateRating, calculateChapterTime, calculateCourseDuration, calculateNoOfLectures } = useContext(Appcontext);
  const fetchCoursesData = async () => {
    const findCourse = allcourses.find(course => course._id === id);
    setCoursedata(findCourse);
  }

  useEffect(() => {
    fetchCoursesData();
  }, [])

  const toggleSection =(index)=>{
    setOpenSection((prev)=>({
      ...prev, 
      [index]:!prev[index]
    }))

  }


  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 text-left  bg-linear-to-b from-cyan-100/70'>

        <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-red-800'>


        </div>

          {/* left column */}
          <div className='max-w-xl z-10 text-gray-500'>
            <h1 className='md:text-2xl text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
            <p className='pt-4 md:text-base text-sm'
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>


            {/* review and ratings */}
            <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
              <p>{calculateRating(courseData)}</p>
              <div className='flex'>
                {[...Array(5)].map((_, index) => (<img key={index} src={index < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5' />))}
              </div>
              <p className='text-blue-500'>({courseData.courseRatings.length}{courseData.courseRatings.length > 1 ? ' ratings' : ' rating'})</p>

              <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? ' students' : ' student'}</p>



            </div>

            <p className='text-sm'>Course by <span className='underline text-blue-500'> Joy</span></p>

            <div className='pt-8 text-gray-800'>
              <h1 className='text-xl font-semibold'>Course Structure</h1>
              <div className='pt-5' >
                {
                  courseData.courseContent.map((chapter, index)=>(
                    <div key={index} className='border border-gray-300 bg-red-300 mb-2 rounded '>
                      <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=>toggleSection(index)}>
                        <div className='flex items-center gap-2'>
                          <img src={assets.down_arrow_icon} alt="arrow icon" />
                          <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                        </div>

                        <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures-{calculateChapterTime(chapter)}</p>
                      </div>


                      <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0'} `}>

                        <ul className='list-disc md:pl-10 pl-4 py-2 pr-4 text-gray-600 border-t border-gray-300'>
                          {chapter.chapterContent.map((lecture, i)=>(
                            <li key={i} className='flex items-start gap-2 py-1'>
                              <img src={assets.play_icon} alt="play button" className='w-4 h-4 mt-1' />


                              <div className='flex items-center justify-between w-full text-gray-800text-xs md:text-default'>
                                <p>{lecture.lectureTitle}</p>

                                <div className='flex gap-2'>
                                  {lecture.isPreviewFree && <p className='text-blue-600 cursor-pointer select-none'>Preview</p>}
                                  <p>{humanizeDuration(lecture.lectureDuration*60*1000 , {units:["h", "m"]})}</p>
                                </div>
                              </div>

                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                  ))
                }
              </div>

            </div>


          </div>



          {/* right column */}
          <div></div>
       
      </div>
    </>

  ) : <Loading />
}

export default CourseDetails
