import React from 'react'
import '../Css/Courses.css'

function Courses() {
  return (
    <>
      <section className="courses-hero" aria-label="courses-hero">
        <div className="courses-container">
          <h1 className="courses-title">
            Explore Our <span className="purple">Courses</span>
          </h1>

          <p className="courses-desc">
            Discover thousands of courses taught by industry experts. Start your learning journey today and
            unlock your potential.
          </p>

          <div className="courses-stats" aria-label="site-stats">
            <span className="courses-stat">
              <span className="value purple">1,200+</span>
              <span className="label">Courses</span>
            </span>
            <span className="courses-stat">
              <span className="value purple">50,000+</span>
              <span className="label">Students</span>
            </span>
            <span className="courses-stat">
              <span className="value green">4.9</span>
              <span className="label">Avg Rating</span>
            </span>
          </div>
        </div>
      </section>

      <section className="courses-tools" aria-label="course search and filters">
        <div className="tools-container">
          <div className="search-wrap">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search courses..."
              aria-label="Search courses"
            />
          </div>

          <div className="filters-wrap">
            <span className="filter-label">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 3H2l8 10v6l4 2v-8z" />
              </svg>
              Filter by:
            </span>
            <div className="chips">
              <button className="chip active" type="button">All</button>
              <button className="chip" type="button">Development</button>
              <button className="chip" type="button">Data Science</button>
              <button className="chip" type="button">Marketing</button>
              <button className="chip" type="button">Design</button>
              <button className="chip" type="button">Business</button>
              <button className="chip" type="button">All Levels</button>
              <button className="chip" type="button">Beginner</button>
              <button className="chip" type="button">Intermediate</button>
              <button className="chip" type="button">Advanced</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Courses