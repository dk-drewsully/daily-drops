import React from 'react';
import './ProgressTrackerCard.css';
import commonFace from '../assets/images/common-face.svg';
import rareFace from '../assets/images/rare-face.svg';
import epicFace from '../assets/images/epic-face.svg';
import legendaryFace from '../assets/images/legendary-face.svg';

/**
 * Progress Tracker Card Component
 * Shows reward tier progress with image, label, count, and optional glow effect
 *
 * @param {Object} props
 * @param {'common' | 'rare' | 'epic' | 'legendary'} props.tier - Reward tier
 * @param {number} props.current - Current count (0-12)
 * @param {number} props.total - Total count (12, 8, 5, or 3)
 * @param {boolean} props.isGlowing - Whether card should glow
 * @param {boolean} props.isDimmed - Whether card should be dimmed
 * @param {Function} props.onComplete - Callback when collection complete
 */
function ProgressTrackerCard({
  tier = 'common',
  current = 0,
  total = 12,
  isGlowing = false,
  isDimmed = false,
  onComplete
}) {
  const isComplete = current >= total;

  React.useEffect(() => {
    if (isComplete && onComplete) {
      onComplete(tier);
    }
  }, [isComplete, tier, onComplete]);

  // Map tier to character face
  const characterFaces = {
    common: commonFace,
    rare: rareFace,
    epic: epicFace,
    legendary: legendaryFace
  };

  return (
    <div className={`progress-tracker-card ${tier} ${isGlowing ? 'glowing' : ''} ${isDimmed ? 'dimmed' : ''}`}>
      {/* Image Container */}
      <div className="tracker-image-container">
        <div className="tracker-image">
          <img
            src={characterFaces[tier]}
            alt={`${tier} character`}
            className="character-face"
          />
        </div>

        {/* Label */}
        <div className="tracker-label-container">
          <span className="tracker-label">{tier.toUpperCase()}</span>
        </div>
      </div>

      {/* Details Container */}
      <div className="tracker-details">
        {/* Progress */}
        <div className="tracker-progress-container">
          <div className="tracker-progress">{current}/{total}</div>
          <div className="tracker-collected">Collected</div>
        </div>

        {/* Crowns */}
        <div className="tracker-crowns-container">
          <div className="tracker-crowns">CROWNS</div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTrackerCard;
