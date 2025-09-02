import React from 'react'

function Dashboard_Assignment({ assignment }) {
  return (
    <>



           <ul className="assign-list">
              <li className="assign-row">
                <div className="task">
                  <div className="t-title">{assignment.title}</div>
                  <div className="t-sub">{assignment.subject}</div>
                </div>
                <div className="task-right">
                  <span className={`status-pill`}>{assignment.priority}</span>
                  <span className="due">{assignment.dueDate}</span>
                </div>
              </li>
        </ul>

          </>
  )
}

export default Dashboard_Assignment