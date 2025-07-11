import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    
     <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
       
      </>
    </BrowserRouter>

  )
}

export default App
