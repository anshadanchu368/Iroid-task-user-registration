import React from 'react'
import SignUpPage from './components/SignupPage.js'
import {  Route, Routes } from 'react-router-dom'
import SigninPage from './components/SIgnIn.js'
import Home from './components/Home.js'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
  )
}

export default App
