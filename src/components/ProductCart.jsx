import React from 'react'

export default function ProductCart( {product}) {
  return (
    <div  className='p-4 w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5 shadow-2xl '>
        <div className=' flex flex-col items-center'>
            <img className='aspect-square' src={product.image} alt={product.title} />
            <span className='text-slate-400 mt-4'>{product.category}</span>
            <span className='text-slate-700 text-xl hover:text-red-500 transition-colors'>{product.title}</span>
            <div>
                <span className='text-slate-950'>{ product.price.toLocaleString()}</span>
                <span className='text-slate-950'>  تومان  </span>
            </div>
        </div>
    </div>
  )
}
