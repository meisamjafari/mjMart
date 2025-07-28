import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCart( {product}) {

const [changeSRC ,setChangeSRC] = useState(0)


  return (
    <div  className='p-4 w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/6 shadow-2xl flex'>
        <div className=' flex flex-col items-center '>
           <Link to={`/products/${product.id}`}> <img onMouseEnter={()=>{setChangeSRC(prev => prev == 0 ? 1 : 0)}} onMouseLeave={()=>{setChangeSRC(prev => prev == 0 ? 1 : 0)}} className='aspect-square ' src={product.images[changeSRC]} alt={product.title} /></Link>
            <span className='text-slate-400 mt-4'>{product.category.name}</span>
          <Link to={`/products/${product.id}`}>  <span className= 'block text-slate-700 text-l py-5 hover:text-red-500 transition-colors'>{product.title}</span></Link>
            <div className='mt-auto'>
                <span className='text-slate-950'>{ product.price.toLocaleString()}</span>
                <span className='text-slate-950'>  تومان  </span>
            </div>
        </div>
    </div>
  )
}
