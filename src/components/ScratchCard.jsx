import React, { useRef, useState, useEffect } from 'react';
import './ScratchCard.css';
import commonFace from '../assets/images/common-face.svg';
import rareFace from '../assets/images/rare-face.svg';
import epicFace from '../assets/images/epic-face.svg';
import legendaryFace from '../assets/images/legendary-face.svg';
import starVectorBurst from '../assets/images/star-vector-burst.svg';
import starDeco1 from '../assets/images/star-decorative-1.svg';
import starDeco2 from '../assets/images/star-decorative-2.svg';

/**
 * Scratch Card Component
 * Interactive scratch-off card that reveals rewards underneath
 *
 * @param {Object} props
 * @param {'common' | 'rare' | 'epic' | 'legendary'} props.tier - Reward tier
 * @param {number} props.rewardAmount - Number of crowns/rewards
 * @param {Function} props.onReveal - Callback when fully scratched (tier, reward)
 * @param {'back' | 'middle' | 'front'} props.stackPosition - Position in stack
 * @param {boolean} props.isActive - Whether this card can be scratched
 * @param {boolean} props.autoScratch - Trigger automatic scratching animation
 */
function ScratchCard({
  tier = 'common',
  rewardAmount = 10,
  onReveal,
  stackPosition = 'front',
  isActive = true,
  onReset, // Optional callback when card is reset
  autoScratch = false,
  disableCollection = false // New prop to disable collection animation
}) {
  const canvasRef = useRef(null);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const strokeCountRef = useRef(0);
  const audioContextRef = useRef(null);
  const scratchSoundRef = useRef(null);

  // Map tier to character face
  const characterFaces = {
    common: commonFace,
    rare: rareFace,
    epic: epicFace,
    legendary: legendaryFace
  };

  // Map tier to label
  const tierLabels = {
    common: 'COMMON',
    rare: 'RARE',
    epic: 'EPIC',
    legendary: 'LEGENDARY'
  };

  // Initialize canvas with scratch surface
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size with pixel ratio scaling
    canvas.width = 236 * dpr;
    canvas.height = 236 * dpr;
    canvas.style.width = '236px';
    canvas.style.height = '236px';
    ctx.scale(dpr, dpr);

    // Draw scratch surface (metallic gradient)
    drawScratchSurface(ctx);

    // Initialize Web Audio API for scratch sound
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
    } catch (e) {
      console.warn('Web Audio API not supported');
    }

    return () => {
      // Cleanup
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (scratchSoundRef.current) {
        scratchSoundRef.current.stop();
      }
    };
  }, []);

  // Auto-scratch effect - continuous zig-zag motion from top-left to bottom-right
  useEffect(() => {
    if (!autoScratch || isRevealed || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrame;
    const thumbRadius = 45; // Even larger thumb for guaranteed coverage
    const startTime = Date.now();
    let lastCheckTime = 0;
    let previousPositions = [null, null, null, null, null, null, null]; // Track 7 parallel strokes

    // Zig-zag motion parameters
    const startX = 118; // Center of card
    const startY = 10;
    const endY = 226; // Go further down for complete coverage
    const zigzagAmplitude = 100; // Maximum width coverage
    const zigzagFrequency = 8; // More zig-zags for better coverage

    const animateScratch = () => {
      const elapsed = Date.now() - startTime;

      // Calculate current position along vertical path with zig-zag
      const totalDistance = endY - startY;
      const currentY = startY + totalDistance * (elapsed / 2000); // Move over 2 seconds

      // Zig-zag horizontally using sine wave
      const verticalProgress = (currentY - startY) / totalDistance;
      const zigzagOffset = Math.sin(verticalProgress * Math.PI * zigzagFrequency) * zigzagAmplitude;

      // Create 7 parallel strokes for maximum coverage
      const positions = [
        { x: startX + zigzagOffset, y: currentY }, // Main center stroke
        { x: startX + zigzagOffset - 60, y: currentY + 2 }, // Left far
        { x: startX + zigzagOffset + 60, y: currentY - 2 }, // Right far
        { x: startX + zigzagOffset - 40, y: currentY + 4 }, // Left mid
        { x: startX + zigzagOffset + 40, y: currentY - 4 }, // Right mid
        { x: startX + zigzagOffset - 20, y: currentY + 6 }, // Left near
        { x: startX + zigzagOffset + 20, y: currentY - 6 }  // Right near
      ];

      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = thumbRadius * 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw all 7 parallel strokes
      positions.forEach((pos, index) => {
        const prevPos = previousPositions[index];

        // Draw continuous line from previous position to current
        if (prevPos !== null) {
          ctx.beginPath();
          ctx.moveTo(prevPos.x, prevPos.y);
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
        }

        // Also draw circle at current position for full coverage
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, thumbRadius, 0, Math.PI * 2);
        ctx.fill();

        previousPositions[index] = pos;
      });

      // Play scratch sound occasionally
      if (Math.random() < 0.15) {
        playScratchSound();
      }

      // Check scratch progress every 60ms for better responsiveness
      if (elapsed - lastCheckTime > 60) {
        lastCheckTime = elapsed;
        const scratchPercentage = calculateScratchProgress(ctx, canvas);

        // Stop when we hit reveal threshold (50% for auto-scratch to ensure it triggers)
        // Also force reveal after 1.8 seconds to prevent getting stuck
        if (scratchPercentage >= 50 || elapsed >= 1800) {
          // Trigger reveal - canvas will fade with card wrapper slide-out
          setIsRevealed(true);
          resetTilt();
          // Call onReveal immediately - this triggers slide-out animation
          if (onReveal) {
            onReveal(tier, rewardAmount);
          }
          return; // Stop animation
        }
      }

      // Continue animation if card bottom not reached and threshold not hit
      if (currentY < endY) {
        animationFrame = requestAnimationFrame(animateScratch);
      } else {
        // Force reveal if we reached the end but didn't hit threshold
        setIsRevealed(true);
        resetTilt();
        // Call onReveal immediately
        if (onReveal) {
          onReveal(tier, rewardAmount);
        }
      }
    };

    // Start auto-scratching after a brief delay
    const timeoutId = setTimeout(() => {
      animateScratch();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [autoScratch, isRevealed, tier, rewardAmount, onReveal]);

  // Draw the metallic scratch surface
  const drawScratchSurface = (ctx) => {
    // Create gradient matching Figma design
    const gradient = ctx.createLinearGradient(0, 0, 236, 236);
    gradient.addColorStop(0, 'rgba(204, 232, 254, 1)');
    gradient.addColorStop(0.2416, 'rgba(205, 160, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(132, 137, 245, 1)');
    gradient.addColorStop(0.7133, 'rgba(205, 241, 255, 1)');
    gradient.addColorStop(1, 'rgba(181, 145, 233, 1)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 236, 236);
  };

  // Calculate scratch progress by analyzing transparent pixels
  const calculateScratchProgress = (ctx, canvas) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    const totalPixels = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) { // Consider pixels with low alpha as scratched
        transparentPixels++;
      }
    }

    return (transparentPixels / totalPixels) * 100;
  };

  // Get coordinates from mouse or touch event
  const getEventCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Start scratching
  const startScratch = (e) => {
    if (!isActive || isRevealed) return;
    e.preventDefault();
    setIsScratching(true);
    handleScratch(e);
  };

  // Handle scratch movement
  const handleScratch = (e) => {
    if (!isActive || isRevealed || !isScratching && e.type.includes('move')) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const coords = getEventCoords(e);

    // Erase scratch surface with brush
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(coords.x, coords.y, 20, 0, Math.PI * 2);
    ctx.fill();

    strokeCountRef.current++;

    // Play scratch sound every few strokes
    if (strokeCountRef.current % 3 === 0) {
      playScratchSound();
    }

    // Calculate tilt based on mouse position
    if (e.clientX !== undefined) {
      handleMouseMove(e);
    }

    // Calculate progress every 10 strokes (throttle for performance)
    if (strokeCountRef.current % 10 === 0) {
      const progress = calculateScratchProgress(ctx, canvas);
      setScratchProgress(progress);

      // Trigger reveal at 60% threshold
      if (progress >= 60 && !isRevealed) {
        setIsRevealed(true);
        resetTilt();
        // Fade canvas out over 400ms
        if (canvas) {
          canvas.style.opacity = '0';
        }
        // For manual scratch: Hold revealed card briefly (1.5s), then immediately trigger slide-out
        // Skip collection animation - the wrapper slide-out will handle the visual transition
        setTimeout(() => {
          if (onReveal) {
            onReveal(tier, rewardAmount);
          }
        }, 1500);
      }
    }
  };

  // End scratching
  const endScratch = (e) => {
    if (e) e.preventDefault();
    setIsScratching(false);
    resetTilt();
  };

  // Play scratch sound effect
  const playScratchSound = () => {
    if (!audioContextRef.current) return;

    try {
      const audioCtx = audioContextRef.current;

      // Create white noise for scratch effect
      const bufferSize = audioCtx.sampleRate * 0.05; // 50ms
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.1; // Low volume white noise
      }

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;

      // Add low-pass filter for more natural scratch sound
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 2000;

      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.15; // Adjust volume

      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      source.start();
      scratchSoundRef.current = source;
    } catch (e) {
      // Silently fail if audio doesn't work
    }
  };

  // Calculate tilt based on mouse position
  const handleMouseMove = (e) => {
    if (!isActive || isRevealed || !isScratching) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate tilt (-6 to 6 degrees)
    const maxTilt = 6;
    const tiltXValue = ((e.clientY - centerY) / (rect.height / 2)) * maxTilt;
    const tiltYValue = -((e.clientX - centerX) / (rect.width / 2)) * maxTilt;

    setTiltX(tiltXValue);
    setTiltY(tiltYValue);
  };

  // Reset tilt when mouse leaves
  const resetTilt = () => {
    setTiltX(0);
    setTiltY(0);
  };

  // Reset stack (if onReset provided by parent stack)
  const resetCard = () => {
    if (onReset) {
      // Trigger stack reset - parent will handle re-rendering all cards
      onReset();
    } else {
      // Standalone card reset (fallback for single card usage)
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.style.transition = 'opacity 0.2s ease-out';
      canvas.style.opacity = '0';

      setTimeout(() => {
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const dpr = window.devicePixelRatio || 1;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(dpr, dpr);
        drawScratchSurface(ctx);

        setIsRevealed(false);
        setIsCollecting(false);
        setScratchProgress(0);
        strokeCountRef.current = 0;
        resetTilt();

        setTimeout(() => {
          canvas.style.transition = 'opacity 0.3s ease-in';
          canvas.style.opacity = '1';
        }, 50);
      }, 200);
    }
  };

  // Keyboard accessibility - reveal on Enter/Space, reset on R
  const handleKeyDown = (e) => {
    if (!isActive) return;

    if (e.key === 'Enter' || e.key === ' ') {
      if (!isRevealed) {
        e.preventDefault();
        setIsRevealed(true);
        if (onReveal) {
          onReveal(tier, rewardAmount);
        }
        if (canvasRef.current) {
          canvasRef.current.style.opacity = '0';
        }
      }
    } else if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      resetCard();
    }
  };

  // Calculate transform with tilt (only for front card)
  const cardStyle = stackPosition === 'front' && isScratching ? {
    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  } : {};

  return (
    <div
      className={`scratch-card ${tier} ${stackPosition} ${isRevealed ? 'revealed' : ''} ${isScratching ? 'scratching' : ''} ${isCollecting ? 'collecting' : ''} ${disableCollection ? 'instant-reveal' : ''}`}
      style={cardStyle}
      role="button"
      tabIndex={isActive ? 0 : -1}
      onKeyDown={handleKeyDown}
      aria-label={`Scratch to reveal ${tier} reward`}
    >
      {/* Revealed content (always rendered, below canvas) */}
      <div className="scratch-card-reveal">
        {/* Background gradient layer */}
        <div className={`reveal-background ${tier}`} />

        {/* Radial starburst effect (Star Vector from Figma) */}
        <img src={starVectorBurst} alt="" className={`reveal-starburst ${tier}`} aria-hidden="true" />

        {/* Character face */}
        <img
          src={characterFaces[tier]}
          alt={`${tierLabels[tier]} character`}
          className="reveal-character"
        />

        {/* Star decorations */}
        <img src={starDeco1} alt="" className="reveal-star-1" aria-hidden="true" />
        <img src={starDeco2} alt="" className="reveal-star-2" aria-hidden="true" />

        {/* Reward info */}
        <div className="reveal-info">
          <div className="reveal-tier-label">{tierLabels[tier]}</div>
          <div className="reveal-crowns">{rewardAmount} CROWNS</div>
        </div>
      </div>

      {/* Scratch surface canvas */}
      <canvas
        ref={canvasRef}
        className="scratch-canvas"
        onPointerDown={startScratch}
        onPointerMove={handleScratch}
        onPointerUp={endScratch}
        onPointerLeave={endScratch}
        aria-hidden="true"
      />

      {/* Stack shadow layers (only for back/middle cards) */}
      {stackPosition === 'back' && <div className="stack-shadow back" />}
      {stackPosition === 'middle' && <div className="stack-border middle" />}
    </div>
  );
}

export default ScratchCard;
