import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Proj from './components/Proj';
import Skill from './components/Skill';
import Login from './logincomponents/Login';
import ProtectedRoute from './logincomponents/Protected';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login setLoggedIn={setLoggedIn} setRole={setRole} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/proj" element={
              <ProtectedRoute element={<Proj />} allowedRole={['admin']} role={role} />
            } />
            <Route path="/skills" element={
              <ProtectedRoute element={<Skill />} allowedRole={['admin', 'user']} role={role} />
            } />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
