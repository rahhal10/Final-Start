import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <main className="dash">
      <div className="dash-container">
        <header className="dash-head">
          <h1>Welcome back, John!</h1>
          <p>Continue your learning journey</p>
        </header>

        {/* Metric cards */}
        <section className="metric-grid" aria-label="stats">
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Enrolled Courses</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="4" y="5" width="7" height="14" rx="1"/>
                  <rect x="13" y="5" width="7" height="14" rx="1"/>
                  <path d="M11 5v14"/>
                </svg>
              </span>
            </div>
            <div className="metric-value">2</div>
            <div className="metric-note">+2 from last month</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Hours Learned</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </span>
            </div>
            <div className="metric-value text-green">48.5</div>
            <div className="metric-note">+12.2 this week</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Avg Progress</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="4,14 9,9 13,12 20,6"/>
                </svg>
              </span>
            </div>
            <div className="metric-value text-orange">45%</div>
            <div className="metric-note">Across all courses</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Achievements</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z"/>
                  <path d="M6 7H4a3 3 0 0 0 3 3"/>
                  <path d="M18 7h2a3 3 0 0 1-3 3"/>
                  <path d="M12 11v3"/>
                  <path d="M9 21h6"/>
                </svg>
              </span>
            </div>
            <div className="metric-value">2</div>
            <div className="metric-note">Badges earned</div>
          </div>
        </section>

        {/* Continue Learning header */}
        <div className="section-bar">
          <h2>Continue Learning</h2>
          <button className="btn-ghost" type="button">View All Courses</button>
        </div>

        {/* Course cards */}
        <section className="course-grid" aria-label="continue">
          <article className="course-card">
            <div className="card-media">
              <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1200&auto=format&fit=crop" alt="Complete Web Development Bootcamp thumbnail" />
              <span className="pill level">Intermediate</span>
              <span className="pill tag">Web Development</span>
            </div>
            <div className="card-body">
              <h3 className="title">Complete Web Development Bootcamp</h3>
              <p className="sub">Learn HTML, CSS, JavaScript, React, Node.js and more</p>

              <div className="author">
                <div className="avatar" aria-hidden>SJ</div>
                <span>Sarah Johnson</span>
              </div>

              <div className="prog">
                <span className="label">Progress</span>
                <div className="track"><div className="bar" style={{ width: '65%' }} /></div>
                <span className="pct">65%</span>
              </div>

              <div className="meta">
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                  </svg>
                  40h
                </span>
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="9" cy="9" r="3"/><circle cx="17" cy="9" r="3"/>
                    <path d="M3 21a6 6 0 0 1 12 0"/><path d="M13 21a6 6 0 0 1 8 0"/>
                  </svg>
                  12,450
                </span>
                <span className="m">
                  <svg className="icon star" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 17.25l-5.4 3.18 1.44-6.2L3 9.57l6.3-.54L12 3.25l2.7 5.78 6.3.54-5.04 4.66 1.44 6.2z"/>
                  </svg>
                  4.8
                </span>
              </div>

              <div className="card-foot">
                <button className="btn-continue" type="button">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
                  </svg>
                  <span>Continue</span>
                </button>
              </div>
            </div>
          </article>

          <article className="course-card">
            <div className="card-media">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" alt="Data Science with Python thumbnail" />
              <span className="pill level red">Advanced</span>
              <span className="pill tag">Data Science</span>
            </div>
            <div className="card-body">
              <h3 className="title">Data Science with Python</h3>
              <p className="sub">Master data analysis, visualization, and machine learning</p>

              <div className="author">
                <div className="avatar" aria-hidden>DMC</div>
                <span>Dr. Michael Chen</span>
              </div>

              <div className="prog">
                <span className="label">Progress</span>
                <div className="track"><div className="bar" style={{ width: '25%' }} /></div>
                <span className="pct">25%</span>
              </div>

              <div className="meta">
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                  </svg>
                  35h
                </span>
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="9" cy="9" r="3"/><circle cx="17" cy="9" r="3"/>
                    <path d="M3 21a6 6 0 0 1 12 0"/><path d="M13 21a6 6 0 0 1 8 0"/>
                  </svg>
                  8,920
                </span>
                <span className="m">
                  <svg className="icon star" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 17.25l-5.4 3.18 1.44-6.2L3 9.57l6.3-.54L12 3.25l2.7 5.78 6.3.54-5.04 4.66 1.44 6.2z"/>
                  </svg>
                  4.9
                </span>
              </div>

              <div className="card-foot">
                <button className="btn-continue" type="button">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
                  </svg>
                  <span>Continue</span>
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* Assignments + Achievements */}
        <section className="lower-grid" aria-label="assignments and achievements">
          {/* Upcoming Assignments */}
          <article className="panel" role="region" aria-labelledby="assignments-title">
            <header className="panel-header">
              <span className="ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
              </span>
              <h3 id="assignments-title">Upcoming Assignments</h3>
            </header>

            <ul className="assign-list">
              <li className="assign-row">
                <div className="task">
                  <div className="t-title">JavaScript Functions Quiz</div>
                  <div className="t-sub">Web Development</div>
                </div>
                <div className="task-right">
                  <span className="status-pill high">high</span>
                  <span className="due">Tomorrow</span>
                </div>
              </li>

              <li className="assign-row">
                <div className="task">
                  <div className="t-title">Data Visualization Project</div>
                  <div className="t-sub">Data Science</div>
                </div>
                <div className="task-right">
                  <span className="status-pill medium">medium</span>
                  <span className="due">In 3 days</span>
                </div>
              </li>

              <li className="assign-row">
                <div className="task">
                  <div className="t-title">React Component Exercise</div>
                  <div className="t-sub">Web Development</div>
                </div>
                <div className="task-right">
                  <span className="status-pill low">low</span>
                  <span className="due">Next week</span>
                </div>
              </li>
            </ul>
          </article>

          {/* Achievements */}
          <article className="panel" role="region" aria-labelledby="achievements-title">
            <header className="panel-header">
              <span className="ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z" />
                  <path d="M6 7H4a3 3 0 0 0 3 3" />
                  <path d="M18 7h2a3 3 0 0 1-3 3" />
                  <path d="M12 11v3" />
                  <path d="M9 21h6" />
                </svg>
              </span>
              <h3 id="achievements-title">Achievements</h3>
            </header>

            <ul className="ach-list">
              <li className="ach-row earned">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🏆</span>
                  <span className="a-title">First Course Completed</span>
                </div>
                <span className="a-badge">Earned</span>
              </li>
              <li className="ach-row earned">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🎯</span>
                  <span className="a-title">7-Day Streak</span>
                </div>
                <span className="a-badge">Earned</span>
              </li>
              <li className="ach-row">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🥇</span>
                  <span className="a-title">Quiz Master</span>
                </div>
              </li>
              <li className="ach-row">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>⚡</span>
                  <span className="a-title">Speed Learner</span>
                </div>
              </li>
            </ul>
          </article>
        </section>

        {/* Quick Actions */}
        <section className="panel quick-actions" aria-label="quick actions">
          <header className="panel-header">
            <h3>Quick Actions</h3>
          </header>

          <div className="qa-row">
            <button type="button" className="qa-btn primary">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
              Resume Last Lesson
            </button>
            <button type="button" className="qa-btn">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              Browse Catalog
            </button>
            <button type="button" className="qa-btn">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10"/><path d="M9 9h6M9 13h6M9 17h6"/>
              </svg>
              Take Quiz
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard