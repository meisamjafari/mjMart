import React, { useState } from 'react'

export default function Pagination({items=[],itemsPerPage=3,renderItems}) {

    const [currentPage ,setCurrentPage]=useState(1)

    const totalPages = Math.ceil((items.length)/itemsPerPage)

    const startIndex = (currentPage-1)*itemsPerPage

    const endIndex = startIndex + itemsPerPage 

    const currentItems = items.slice(startIndex,endIndex)



  return (
    <div className=''>
        <div className="flex flex-wrap gap-4 justify-center">
            {renderItems(currentItems)}
        </div>
        <div className="flex justify-center mt-6 gap-2">
            {Array.from({length:totalPages}).map((_,index)=>{
                return (
                    <button key={index+1} onClick={()=>setCurrentPage(index+1) } className={` p-6 ${ currentPage === index+1 ? 'bg-red-600' : 'bg-slate-400'} `}>
                        {index +1}
                    </button>
                )
            }) }
        </div>
    </div>
  )
}
