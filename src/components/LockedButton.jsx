import React from 'react';
import './LockedButton.css';

/**
 * Locked Button Component
 * Disabled button showing lock icon and countdown
 * Based on Figma specs: 375×125px at (0, 647)
 */
function LockedButton({ timeRemaining = '04:30:20' }) {
  return (
    <div className="button-container">
      <button className="primary-button locked" disabled>
        <svg className="lock-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="button-text">Come back in {timeRemaining}</span>
      </button>
    </div>
  );
}

export default LockedButton;
