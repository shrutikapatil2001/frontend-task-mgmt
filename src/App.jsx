import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/Protected'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/protected' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }></Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App