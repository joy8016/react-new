
import './App.css'
import Category from './components/Category'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import News from './pages/News'

function App() {
 

  return (
    <>
    <Navbar className="sticky top-0 z-20"/>
    <Category className="sticky top-14 z-10 bg-red-200 "/>
    <News className="grid grid-cols-4 gap-3 hover:shadow-2xs mt-5 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1"/>
   <Footer className=""/>
    </>
  )
}

export default App
