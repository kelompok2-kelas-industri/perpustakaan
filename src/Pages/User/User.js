import { axios } from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function User() {
  const [logout, setLogout] = useState();
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/', {replace:true})
  } 

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <h1>INI ADALAH USER</h1>
      <div>
      <button className='px-4 py-2 mt-5 rounded-md bg-red-500 text-white' onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}
