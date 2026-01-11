import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    const response = await axios("https://fakestoreapi.com/products")
    setProducts(response.data)
    setLoader(false)
  }
  console.log(products);


  useEffect(() => {
    fetchData()
  }, [])



  if (loader) return <Loader />


  return (
    <div className='grid grid-cols-5 gap-4 p-6 max-[900px]:grid-cols-4 max-[600px]:grid-cols-3 max-[450px]:grid-cols-2'>

      {
        products.map((items) => (
          <ProductCard key={items.id} items={items} />


        ))
      }

    </div>
  )
}

const ProductCard = ({ items }) => {
  const navigate = useNavigate()
  return (
    <div className='group'>
      <div onClick={() => (
        navigate(`/products/${items.id}`)
      )} key={items.id} className="  bg-gray-800 rounded-lg">
        <img className='aspect-square object-contain p-4   transition-all hover:scale-90 duration-400 ' src={items.image} alt="" />
        <div className='p-2'>
          <h1 className='text-2xl line-clamp-2 hover:text-blue-600' >{items.title}</h1>

          <div className='flex gap-3 py-3'>
            <p className=' bg-yellow-900 rounded-lg px-1'><span className='text-[20px]'>⭐</span><span className=' p-1 rounded-lg '>{items.rating.rate}</span></p>
            <p className='text-[1.1em]'><span className='bg-red-400'>{items.rating.count}</span></p>
          </div>
          <p className='text-[1.4rem] text-gray-400 font-medium'>${items.price}</p>

        </div>

      </div>
    </div>
  )
}

export default Products
