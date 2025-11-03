import React from 'react'

const UserCard = () => {
  return (
    <div className='bg-gray-100 w-[20rem] h-[30rem] rounded-2xl overflow-hidden'>
        <div className='relative  bg-blue-400 w-full h-[10rem] '>
            <img className=' border-4 border-blue-400 p-0.5 bg-white absolute translate-x-1/2 translate-y-1/4 h-full rounded-full aspect-square object-cover ' src="https://imgs.search.brave.com/XLxPS86lvCUcLXDMBdC0AdP5YGfywIMaQ_2rHmux0-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/MTE2OTEyNy9waG90/by9oZWFkc2hvdC1v/Zi1jaGVlcmZ1bC1o/YW5kc29tZS1tYW4t/d2l0aC10cmVuZHkt/aGFpcmN1dC1hbmQt/ZXllZ2xhc3Nlcy1p/c29sYXRlZC1vbi1n/cmF5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz15cUFLbUNx/bnBQX1Q4TThJNVZU/S3hlY3JpMXh1dGtY/SDd6ZnlibndWV1BR/PQ " alt="error image" />
        </div>

        <div className='text-center mt-[4rem] bg-red-300'>

        <h1 className='font-bold'>CodingLab</h1>
        <p className='font-medium'>YouTuber & Blogger</p>

        </div>

      

      
    </div>
  )
}

export default UserCard
