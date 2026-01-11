import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='text-2xl flex gap-16 bg-[#4d50516c]  py-3 px-8  '>
                <div className='flex gap-8'>
                   <Menu to={'/'} title={'Home'}/>
                   <Menu to={'/products'} title={'Products'}/>
                   
                </div>
            </div>

        </>
    )
}

const Menu= ({to,title})=>{
return(
    <NavLink to={to} className={({isActive})=>(
        isActive ? 'text-red-500 ' : ' '
    )}>{title}</NavLink>
)
}

export default Navbar
