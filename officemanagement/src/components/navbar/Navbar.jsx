import React from 'react'
import Layout from '../layout/Layout'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {  openEmployeePopup } from '../../features/popup/popupSlice';

const Navbar = () => {
 
  const dispatch = useDispatch();
  const appears =()=>{
    dispatch(openEmployeePopup())
  }

  return (
    <div className='bg-red-300  sticky top-0 z-10'>
      <Layout>
        <div className="navbar">

          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Employee</a>
          </div>
          <div className="navbar-end">
            <button onClick={appears} className="btn btn-ghost btn-circle text-lg">
              <FaPlus />
            </button>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </button>
          </div>
        </div>

      </Layout>
    </div>
  )
}

export default Navbar
