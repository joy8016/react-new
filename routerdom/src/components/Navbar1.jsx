import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

const Navbar1 = () => {

  
  
    return (
        <div className='select-none'>
            <div style={{ backgroundColor: 'lightseagreen', display: 'flex', gap: '30px' }}>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? ' text-2xl' : ""



                }>Home</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? 'text-2xl ' : ""
                }>Contact</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'text-2xl' : ""
                }>About</NavLink>
                <NavLink to="/help" className={({ isActive }) =>
                    isActive ? 'text-2xl' : ""
                }>Help</NavLink>


            </div>
        </div>
    )
}

export default Navbar1

