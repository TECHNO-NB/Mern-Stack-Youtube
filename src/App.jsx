import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/header/Navbar'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {


  return (
   <BrowserRouter >
   <Routes>
   <Route path='/' Component={Home}></Route>
    <Route path='/register' Component={Register}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
