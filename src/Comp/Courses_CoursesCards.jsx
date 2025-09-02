import React from 'react'
import '../Css/Courses.css'

function Courses_CoursesCards({ Card }) {
  return (
    <>
     {/* Course Card 1 - Web Development */}
            <div className="course-card popular">
              <div className="course-image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Complete Web Development Bootcamp" />
                <div className="course-badge" data-badge="development">Development</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{Card.title}</h3>
                <p className="course-description">
                  Learn HTML, CSS, JavaScript, React, Node.js, and more. Build 10+ real-world projects and become a full-stack developer.
                </p>
                <div className="course-instructor">
                  <span className="instructor-name">{Card.instructor}</span>
                </div>
                <div className="course-meta">
                  <div className="course-rating">
                    <span className="rating-number">{Card.rating}</span>
                  </div>
                  <div className="course-stats">
                    <span className="duration">{Card.duration}</span>
                    <span className="students">{Card.students}</span>
                    <span className="lessons">{Card.lessons}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-price">
                    <span className="current-price">{Card.price}</span>
                    <span className="payment-info">{Card.paymentInfo}</span>
                  </div>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            </div>
            </>
  )
}

export default Courses_CoursesCards