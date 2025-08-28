import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">#1 Online Learning Platform</div>
        <h1>
          Learn <span className="purple">Without</span><br />
          <span className="purple">Limits</span>
        </h1>
        <p>
          Master new skills with expert instructors, interactive quizzes, and personalized learning paths. Join thousands of students already transforming their careers.
        </p>
        <div className="hero-stats">
          <span>👨‍🎓 50,000+ Students</span>
          <span>📘 1,200+ Courses</span>
          <span>⭐ 4.9 Rating</span>
        </div>
        <div className="hero-actions">
          <button className="primary">Start Learning Now</button>
          <button className="secondary">▶ Watch Demo</button>
        </div>
      </div>
      <div className="hero-bg"></div>
    </div>
  )
}

export default Dashboard