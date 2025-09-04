import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Comp/Navbar.jsx'
import Home from './Routes/Home.jsx'
import Dashboard from './Routes/Dashboard.jsx'
import Courses from './Routes/Courses.jsx'
import About from './Routes/About.jsx'
import Footer from './Comp/Footer.jsx'
import Cart from './Routes/Cart.jsx'
import Login from './Routes/Login.jsx'
import React, { useState } from 'react';



function App() {
    const [user, setUser] = useState(() => {
      try {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    });

  const onLogin = (loginData) => {
    setUser(loginData);
    console.log('Logged in user:', loginData);
    localStorage.setItem('user', JSON.stringify(loginData));
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

return (
    <>
    <Router>
      <Navbar onLogout={onLogout} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={user  ? <Dashboard /> : <Home />} />
        <Route path="/courses" element={user ? <Courses user={user} /> : <Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/cart" element={user ? <Cart /> : <Home />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
