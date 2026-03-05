import React from 'react';
import './DayTracker.css';

/**
 * Day Tracker Component
 * Shows 7-day checklist of days played
 * Based on Figma specs: 311×38px at (32, 247)
 */
function DayTracker({ completedDays = [true, true, true, false, false, false, false] }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  return (
    <div className="day-tracker">
      {days.map((day, index) => (
        <div key={index} className="day-tracker-item">
          <div className={`day-name ${completedDays[index] ? 'completed' : 'incomplete'}`}>
            {day}
          </div>
          <div className="day-check-container">
            {completedDays[index] ? (
              <svg className="check-circle filled" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" fill="transparent" stroke="rgba(0, 0, 0, 0.6)" strokeWidth="1"/>
                <circle cx="10" cy="10" r="8" fill="#FFD901"/>
                <path d="M7 10L9 12L13 8" stroke="#2A2000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="check-circle empty" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="rgba(176, 190, 197, 0.3)" strokeWidth="1"/>
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DayTracker;
