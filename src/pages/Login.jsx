import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })


    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        Object.keys(form).forEach(key => {
            formData.append(key, form[key])
        })

        console.log("**********",formData)

try {
        const res = await axiosInstance.post('/user/login', form)
            console.log(res?.data)

        if(res.data.success){
            const t = res?.data?.token
            console.log(t, typeof(t), "********")
            localStorage.setItem('b69',t)
            alert(res.data.msg)
            navigate('/protected')
        }else{
            alert(res.data.msg)
            navigate('/')
        }
} catch (err) {
    console.error(err)
    alert("Something went wrong")
            navigate('/')

}


    }
    return (
        <div className="container mt-5">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input name="email" onChange={handleChange} placeholder="Email" className="form-control mb-2" />
                <input name="password" type="password" onChange={handleChange} placeholder="Password" className="form-control mb-2" />
                <button className="btn btn-primary">Login</button>
                {/* if Not registered  */}
            </form>
        </div>


    )
}

export default Login