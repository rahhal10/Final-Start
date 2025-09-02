import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Comp/Navbar.jsx'
import Home from './Routes/Home.jsx'
import Dashboard from './Routes/Dashboard.jsx'
import Courses from './Routes/Courses.jsx'
import About from './Routes/About.jsx'
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
