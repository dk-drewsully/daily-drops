import { useState, useRef, useEffect } from 'react';
import './RewardCelebrationOverlay.css';
import StarBurst from '../assets/images/reward-star-burst.svg';
import CoinsGroup from '../assets/images/reward-coins-group.svg';
import ConfettiGroup from '../assets/images/reward-confetti-group.svg';

/**
 * Reward Celebration Overlay
 * Figma: "Winning Popup Screen" node-id=488:19003 (343×517px)
 */
function RewardCelebrationOverlay({ isVisible = false, tier = 'common', rewardAmount = 50, onDismiss, soundEnabled = true }) {
  const [isExiting, setIsExiting] = useState(false);
  const audioContextRef = useRef(null);

  const playRewardSound = (soundTier) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || /** @type {any} */ (window).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const playNote = (freq, startTime, ringOut, peak, type = 'sine') => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(peak, startTime + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + ringOut);
        osc.start(startTime);
        osc.stop(startTime + ringOut + 0.01);
      };

      const t = ctx.currentTime;

      if (soundTier === 'common') {
        // Slow ringing bell toll — C major, sine wave, warm & distinct from reveal
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          playNote(freq, t + i * 0.12, 0.55, 0.14, 'sine');
        });

      } else if (soundTier === 'rare') {
        // Two quick punches + sustained chord resolve — sparkly upgrade
        playNote(880.00,   t,        0.15, 0.18, 'triangle'); // A5
        playNote(1108.73,  t + 0.07, 0.15, 0.18, 'triangle'); // C#6
        playNote(1318.51,  t + 0.14, 0.75, 0.20, 'sine');     // E6 \
        playNote(1760.00,  t + 0.14, 0.75, 0.22, 'sine');     // A6  chord
        playNote(2217.46,  t + 0.14, 0.55, 0.12, 'sine');     // C#7 /

      } else if (soundTier === 'epic') {
        // Bass impact + 5-note cascade + triumphant chord ring-out
        playNote(196.00, t, 0.22, 0.22, 'sine'); // G3 bass thump
        [783.99, 987.77, 1174.66, 1567.98, 1975.53].forEach((freq, i) => {
          playNote(freq, t + 0.05 + i * 0.055, 0.38, 0.16 + i * 0.01, 'triangle');
        });
        const chord = t + 0.05 + 5 * 0.055;
        [1174.66, 1567.98, 1975.53, 2349.32].forEach((freq, i) => {
          playNote(freq, chord, 1.1 - i * 0.1, 0.20 - i * 0.03, 'sine');
        });

      } else if (soundTier === 'legendary') {
        // Deep double bass + 7-note cascade + massive chord — maximum drama
        playNote(130.81, t,        0.35, 0.22, 'sine'); // C3 deep bass
        playNote(261.63, t + 0.02, 0.28, 0.17, 'sine'); // C4 bass layer
        [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00].forEach((freq, i) => {
          playNote(freq, t + 0.08 + i * 0.06, 0.42 + i * 0.05, 0.14 + i * 0.012, 'triangle');
        });
        const megaChord = t + 0.08 + 7 * 0.06;
        [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
          playNote(freq, megaChord, 1.6 - i * 0.15, 0.21 - i * 0.03, 'sine');
        });
      }
    } catch (e) {
      // Silently fail
    }
  };

  useEffect(() => {
    if (isVisible) {
      playRewardSound(tier);
    }
  }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      if (onDismiss) onDismiss();
    }, 350);
  };

  if (!isVisible && !isExiting) return null;

  return (
    <div
      className={`reward-celebration-overlay${isExiting ? ' exiting' : ''}`}
      onClick={handleDismiss}
    >
      {/* Full-screen background glow — covers entire overlay top to bottom,
          no hard edges, no fixed bounding box */}
      <div className="modal-bg-glow" />

      {/* 343×517px popup card */}
      <div className="winning-popup" onClick={e => e.stopPropagation()}>

        {/* Orb accents: blurred color blobs inside the popup area */}
        <div className="orb orb-yellow" />
        <div className="orb orb-cyan-mid" />
        <div className="orb orb-cyan-bottom" />

        {/* Starburst: 619×620 at (-138, -52) relative to popup */}
        <img className="star-burst" src={StarBurst} alt="" />

        {/* Coins: 422×516 at (-54, 0) relative to popup */}
        <img className="coins-group" src={CoinsGroup} alt="" />

        {/* Confetti: 409×431 at (-41, 31) relative to popup */}
        <img className="confetti-group" src={ConfettiGroup} alt="" />

        {/* Text: centered, starts at y=120 relative to popup */}
        <div className="reward-text">
          <span className="you-won-label">YOU WON</span>
          <span className="popup-reward-amount">${rewardAmount}</span>
          <span className="credits-label">LOTTERY CREDITS</span>
        </div>

      </div>
    </div>
  );
}

export default RewardCelebrationOverlay;
