import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../../context/Mycontext'
import { assets } from '../../assets/assets'
import Search from '../../components/student/Search'
import Coursecard from '../../components/student/Coursecard'
import { useNavigate, useParams } from 'react-router-dom'

const CoursesList = () => {
  const { allcourses } = useContext(Appcontext)
  const { input } = useParams("");

  const [filteredCourse, setFilteredCourse] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    if (allcourses && allcourses.length > 0) {
      const tempCourses = allcourses.slice();

      input ?
        setFilteredCourse(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
        : setFilteredCourse(tempCourses)
    }
  },[allcourses,input])
  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left '>

        <div className='flex   items-start md:flex-row flex-col gap-6 w-full justify-between md:px-30'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> /
              <span className='cursor-pointer' onClick={()=>navigate('/course-list' )}> Course list</span>
            </p>
          </div>
          <Search data={input} />
         
        </div>
         {
            input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-800'>
              <p>{input}</p>
              <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=>navigate('/course-list')} />
             
            </div>
            
          }

        {/* showing card list of courses */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredCourse.map((course, index) => <Coursecard key={index} course={course} />)}

        </div>

      </div>
    </>
  )
}

export default CoursesList
