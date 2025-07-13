import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Proj from './components/Proj'
import Skill from './components/Skill'


import Login from './logincomponents/Login'


function App() {
  return (

    <> 
    
     <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proj" element={<Proj />} />
          <Route path="/skills" element={<Skill />} />
          
        </Routes>
         <Login />  
       
      </>
    </BrowserRouter>
    </>


  )
}

export default App
