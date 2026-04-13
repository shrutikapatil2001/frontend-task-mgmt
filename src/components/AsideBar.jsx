import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { Link } from 'react-router-dom'

const AsideBar = () => {

    const [user, setUser] = useState()




    async function fetchUser() {
        const res = await axiosInstance.get('/user/getUserInfo')

        if (res.data.success) {
            setUser(res.data.user)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

console.log(user)

if(user?.role == 'user') return <ul><li><Link to=''>Profile</Link></li><li><Link to=''>Tasks</Link></li><li><Link to=''>Logout</Link></li></ul>



    return (
        <>
            <div className=''>AsideBar</div>

            <ul>
        <li><Link to=''>Profile</Link></li>

        <li><Link to=''>Tasks</Link></li>
        <li><Link to=''>Create Tasks</Link></li>
        <li><Link to=''>Show Users</Link></li>
        <li><Link to=''>Logout</Link></li>
            </ul>

        </>
    )
}

export default AsideBar