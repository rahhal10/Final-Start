import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Comp/Navbar/Navbar.jsx'
import Dashboard from './Comp/Dashboard/Dashboard.jsx'
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
    
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<div>Pricing Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />

      </Routes>
      <Routes>

        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
