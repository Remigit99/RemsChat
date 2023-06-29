// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home'
// import Register from './Pages/Register'
// import Login from './Pages/Login'

function App() {


  return (
    <>
      <div>
        {/* <h2>Welcome to Remchat</h2> */}
        <Routes>
          {/* <Route path='/' element={<Register />} />
          <Route path='login' element={<Login />} /> */}
          <Route path='/home' element={<Home />} />


        </Routes>

      </div>
    </>
  )
}

export default App
