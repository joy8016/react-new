import React, { useContext } from 'react'
import { Appcontext } from '../../context/Mycontext'
import { assets } from '../../assets/assets'

const CoursesList = () => {
  const { navigate } = useContext(Appcontext)
  return (
    <>
      <div>

        <div className='flex bg-red-400 justify-between md:px-30'>
          <div>
            <h1>Course List</h1>
            <p className='text-gray-500'>
              <span onClick={() => navigate('/')} className='text-blue-600 cursor-pointer'>Home</span> /
              <span> Course list</span>
            </p>
          </div>
          <form
            className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
            <img src={assets.search_icon} alt="search-icon" className='md:w-auto w-10 px-3' />

            <input
              type="text " placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' />


            <button type='submit ' className='bg-blue-600 rounded text-white md:px-2 px-7 md:py-1 mx-1'>Search</button>


          </form>

        </div>

      </div>
    </>
  )
}

export default CoursesList
