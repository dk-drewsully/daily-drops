import React, { useState, useEffect, useRef } from 'react';
import './DailyDropsScreen.css';
import ProgressTrackerCard from './ProgressTrackerCard';
import ScratchCardStack from './ScratchCardStack';
import RevealAllButton from './RevealAllButton';
import PrototypeNav from './PrototypeNav';
import RewardCelebrationOverlay from './RewardCelebrationOverlay';
import SmallTimer from './SmallTimer';
import DayTracker from './DayTracker';
import WeeklyRewards from './WeeklyRewards';
import PromoCarousel from './PromoCarousel';
// import LockedButton from './LockedButton';

// Import assets
import DailyDropsLogo from '../assets/images/DailyDrops.svg';
import EpicCharacter from '../assets/images/epic-loading-character.png';
import StarIcon from '../assets/icons/large-star.svg';
import BgDots from '../assets/images/bg-dots.svg';
import MaskGroup1 from '../assets/images/mask-group-394-68830.png';
import MaskGroup2 from '../assets/images/mask-group-394-68833.png';
import MaskGroup3 from '../assets/images/mask-group-394-68836.png';

/**
 * Unified Daily Drops Screen Component
 * Handles both loading and landing states with smooth transitions
 *
 * @param {Object} props
 * @param {'loading' | 'landing'} props.state - Current screen state (for testing)
 */
