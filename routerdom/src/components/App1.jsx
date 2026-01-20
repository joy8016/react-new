import Navbar from './components/Navbar'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Home from './components/Home'
import DetailHelp from './components/DetailHelp'
import Detailhelp2 from './components/Detailhelp2'
import A1 from './components/A1'
import A2 from './components/A2'

function App() {
  console.log(window.history)


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
            <Route path='a1' element={<A1/>}/>
            <Route path='a2' element={<A2/>}/>


        </Route>
        <Route path='/contact' element={<Navigate to={'/'} />} />

        <Route path='/Help' element={<Help />} />
        {/* <Route path='/Help' element={<Navigate to={'/about'}/>}/> */}
        <Route path='/Help/:id' element={<DetailHelp />} />

      </Routes>
    </>
  )
}

export default App
