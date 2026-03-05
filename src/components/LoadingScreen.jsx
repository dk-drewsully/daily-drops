import { useState, useEffect } from 'react';
import './LoadingScreen.css';

// Import actual Figma assets
import DailyDropsLogo from '../assets/images/DailyDrops.svg';
import EpicCharacter from '../assets/images/epic-loading-character.png';
import StarIcon from '../assets/icons/large-star.svg';
import BgDots from '../assets/images/bg-dots.svg';
import MaskGroup1 from '../assets/images/mask-group-394-68830.png'; // Blue orb
import MaskGroup2 from '../assets/images/mask-group-394-68833.png'; // Pink orb
import MaskGroup3 from '../assets/images/mask-group-394-68836.png'; // Orange orb

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [twinklingStarIndex, setTwinklingStarIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const twinkle = () => {
      // Pick a random star (0-5)
      const randomStar = Math.floor(Math.random() * 6);
      setTwinklingStarIndex(randomStar);

      // Random twinkle duration between 500-800ms
      const twinkleDuration = 500 + Math.random() * 300;

      setTimeout(() => {
        setTwinklingStarIndex(null);
      }, twinkleDuration);
    };

    // Initial twinkle with random delay
    const initialDelay = Math.random() * 1000;
    setTimeout(twinkle, initialDelay);

    // Random interval between 1.5-4 seconds for more variance
    const scheduleNextTwinkle = () => {
      const delay = 1500 + Math.random() * 2500; // 1500-4000ms
      return setTimeout(() => {
        twinkle();
        timeout = scheduleNextTwinkle();
      }, delay);
    };

    let timeout = setTimeout(() => {
      timeout = scheduleNextTwinkle();
    }, initialDelay + 600);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="loading-screen">
      {/* Background orbs - Mask Groups from Figma */}
      <div className="background-orbs">
        <img src={MaskGroup1} alt="" className="orb orb-1" />
        <img src={MaskGroup2} alt="" className="orb orb-2" />
        <img src={MaskGroup3} alt="" className="orb orb-3" />
      </div>

      {/* Stars - using actual Figma star SVGs */}
      <div className="stars">
        <img src={StarIcon} alt="" className={`star star-1 ${twinklingStarIndex === 0 ? 'twinkle' : ''}`} />
        <img src={StarIcon} alt="" className={`star star-2 ${twinklingStarIndex === 1 ? 'twinkle' : ''}`} />
        <img src={StarIcon} alt="" className={`star star-3 ${twinklingStarIndex === 2 ? 'twinkle' : ''}`} />
        <img src={StarIcon} alt="" className={`star star-4 ${twinklingStarIndex === 3 ? 'twinkle' : ''}`} />
        <img src={StarIcon} alt="" className={`star star-5 ${twinklingStarIndex === 4 ? 'twinkle' : ''}`} />
        <img src={StarIcon} alt="" className={`star star-6 ${twinklingStarIndex === 5 ? 'twinkle' : ''}`} />
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      {/* Bottom decorative ellipses */}
      <div className="bottom-ellipses">
        <div className="ellipse-2336"></div>
        <div className="ellipse-2339"></div>
        <div className="ellipse-2246"></div>
      </div>

      {/* Texture - BG Dots pattern from Figma */}
      <div className="texture">
        <img src={BgDots} alt="" className="bg-dots" />
      </div>

      {/* Logo - Combined Daily Drops logo */}
      <img src={DailyDropsLogo} alt="Daily Drops" className="daily-drops-logo" />

      {/* ⚠️  Missing Font: Grota Sans (weight: 800) - See FONT_REQUIREMENTS.md */}
      <div className="loading-text">Your daily reward is ready</div>

      {/* Progress Bar - Exact position from Figma */}
      <div className="progress-bar-container">
        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Character - Anchored to bottom right */}
      <div className="character">
        <img src={EpicCharacter} alt="Character" className="character-img" />
      </div>
    </div>
  );
};

export default LoadingScreen;
