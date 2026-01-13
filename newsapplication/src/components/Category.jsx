import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { useContexthook } from '../context/Mycontext';
import C from '../../../stateManagement/src/components/C';

const Category = ({ className }) => {
   

 
    const {setNews, fetchNews}=useContexthook()
    const catagory = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

    const hadleclick =async(e)=>{
        const cat = e.target.value;
     
            const data = await fetchNews(`/everything?q=${cat}`)
            // console.log(data)
            setNews(data.articles)
        
    }
    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className={` scrollbar-none w-fit   max-w-full m-auto flex gap-4 py-10  overflow-x-auto px-3`} >
                    {
                        catagory.map((item) => (
                            <button 
                            onClick={hadleclick} 
                            key={item}
                            value={item}
                             className="btn btn-error">{item}</button>


                        ))
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Category
