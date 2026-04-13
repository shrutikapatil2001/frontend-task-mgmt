import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const [user,setUser] = useState()

    async function fetchUser(){
        const res = await axiosInstance.get('/user/getUserInfo')

        if(res.data.success){
            setUser(res.data.user)
        }
    }

    useEffect(()=>{
fetchUser()
    },[])

    function handleLogout(){
        localStorage.removeItem('b69')
        navigate('/')
    }
  return (
    <>
    <div className='d-flex justify-content-around'>
    <div>Task MGMT </div>
    <div>
        <b>{user?.name}</b>
        <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
    </>
  )
}

export default Navbar