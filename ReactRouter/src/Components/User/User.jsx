import React from 'react'
import {useParams} from 'react-router-dom';

export default function User() {

  const {userid}=useParams()

  return (
       <>
        <h1 className='text-center text-4xl p-6 bg-gray-300 '> User :{userid} </h1>
    </>
  )
}
