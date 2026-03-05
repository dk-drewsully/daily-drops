import React from 'react';
import './WeeklyRewards.css';

/**
 * Weekly Rewards Component
 * Shows summary of rewards earned this week
 * Based on Figma: 343×60px
 */
function WeeklyRewards() {
  return (
    <div className="weekly-rewards">
      <div className="weekly-rewards-title">Rewards Earned This Week</div>

      <div className="row-of-results">
        {/* Reward Summary 1 */}
        <div className="rewards-summary">
          <div className="reward-amount">
            <svg className="reward-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#FFB300"/>
            </svg>
            <span className="reward-details">120 Crowns</span>
          </div>
        </div>

        {/* Reward Summary 2 */}
        <div className="rewards-summary">
          <div className="reward-amount">
            <svg className="reward-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0Z" fill="#22C38E"/>
            </svg>
            <span className="reward-details">100 Free Plays</span>
          </div>
        </div>

        {/* Reward Summary 3 */}
        <div className="rewards-summary">
          <div className="reward-amount">
            <svg className="reward-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="#57E3FF"/>
            </svg>
            <span className="reward-details">200 XP</span>
          </div>
        </div>

        {/* Reward Summary 5 */}
        <div className="rewards-summary">
          <div className="reward-amount">
            <svg className="reward-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="#FFB300"/>
            </svg>
            <span className="reward-details">3 Boosters</span>
          </div>
        </div>

        {/* Reward Summary 6 */}
        <div className="rewards-summary">
          <div className="reward-amount">
            <svg className="reward-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="#22C38E"/>
            </svg>
            <span className="reward-details">15 Tickets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyRewards;
