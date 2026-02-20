import React, { useState } from 'react'

export default function card() {

  const [color,setcolor]=useState("red");

  return (
    <>
        

       <div className='w-full h-full max-h-80 bg-green-500   '>
          <button className='bg-red-500 border-2 border-solid ' > Red </button>
          <button className=' bg-green-500 border-solid color-green ' > Green </button>
          <button className=' bg-blue-500  border-2 border-solid '> Blue </button>
          <button className=' bg-yellow-500  border-solid ' > Yellow </button>
          <button className=' bg-black-100  border-2 border-solid '> Black </button>
          <button className=' bg-white-500  border-solid  '> White </button>
       </div>


    </>
  )
}
