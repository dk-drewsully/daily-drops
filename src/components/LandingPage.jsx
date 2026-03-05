import React, { useState } from 'react';
import './LandingPage.css';
import ProgressTrackerCard from './ProgressTrackerCard';
import ScratchCardStack from './ScratchCardStack';

// Import shared assets
import DailyDropsLogo from '../assets/images/DailyDrops.svg';
import StarIcon from '../assets/icons/large-star.svg';
import BgDots from '../assets/images/bg-dots.svg';
import MaskGroup1 from '../assets/images/mask-group-394-68830.png'; // Blue orb
import MaskGroup2 from '../assets/images/mask-group-394-68833.png'; // Pink orb
import MaskGroup3 from '../assets/images/mask-group-394-68836.png'; // Orange orb

const LandingPage = () => {
  // Track progress for each tier
  const [progress, setProgress] = useState({
    common: { current: 0, total: 12, isGlowing: false },
    rare: { current: 0, total: 8, isGlowing: false },
    epic: { current: 0, total: 5, isGlowing: false },
    legendary: { current: 0, total: 3, isGlowing: false }
  });

  const handleComplete = (tier) => {
    console.log(`${tier} collection complete!`);
  };

  // Handle scratch card reveal
  const handleCardRevealed = (tier) => {
    // Update progress tracker count
    setProgress(prev => ({
      ...prev,
      [tier]: {
        ...prev[tier],
        current: prev[tier].current + 1,
        isGlowing: true
      }
    }));

    // Stop glowing after 3 seconds
    setTimeout(() => {
      setProgress(prev => ({
        ...prev,
        [tier]: {
          ...prev[tier],
          isGlowing: false
        }
      }));
    }, 3000);
  };

  // Define scratch cards
  const scratchCards = [
    { id: 1, tier: 'common', reward: 10 },
    { id: 2, tier: 'rare', reward: 25 },
    { id: 3, tier: 'epic', reward: 50 }
  ];

  return (
    <div className="landing-page">
      {/* Shared Background Elements */}
      <div className="background-orbs">
        <img src={MaskGroup1} alt="" className="orb orb-1" />
        <img src={MaskGroup2} alt="" className="orb orb-2" />
        <img src={MaskGroup3} alt="" className="orb orb-3" />
      </div>

      <div className="stars">
        <img src={StarIcon} alt="" className="star star-1" />
        <img src={StarIcon} alt="" className="star star-2" />
        <img src={StarIcon} alt="" className="star star-3" />
        <img src={StarIcon} alt="" className="star star-4" />
        <img src={StarIcon} alt="" className="star star-5" />
        <img src={StarIcon} alt="" className="star star-6" />
      </div>

      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="bottom-ellipses">
        <div className="ellipse-2336"></div>
        <div className="ellipse-2339"></div>
        <div className="ellipse-2246"></div>
      </div>

      <div className="texture">
        <img src={BgDots} alt="" className="bg-dots" />
      </div>

      {/* Logo - Centered, 24px from top */}
      <div className="logo-container">
        <img src={DailyDropsLogo} alt="Daily Drops" className="logo" />
      </div>

      {/* Content with flexbox auto-layout */}
      <div className="content-container">
        {/* Progress Tracker Cards */}
        <div className="progress-tracker-container">
          <ProgressTrackerCard
            tier="common"
            current={progress.common.current}
            total={progress.common.total}
            isGlowing={progress.common.isGlowing}
            onComplete={handleComplete}
          />
          <ProgressTrackerCard
            tier="rare"
            current={progress.rare.current}
            total={progress.rare.total}
            isGlowing={progress.rare.isGlowing}
            onComplete={handleComplete}
          />
          <ProgressTrackerCard
            tier="epic"
            current={progress.epic.current}
            total={progress.epic.total}
            isGlowing={progress.epic.isGlowing}
            onComplete={handleComplete}
          />
          <ProgressTrackerCard
            tier="legendary"
            current={progress.legendary.current}
            total={progress.legendary.total}
            isGlowing={progress.legendary.isGlowing}
            onComplete={handleComplete}
          />
        </div>

        <div className="reward-reveal-title">Reveal today's reward</div>

        {/* Scratch Card Area */}
        <div className="scratch-card-area">
          <ScratchCardStack
            cards={scratchCards}
            onCardRevealed={handleCardRevealed}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
