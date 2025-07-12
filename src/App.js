import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Proj from './components/Proj'
import Skill from './components/Skill'
import Education from './components/Skill' 
import Contact from './components/Contact'// Assuming Education is also in Skill.js, adjust if needed


function App() {
  return (
    
     <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proj" element={<Proj />} />
          <Route path="/skills" element={<Skill />} />
          <Route Route path="/Contact" element={<Contact />} />
        </Routes>
       
      </>
    </BrowserRouter>

  )
}

export default App
