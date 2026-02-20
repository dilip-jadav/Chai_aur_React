import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

export default function Github() {

  // const data=useLoaderData();

  const [data,setData]=useState([]); 
  
  useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response=> response.json())
    .then(data=>{
      console.log(data);
      setData(data);
    })

  },[])

  return (
    <>
          <div className='text-center text-4xl p-6 bg-gray-300'> Github Followers :{data.followers} 

          <img src={data.avatar_url} alt="Git Pitcure" width={300} />
          </div>
    </>
  )
}

// export const githubinfoloader = async ()=>{
//     const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json

// }
