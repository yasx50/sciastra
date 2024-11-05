import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Courses from './components/Courses'
import Blog from './components/Blog'
import Payment from './components/Payment'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    <Courses/>
    <Footer/>
    {/* <Blog/> */}
    {/* <Payment/> */}
      
      
    </>
  )
}

export default App
