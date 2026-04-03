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
  disableCollection = false, // New prop to disable collection animation
  soundEnabled = true
}) {
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const particlesRef = useRef({
    pool: null,
    activeCount: 0,
    animationFrameId: null,
    gradientLookup: []
  });
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

    // Initialize particle canvas
    if (particleCanvasRef.current) {
      const particleCanvas = particleCanvasRef.current;
      const particleCtx = particleCanvas.getContext('2d', { alpha: true });
      const particleDpr = window.devicePixelRatio || 1;

      particleCanvas.width = 500 * particleDpr;
      particleCanvas.height = 500 * particleDpr;
      particleCanvas.style.width = '500px';
      particleCanvas.style.height = '500px';
      particleCtx.scale(particleDpr, particleDpr);

      // Initialize particle pool and gradient lookup
      initializeParticleSystem();

      // Start particle render loop
      startParticleRenderLoop();
    }

    return () => {
      // Cleanup
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (scratchSoundRef.current) {
        scratchSoundRef.current.stop();
      }
      stopParticleRenderLoop();
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

        // Spawn particles for this stroke
        spawnParticlesAtScratch(pos.x, pos.y, 2);

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

  // Play reveal sound when card is revealed
  useEffect(() => {
    if (isRevealed) {
      playRevealSound();
    }
  }, [isRevealed]); // eslint-disable-line react-hooks/exhaustive-deps

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

    // Spawn particles at scratch location
    spawnParticlesAtScratch(coords.x, coords.y, 4);

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
    if (!soundEnabled) return;
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

  // Play celebratory reveal sound — "ta-ta-TAAA" fanfare shape, G major, triangle wave
  const playRevealSound = () => {
    if (!soundEnabled) return;
    if (!audioContextRef.current) return;

    try {
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const playNote = (freq, startTime, ringOut, peak, type = 'triangle') => {
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

      // "ta" — G5, staccato punch
      playNote(783.99, t, 0.13, 0.20);

      // "ta" — B5, staccato punch
      playNote(987.77, t + 0.055, 0.13, 0.20);

      // "TAAA" — D6+G6+B6 chord stab, all at once, rings out
      playNote(1174.66, t + 0.115, 0.55, 0.22); // D6
      playNote(1567.98, t + 0.115, 0.55, 0.26); // G6
      playNote(1975.53, t + 0.115, 0.45, 0.16); // B6 — lighter overtone

    } catch (e) {
      // Silently fail
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

  // ========== PARTICLE SYSTEM ==========

  // Particle configuration constants
  const PARTICLE_CONFIG = {
    SPAWN_COUNT_MIN: 3,
    SPAWN_COUNT_MAX: 5,
    AUTO_SPAWN_COUNT: 2,
    MAX_PARTICLES: 300,
    SPAWN_SPREAD: 12,
    GRAVITY: 0.15,
    AIR_RESISTANCE: 0.98,
    INITIAL_SPEED_MIN: 2,
    INITIAL_SPEED_MAX: 5,
    LAUNCH_ANGLE_SPREAD: 0.5, // ±45° in radians
    DECAY_MIN: 0.008,
    DECAY_MAX: 0.016,
    SIZE_MIN: 2,
    SIZE_MAX: 4,
    MAX_OPACITY: 0.8
  };

  // Initialize particle pool and gradient lookup table
  const initializeParticleSystem = () => {
    const particles = particlesRef.current;

    // Create particle pool (300 pre-allocated objects)
    particles.pool = new Array(PARTICLE_CONFIG.MAX_PARTICLES);
    for (let i = 0; i < PARTICLE_CONFIG.MAX_PARTICLES; i++) {
      particles.pool[i] = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        decay: 0,
        size: 0,
        color: [255, 255, 255]
      };
    }
    particles.activeCount = 0;

    // Pre-compute gradient color lookup (236 colors, one per Y position)
    particles.gradientLookup = [];
    for (let y = 0; y < 236; y++) {
      particles.gradientLookup[y] = computeGradientColor(y);
    }
  };

  // Compute gradient color at Y position (matches scratch surface gradient)
  const computeGradientColor = (y) => {
    // Gradient stops matching lines 224-229 in drawScratchSurface
    const stops = [
      { pos: 0, color: [204, 232, 254] },
      { pos: 0.2416, color: [205, 160, 255] },
      { pos: 0.4, color: [132, 137, 245] },
      { pos: 0.7133, color: [205, 241, 255] },
      { pos: 1, color: [181, 145, 233] }
    ];

    const progress = y / 236;

    // Find surrounding stops
    let prevStop = stops[0];
    let nextStop = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) {
      if (progress >= stops[i].pos && progress <= stops[i + 1].pos) {
        prevStop = stops[i];
        nextStop = stops[i + 1];
        break;
      }
    }

    // Linear interpolation between stops
    const localProgress = (progress - prevStop.pos) / (nextStop.pos - prevStop.pos);
    return [
      Math.round(prevStop.color[0] + (nextStop.color[0] - prevStop.color[0]) * localProgress),
      Math.round(prevStop.color[1] + (nextStop.color[1] - prevStop.color[1]) * localProgress),
      Math.round(prevStop.color[2] + (nextStop.color[2] - prevStop.color[2]) * localProgress)
    ];
  };

  // Spawn particles at scratch location
  const spawnParticlesAtScratch = (x, y, count = 4) => {
    if (!particleCanvasRef.current || isRevealed) return;

    const particles = particlesRef.current;
    const numParticles = count + Math.floor(Math.random() * 2); // count to count+1

    for (let i = 0; i < numParticles; i++) {
      if (particles.activeCount >= PARTICLE_CONFIG.MAX_PARTICLES) break; // Pool exhausted

      const particle = particles.pool[particles.activeCount];

      // Position with slight randomness
      // Add 130px offset since canvas is now 500x500 with card centered at 130-366
      particle.x = x + 130 + (Math.random() - 0.5) * PARTICLE_CONFIG.SPAWN_SPREAD;
      particle.y = y + 130 + (Math.random() - 0.5) * PARTICLE_CONFIG.SPAWN_SPREAD;

      // Velocity - predominantly upward with spread
      const angle = Math.random() * Math.PI * PARTICLE_CONFIG.LAUNCH_ANGLE_SPREAD - Math.PI * 0.25; // ±45°
      const speed = PARTICLE_CONFIG.INITIAL_SPEED_MIN + Math.random() * (PARTICLE_CONFIG.INITIAL_SPEED_MAX - PARTICLE_CONFIG.INITIAL_SPEED_MIN);
      particle.vx = Math.sin(angle) * speed;
      particle.vy = -Math.abs(Math.cos(angle)) * speed; // Always upward

      // Lifetime
      particle.life = 1.0;
      particle.decay = PARTICLE_CONFIG.DECAY_MIN + Math.random() * (PARTICLE_CONFIG.DECAY_MAX - PARTICLE_CONFIG.DECAY_MIN);

      // Size
      particle.size = PARTICLE_CONFIG.SIZE_MIN + Math.random() * (PARTICLE_CONFIG.SIZE_MAX - PARTICLE_CONFIG.SIZE_MIN);

      // Color from gradient lookup
      const clampedY = Math.max(0, Math.min(235, Math.floor(y)));
      particle.color = particles.gradientLookup[clampedY];

      particles.activeCount++;
    }
  };

  // Start particle render loop
  const startParticleRenderLoop = () => {
    const particles = particlesRef.current;

    const renderLoop = () => {
      updateAndRenderParticles();
      particles.animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
  };

  // Stop particle render loop
  const stopParticleRenderLoop = () => {
    const particles = particlesRef.current;
    if (particles.animationFrameId) {
      cancelAnimationFrame(particles.animationFrameId);
      particles.animationFrameId = null;
    }
  };

  // Update and render all particles
  const updateAndRenderParticles = () => {
    if (!particleCanvasRef.current) return;

    const canvas = particleCanvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    const particles = particlesRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, 500, 500);

    // Update and draw particles (reverse iteration for efficient removal)
    for (let i = particles.activeCount - 1; i >= 0; i--) {
      const p = particles.pool[i];

      // Apply physics
      p.vy += PARTICLE_CONFIG.GRAVITY; // Gravity
      p.vx *= PARTICLE_CONFIG.AIR_RESISTANCE; // Air resistance
      p.vy *= PARTICLE_CONFIG.AIR_RESISTANCE;

      p.x += p.vx;
      p.y += p.vy;

      p.life -= p.decay;

      // Check if particle should be removed
      // Allow particles to fall well beyond card boundaries
      // With 500px canvas and 130px offset, center card is at 130-366
      // Allow particles to fall far down and drift sideways before removal
      const offCanvas = p.x < -50 || p.x > 550 || p.y > 600;
      const dead = p.life <= 0;

      if (dead || offCanvas) {
        // Swap with last active particle and decrement count
        const temp = particles.pool[i];
        particles.pool[i] = particles.pool[particles.activeCount - 1];
        particles.pool[particles.activeCount - 1] = temp;
        particles.activeCount--;
      } else {
        // Draw particle
        const alpha = Math.pow(p.life, 2) * PARTICLE_CONFIG.MAX_OPACITY; // Quadratic fade
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  // ========== END PARTICLE SYSTEM ==========

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

        // Clear all active particles
        const particles = particlesRef.current;
        if (particles.pool) {
          particles.activeCount = 0;
          if (particleCanvasRef.current) {
            const particleCtx = particleCanvasRef.current.getContext('2d', { alpha: true });
            particleCtx.clearRect(0, 0, 500, 500);
          }
        }

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

      {/* Particle dust canvas */}
      <canvas
        ref={particleCanvasRef}
        className="particle-canvas"
        aria-hidden="true"
      />

      {/* Stack shadow layers (only for back/middle cards) */}
      {stackPosition === 'back' && <div className="stack-shadow back" />}
      {stackPosition === 'middle' && <div className="stack-border middle" />}
    </div>
  );
}

export default ScratchCard;
