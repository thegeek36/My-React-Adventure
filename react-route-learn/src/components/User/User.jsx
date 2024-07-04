import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-neutral-600 text-white p-5 text-3xl rounded-md hover:underline'>User: {id}</div>
  )
}

export default User