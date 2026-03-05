import React from 'react';
import './SmallTimer.css';

/**
 * Small Timer Component
 * Shows countdown until next daily drop
 * Replaces "Collected Drops" title when all cards revealed
 */
function SmallTimer({ timeRemaining }) {
  return (
    <div className="end-state-header">
      <div className="small-timer">
        <svg className="clock-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path d="M6 1.125C5.03582 1.125 4.09329 1.41091 3.2916 1.94659C2.48991 2.48226 1.86507 3.24363 1.49609 4.13442C1.12711 5.02521 1.03057 6.00541 1.21867 6.95107C1.40678 7.89672 1.87108 8.76536 2.55286 9.44715C3.23464 10.1289 4.10328 10.5932 5.04894 10.7813C5.99459 10.9694 6.97479 10.8729 7.86558 10.5039C8.75637 10.1349 9.51774 9.51009 10.0534 8.7084C10.5891 7.90671 10.875 6.96418 10.875 6C10.8725 4.70783 10.3581 3.46929 9.44441 2.55559C8.53071 1.64189 7.29217 1.12748 6 1.125V1.125ZM8.625 6.375H6C5.90055 6.375 5.80516 6.33549 5.73484 6.26517C5.66451 6.19484 5.625 6.09946 5.625 6V3.375C5.625 3.27554 5.66451 3.18016 5.73484 3.10984C5.80516 3.03951 5.90055 3 6 3C6.09946 3 6.19484 3.03951 6.26517 3.10984C6.33549 3.18016 6.375 3.27554 6.375 3.375V5.625H8.625C8.72446 5.625 8.81984 5.66451 8.89017 5.73484C8.96049 5.80516 9 5.90054 9 6C9 6.09946 8.96049 6.19484 8.89017 6.26517C8.81984 6.33549 8.72446 6.375 8.625 6.375Z" fill="white"/>
        </svg>
        <span className="timer-text">
          <span className="timer-label">Next Drop in</span>{' '}
          <span className="timer-countdown">{timeRemaining}</span>
        </span>
      </div>
      <div className="timer-subtitle">Claim your daily chance for instant rewards!</div>
    </div>
  );
}

export default SmallTimer;
