import React from 'react'
import Layout from '../layout/Layout'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { closeEmployeePopup, openDeletePopup, openEmployeePopup } from '../../features/popup/popupSlice';

const Employees = () => {
  const employd = useSelector(state => state.employee.employeeDetails);
  // console.log(employd);

  return (
    <div >
      <Layout>

        {
         employd.map((details)=>(
          <EmployeeCard key={details.id} details={details}/>
         ))
        }



      </Layout>

    </div>
  )
}

const EmployeeCard = ({details}) => {
  const dispatch = useDispatch();
  const disAppears = () => {
    dispatch(openDeletePopup());
  }
  const open = () => {
    dispatch(openEmployeePopup());
  }
  // console.log(details);


  return (
    <ul className="list rounded-box bg-[rgb(210, 126, 65)] text-white shadow-md">


      <li className="list-row">
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
        <div>
          <div>{details.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
        </div>
        <p className="list-col-wrap text-xs">
          "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
        </p>
        <button onClick={open} className="btn btn-square btn-ghost text-lg">
          <CiEdit />
        </button>
        <button onClick={disAppears} className="btn btn-square btn-ghost text-lg">
          <MdDeleteOutline />
        </button>
        <button className="btn btn-square btn-ghost">
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
        </button>
      </li>



    </ul>

  )
}

export default Employees
