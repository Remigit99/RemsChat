import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {


  return (
    <>
      <div>
        {/* <h2>Welcome to Remchat</h2> */}
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='login' element={<Login />} />

        </Routes>

      </div>
    </>
  )
}

export default App
