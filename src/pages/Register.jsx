import axios from 'axios'
import React, { useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        contactNumber: ''
    })

    const [file, setFile] = useState(null)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("******")
        const formData = new FormData()
        Object.keys(form).forEach(key => {
            formData.append(key, form[key])
        })

        formData.append('myFile', file)
        console.log(formData)


        const res = await axiosInstance.post('/user/register', formData)
        if(res.data.success){
            alert(res.data.msg)
            navigate('/')
        }else{
            alert("Registration failed")
            navigate('/register')
        }



    }
    return (
        <div className="container mt-5">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} placeholder="Name" className="form-control mb-2" />
                <input name="email" onChange={handleChange} placeholder="Email" className="form-control mb-2" />
                <input name="password" type="password" onChange={handleChange} placeholder="Password" className="form-control mb-2" />
                <input name="contactNumber" onChange={handleChange} placeholder="Contact Number" className="form-control mb-2" />

                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control mb-2" />

                <button type="submit" className="btn btn-primary">Register</button>
                {/* if already registered  */}
            </form>
        </div>


    )
}

export default Register