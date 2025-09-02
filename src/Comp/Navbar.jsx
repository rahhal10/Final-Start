import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'
import Logo from '../assets/Logo.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <img className='navbar-logo' src={Logo} alt="logo" />
        <span className="navbar-title">LearnHub</span>
      </div>
      <ul className='nav-links'>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <ul className='nav-links-right'>
        <li><Link to="/login">Log In</Link></li>
        <li id='Signup'><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar