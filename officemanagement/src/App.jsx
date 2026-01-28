
import { useDispatch } from 'react-redux'
import './App.css'
import DeletePopup from './components/deletepopup/DeletePopup'
import EmployeePopup from './components/employeepopup/EmployeePopup'
import Employees from './components/employees/Employees'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useEffect } from 'react'
import {getdetails} from './features/employee/asyncThunck'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getdetails());

  },[])

  


  return (
    <>

    <div className='min-h-screen w-full flex flex-col'>
      <EmployeePopup/>
      <DeletePopup/>
      <Navbar/>
      <div className='flex-1 py-10'>
        <Employees/>
      </div>

      <Footer/>
      
    </div>
   
    </>
  )
}

export default App
