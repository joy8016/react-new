import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext, AppContextProvider } from '../../context/Mycontext'
import Coursecard from './Coursecard'

const CourseSection = () => {
  const {allcourses}=useContext(Appcontext)
  return (
    <div className='py-16 md:px-40 px-8 '>
      <h2 className='text-3xl font-medium text-gray-800'>Learn form the best</h2>

      <p className='text-sm md:text-base text-gray-500 mt-3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus odit adipisci provident accusamus voluptates, beatae mollitia? Vitae, itaque explicabo?</p>


    {/* mounting the course card */}
      <div className='grid grid-cols-1 gap-4 px-4 md:px-0 md:my-16 my-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {allcourses.slice(0,4).map((course,index)=><Coursecard key={index} course={course}/>)}
      </div>



      <Link to={'./course-list'} onClick={() => { scrollTo(0, 0) }} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded   '>Show all courses</Link>
    </div>
  )
}

export default CourseSection