const DailyDropsScreen = ({ state: externalState }) => {
  const [internalState, setInternalState] = useState('loading');
  const [progress, setProgress] = useState(0);
  const [twinklingStarIndex, setTwinklingStarIndex] = useState(null);

  // Progress tracker state
  const [progressData, setProgressData] = useState({
    common: { current: 0, total: 12, isGlowing: false },
    rare: { current: 0, total: 8, isGlowing: false },
    epic: { current: 0, total: 5, isGlowing: false },
    legendary: { current: 0, total: 3, isGlowing: false }
  });

  // Prototype state management (dev only)
  const [prototypeState, setPrototypeState] = useState('default');
  const [celebrationOverlay, setCelebrationOverlay] = useState({
    isVisible: false,
    tier: null,
    rewardAmount: null
  });
  const [landingVisible, setLandingVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);

  // Show prototype nav for design team review
  const showPrototypeNav = true;

  // Always use internal state for prototype nav to work correctly
  const currentState = showPrototypeNav ? internalState : (externalState || internalState);

  // Sync top buttons (external state) to internal state in default mode
  const prevExternalStateRef = useRef(externalState);
  useEffect(() => {
    if (showPrototypeNav && prototypeState === 'default' && externalState) {
      // Only sync if external state actually changed (user clicked button)
      if (prevExternalStateRef.current !== externalState) {
        prevExternalStateRef.current = externalState;
        setInternalState(externalState);
        // Reset progress when manually switching to loading
        if (externalState === 'loading') {
          setProgress(0);
        }
      }
    }
  }, [externalState, prototypeState, showPrototypeNav]);

  // Landing animation trigger - delay to ensure DOM renders first
  useEffect(() => {
    if (currentState === 'landing') {
      // Reset landing visible first
      setLandingVisible(false);
      // Small delay to allow DOM to mount before triggering animation
      const timer = setTimeout(() => {
        setLandingVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // When switching to loading, immediately hide landing elements
      setLandingVisible(false);
    }
  }, [currentState]);

  // Progress bar animation
  useEffect(() => {
    if (currentState === 'loading') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Elegant pause at completion before transition
            setTimeout(() => {
              setInternalState('landing');
            }, 600); // Brief moment to appreciate completion
            return 100;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [currentState]);

  // Star twinkling animation
  useEffect(() => {
    const twinkle = () => {
      const randomStar = Math.floor(Math.random() * 6);
      setTwinklingStarIndex(randomStar);

      const twinkleDuration = 500 + Math.random() * 300;
      setTimeout(() => {
        setTwinklingStarIndex(null);
      }, twinkleDuration);
    };

    const initialDelay = Math.random() * 1000;
    setTimeout(twinkle, initialDelay);

    const scheduleNextTwinkle = () => {
      const delay = 1500 + Math.random() * 2500;
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

  // Reset progress when switching back to loading
  useEffect(() => {
    if (currentState === 'loading') {
      setProgress(0);
    }
  }, [currentState]);

  // Handle scratch card reveal
  const handleCardRevealed = (tier, reward) => {
    // Update progress tracker count
    setProgressData(prev => ({
      ...prev,
      [tier]: {
        ...prev[tier],
        current: prev[tier].current + 1,
        isGlowing: true
      }
    }));

    // Increment revealed count
    setRevealedCount(prev => prev + 1);

    // Stop glowing after 2 seconds
    setTimeout(() => {
      setProgressData(prev => ({
        ...prev,
        [tier]: {
          ...prev[tier],
          isGlowing: false
        }
      }));
    }, 2000);
  };

  // Prototype state change handler
  const handlePrototypeStateChange = (state) => {
    setPrototypeState(state);

    if (state === 'reward') {
      // Show reward celebration (example: epic tier completed with 250 crowns)
      setCelebrationOverlay({
        isVisible: true,
        tier: 'epic',
        rewardAmount: 250
      });

      // Set progress to show almost complete for other tiers
      setProgressData({
        common: { current: 11, total: 12, isGlowing: false },
        rare: { current: 7, total: 8, isGlowing: false },
        epic: { current: 5, total: 5, isGlowing: false }, // Just completed!
        legendary: { current: 2, total: 3, isGlowing: false }
      });

      setAllCardsRevealed(false);
      setDetailsVisible(false);
    } else if (state === 'details') {
      // Details Screen - show end state with all cards revealed
      setInternalState('landing');
      setProgress(100); // Ensure loading screen completes

      setCelebrationOverlay({
        isVisible: false,
        tier: null,
        rewardAmount: null
      });

      // Show all cards as revealed
      setAllCardsRevealed(true);

      // Set completion timestamp so timer starts counting
      setCompletionTimestamp(Date.now());

      // Trigger details animation
      setDetailsVisible(false);
      setTimeout(() => {
        setDetailsVisible(true);
      }, 50);

      // Set progress data to show some collected rewards
      setProgressData({
        common: { current: 11, total: 12, isGlowing: false },
        rare: { current: 7, total: 8, isGlowing: false },
        epic: { current: 4, total: 5, isGlowing: false },
        legendary: { current: 2, total: 3, isGlowing: false }
      });
    } else {
      // Default state - reset to loading screen for natural flow
      // Force a complete reset by briefly setting to a neutral state
      setProgress(0);
      setInternalState('loading');

      setCelebrationOverlay({
        isVisible: false,
        tier: null,
        rewardAmount: null
      });

      // Reset details screen specific state
      setAllCardsRevealed(false);
      setCompletionTimestamp(null);
      setDetailsVisible(false);

      // Reset progress data to starting state
      setProgressData({
        common: { current: 0, total: 12, isGlowing: false },
        rare: { current: 0, total: 8, isGlowing: false },
        epic: { current: 0, total: 5, isGlowing: false },
        legendary: { current: 0, total: 3, isGlowing: false }
      });
    }
  };

  const handleDismissCelebration = () => {
    // When overlay dismissed, return to default state
    setPrototypeState('default');
    setCelebrationOverlay({
      isVisible: false,
      tier: null,
      rewardAmount: null
    });
  };

  // Define scratch cards (you can customize this)
  const scratchCards = [
    { id: 1, tier: 'common', reward: 10 },
    { id: 2, tier: 'rare', reward: 25 },
    { id: 3, tier: 'epic', reward: 50 }
  ];

  // Ref for scratch card stack
  const stackRef = useRef(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [allCardsRevealed, setAllCardsRevealed] = useState(false);
  const [completionTimestamp, setCompletionTimestamp] = useState(null);
  const [timeUntilReset, setTimeUntilReset] = useState('');
  const [revealedCount, setRevealedCount] = useState(0);

  // Handle reveal all button click
  const handleRevealAll = () => {
    if (stackRef.current && stackRef.current.revealAll && !isRevealing) {
      setIsRevealing(true);
      stackRef.current.revealAll();

      // Re-enable button after all cards are revealed
      // 5500ms per card = 2s scratch + 2s pause on reveal + 0.6s slide-out + 0.7s position + buffer
      setTimeout(() => {
        setIsRevealing(false);
      }, scratchCards.length * 5500 + 1000);
    }
  };

  // Handle all cards revealed
  const handleAllRevealed = () => {
    const now = Date.now();
    setCompletionTimestamp(now);
    setAllCardsRevealed(true);
  };

  // Animate in new details screen components when all cards are revealed
  useEffect(() => {
    if (allCardsRevealed && prototypeState === 'default') {
      // Wait for scratch cards to fully slide out before animating in details components
      // Card slide-out takes ~600ms, add buffer for smooth transition
      const timer = setTimeout(() => {
        setDetailsVisible(true);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setDetailsVisible(false);
    }
  }, [allCardsRevealed, prototypeState]);

  // Timer countdown to next reset (24 hours from completion)
  useEffect(() => {
    if (!allCardsRevealed || !completionTimestamp) return;

    const calculateTimeRemaining = () => {
      // Calculate time until 24 hours from when last card was scratched
      const now = Date.now();
      const resetTime = completionTimestamp + (24 * 60 * 60 * 1000); // 24 hours in milliseconds

      const diff = resetTime - now;

      if (diff <= 0) {
        return '00:00:00';
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    setTimeUntilReset(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeUntilReset(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [allCardsRevealed, completionTimestamp]);

  // Check if any card is glowing
  const anyCardGlowing = progressData.common.isGlowing ||
                         progressData.rare.isGlowing ||
                         progressData.epic.isGlowing ||
                         progressData.legendary.isGlowing;

  return (
    <div className={`daily-drops-screen ${currentState === 'landing' ? 'landing-state' : 'loading-state'}`}>
      {/* Shared Background Elements - Persist throughout */}
      <div className="background-orbs">
        <img src={MaskGroup1} alt="" className="orb orb-1" />
        <img src={MaskGroup2} alt="" className="orb orb-2" />
        <img src={MaskGroup3} alt="" className="orb orb-3" />
      </div>

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

      <div className="bottom-ellipses">
        <div className="ellipse-2336"></div>
        <div className="ellipse-2339"></div>
        <div className="ellipse-2246"></div>
      </div>

      <div className="texture">
        <img src={BgDots} alt="" className="bg-dots" />
      </div>

      {/* Logo - Transitions from center to top */}
      <div className={`logo-container ${currentState === 'landing' ? 'landing' : 'loading'}`}>
        <img src={DailyDropsLogo} alt="Daily Drops" className="logo" />
      </div>

      {/* Loading State Elements */}
      <div className={`loading-elements ${currentState === 'landing' ? 'hidden' : ''}`}>
        <div className="loading-text">Your daily reward is ready!</div>

        <div className="progress-bar-container">
          <div className="progress-bar-background">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="epic-character-container">
          <img src={EpicCharacter} alt="Character" className="epic-character" />
        </div>
      </div>

      {/* Landing State Elements */}
      <div className={`landing-elements ${currentState === 'loading' ? 'hidden' : ''} ${landingVisible ? 'visible' : ''}`}>
        {/* Details Screen Components - animate in when cards are revealed */}
        {allCardsRevealed && (
          <div className={`details-components ${detailsVisible ? 'visible' : ''}`}>
            <SmallTimer timeRemaining={timeUntilReset} />
            <DayTracker completedDays={[true, true, true, false, false, false, false]} />
          </div>
        )}

        {/* Title always above progress tracker */}
        <div className="collected-drops-title">Collected Drops</div>

            <div className={`progress-tracker-container ${allCardsRevealed ? 'end-state' : ''}`}>
              <ProgressTrackerCard
                tier="common"
                current={progressData.common.current}
                total={progressData.common.total}
                isGlowing={progressData.common.isGlowing}
                isDimmed={anyCardGlowing && !progressData.common.isGlowing}
              />
              <ProgressTrackerCard
                tier="rare"
                current={progressData.rare.current}
                total={progressData.rare.total}
                isGlowing={progressData.rare.isGlowing}
                isDimmed={anyCardGlowing && !progressData.rare.isGlowing}
              />
              <ProgressTrackerCard
                tier="epic"
                current={progressData.epic.current}
                total={progressData.epic.total}
                isGlowing={progressData.epic.isGlowing}
                isDimmed={anyCardGlowing && !progressData.epic.isGlowing}
              />
              <ProgressTrackerCard
                tier="legendary"
                current={progressData.legendary.current}
                total={progressData.legendary.total}
                isGlowing={progressData.legendary.isGlowing}
                isDimmed={anyCardGlowing && !progressData.legendary.isGlowing}
              />
            </div>

            {/* Hide scratch card area when showing end state */}
            {!allCardsRevealed && (
              <>
                <div className="reward-reveal-title">
                  {revealedCount === 0
                    ? "Reveal today's reward"
                    : `${scratchCards.length - revealedCount} ${scratchCards.length - revealedCount === 1 ? 'card' : 'cards'} remaining`
                  }
                </div>

                <div className="scratch-card-area">
                  <ScratchCardStack
                    ref={stackRef}
                    cards={scratchCards}
                    onCardRevealed={handleCardRevealed}
                    onAllRevealed={handleAllRevealed}
                  />
                </div>
              </>
            )}

            {/* End State Components - shown after all cards revealed */}
            {allCardsRevealed && (
              <div className={`details-components ${detailsVisible ? 'visible' : ''}`}>
                <WeeklyRewards />
                <PromoCarousel />
                {/* <LockedButton timeRemaining={timeUntilReset} /> */}
              </div>
            )}

        {/* Reveal All Button - hidden after all cards revealed */}
        {!allCardsRevealed && (
          <div className="reveal-all-button-container">
            <RevealAllButton onClick={handleRevealAll} disabled={isRevealing} allRevealed={allCardsRevealed} />
          </div>
        )}
      </div>

      {/* Reward Celebration Overlay - above all content */}
      {celebrationOverlay.isVisible && (
        <RewardCelebrationOverlay
          isVisible={celebrationOverlay.isVisible}
          tier={celebrationOverlay.tier}
          rewardAmount={celebrationOverlay.rewardAmount}
          onDismiss={handleDismissCelebration}
        />
      )}

      {/* Prototype Navigation (dev only) */}
      {showPrototypeNav && (
        <PrototypeNav
          currentState={prototypeState}
          onStateChange={handlePrototypeStateChange}
          isVisible={showPrototypeNav}
        />
      )}
    </div>
  );
};


export default DailyDropsScreen;
