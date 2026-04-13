import React from 'react'
import Navbar from '../components/Navbar'
import AsideBar from '../components/AsideBar'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
    <div className="row">
        <div className="col-2 bg-info">
            <AsideBar />
        </div>
        <div className="col-10">
        


        </div>
    </div>
        </div>
        <Footer />
    </>
  )
}

export default Dashboard