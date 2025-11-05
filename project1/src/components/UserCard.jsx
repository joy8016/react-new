import React from 'react'
import Button from './Button';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiHeart , CiShare2} from "react-icons/ci";
import { FiMessageCircle,FiMessageSquare } from "react-icons/fi";


const UserCard = () => {
  return (
    <div className='bg-gray-100 w-[20rem] h-[30rem] rounded-2xl overflow-hidden shadow-md m-[10rem]'>
      <div className='relative  bg-blue-400 w-full h-[10rem] '>
        <img className=' border-4 border-blue-400 p-0.5 bg-white absolute translate-x-1/2 translate-y-1/4 h-full rounded-full aspect-square object-cover ' src="https://imgs.search.brave.com/XLxPS86lvCUcLXDMBdC0AdP5YGfywIMaQ_2rHmux0-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/MTE2OTEyNy9waG90/by9oZWFkc2hvdC1v/Zi1jaGVlcmZ1bC1o/YW5kc29tZS1tYW4t/d2l0aC10cmVuZHkt/aGFpcmN1dC1hbmQt/ZXllZ2xhc3Nlcy1p/c29sYXRlZC1vbi1n/cmF5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz15cUFLbUNx/bnBQX1Q4TThJNVZU/S3hlY3JpMXh1dGtY/SDd6ZnlibndWV1BR/PQ " alt="error image" />
      </div>

      <div className='text-center mt-[4rem]'>

        <h1 className='font-bold text-[1.5rem]'>CodingLab</h1>
        <p className='font-medium'>YouTuber & Blogger</p>
        <div className='flex justify-center gap-2.5 text-3xl  pt-3 '>

          <h1 className='text-white bg-blue-900 rounded-full text-[1rem] flex self-center p-2 '><FaFacebookSquare /></h1>

          <h1 className='bg-sky-500 text-white rounded-full text-[1rem] flex self-center p-2'><FaXTwitter /></h1>

          <h1 className='text-white bg-red-600 rounded-full text-[1rem] flex self-center p-2'><FaYoutube /></h1>

          <h1 className='text-white bg-pink-700 rounded-full text-[1rem] flex self-center p-2'> <FaInstagramSquare /></h1>

        </div>

      </div>

      <div>
        <div className='flex justify-center gap-6'>
          <Button text="Subscribe"/>
          <Button text="Message"/>
        </div>
      </div>



      <div className='flex gap-6 justify-center mt-[3.5rem]'>
        <div className='flex items-center text-lg '>
          <CiHeart />
          <span>60.4k</span>
        </div>
        <Line/>
       
        <div className='flex items-center text-lg '>
         <FiMessageSquare />
          <span>60.4k </span>
        </div>
        <Line/>
       
        <div className='flex items-center text-lg '>
         <CiShare2 />
          <span>60.4k</span>
        </div>
       
      </div>




    </div>

   
 
    
  )
}


    
    const Line = () => {
      return (
        <div className='w-[1px] h-[1.6rem] bg-gray-500'></div>
    )
 }
    

export default UserCard
