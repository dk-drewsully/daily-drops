import React from 'react';
import './RewardCelebrationOverlay.css';

/**
 * Reward Celebration Overlay Component
 * Exact implementation of Figma "Winning Popup Screen" (node-id=488:19003)
 */
function RewardCelebrationOverlay({
  isVisible = false,
  rewardAmount = 50,
  onDismiss
}) {
  if (!isVisible) return null;

  return (
    <div 
      className="reward-celebration-overlay"
      onClick={onDismiss}
    >
      {/* Winning Popup Screen - 343×517px modal */}
      <div className="winning-popup-screen" onClick={(e) => e.stopPropagation()}>
        
        {/* WinningModal_backColors - blurred orbs container */}
        <div className="winning-modal-back-colors">
          <div className="back-orb-cyan back-orb-cyan-1" />
          <div className="back-orb-cyan back-orb-cyan-2" />
          <div className="back-orb-yellow" />
        </div>

        {/* Star Vector - starburst */}
        <div className="star-vector" />

        {/* Coins group */}
        <div className="coins-group" />

        {/* Confetti group */}
        <div className="confetti-group" />

        {/* Text container */}
        <div className="text-container">
          {/* "You won" text */}
          <div className="you-won-text">YOU WON</div>

          {/* Amount */}
          <div className="amount-text">${rewardAmount}</div>

          {/* "lottery Credits" */}
          <div className="credits-text">LOTTERY CREDITS</div>
        </div>

      </div>
    </div>
  );
}

export default RewardCelebrationOverlay;
