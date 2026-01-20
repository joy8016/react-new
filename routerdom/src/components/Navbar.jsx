import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();
    const isLoggedIn = true
    // const navigatetohome = () => {
    //     if (isLoggedIn) {
    //         navigate('/about')

    //     }
    //     else{
    //         navigate('/contact')
    //     }

       

    // }

    // const navigatetohome = ()=>{
    //     navigate('/help')
    // }
    const arr = ['a', 'b','c','d'];
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
                {
                    arr.map((item)=>(
                        <div key={item}>
                      <NavLink  to={`/help/${item}` } className={({isActive})=>(
                        isActive?'text-2xl text-green-500 ':""
                      )} >{item}</NavLink>
                     </div>
                    
                    ))
                }

            </div>
            {/* <button onClick={navigatetohome}>navigate to home</button> */}

        </div>
    )
}

export default Navbar
