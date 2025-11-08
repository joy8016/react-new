import Array from './components/Array'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [data, setData] = useState("joydeb maity")
  console.log(data);


  return (
    <>
   
  <Header Data = {data}/>


   <Layout  Data = {data}/>
   <Footer  Data = {data}/>
    </>
  )
}

export default App
