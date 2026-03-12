import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import ScratchCard from './ScratchCard';
import './ScratchCardStack.css';

/**
 * Scratch Card Stack Component
 * Manages multiple scratch cards with stacking effect and progression
 *
 * @param {Object} props
 * @param {Array} props.cards - Array of card objects { id, tier, reward }
 * @param {Function} props.onCardRevealed - Callback when card revealed (tier, reward)
 * @param {Function} props.onAllRevealed - Callback when all cards revealed
 */
const ScratchCardStack = forwardRef(({
  cards = [
    { id: 1, tier: 'common', reward: 10 },
    { id: 2, tier: 'rare', reward: 25 },
    { id: 3, tier: 'epic', reward: 50 }
  ],
  onCardRevealed,
  onAllRevealed,
  soundEnabled = true
}, ref) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState([]);
  const [hidingCards, setHidingCards] = useState([]); // Cards that should slide out
  const [resetKey, setResetKey] = useState(0);
  const [autoScratchingCards, setAutoScratchingCards] = useState([]);
  const [isAutoRevealing, setIsAutoRevealing] = useState(false);
  const autoRevealTimeoutRef = useRef(null);

  // Handle card reveal
  const handleReveal = (cardId, tier, reward) => {
    // Mark card as revealed
    setRevealedCards(prev => [...prev, cardId]);

    // Trigger callback
    if (onCardRevealed) {
      onCardRevealed(tier, reward);
    }

    // Find the index of the revealed card
    const revealedCardIndex = cards.findIndex(card => card.id === cardId);

    // For auto-reveal: pause 4s on revealed card before slide-out
    // For manual: start slide-out immediately
    const pauseBeforeSlideOut = isAutoRevealing ? 4000 : 0;

    setTimeout(() => {
      // Start slide-out animation
      setHidingCards(prev => [...prev, cardId]);

      // Move to next card after slide-out completes
      if (revealedCardIndex < cards.length - 1) {
        // Wait for slide-out animation to complete before shifting stack
        setTimeout(() => {
          // Now move to next card position
          setActiveCardIndex(revealedCardIndex + 1);

          // If in auto-reveal mode, trigger next card after position transition completes
          if (isAutoRevealing) {
            autoRevealTimeoutRef.current = setTimeout(() => {
              const nextCard = cards[revealedCardIndex + 1];
              if (nextCard) {
                setAutoScratchingCards([nextCard.id]);
              }
            }, 700); // Wait for card position transition
          }
        }, 600); // Wait for slide-out animation to complete
      } else {
        // All cards revealed - wait for slide-out animation to complete (600ms) + small buffer
        setIsAutoRevealing(false);
        setTimeout(() => {
          if (onAllRevealed) {
            onAllRevealed();
          }
        }, 700);
      }
    }, pauseBeforeSlideOut);
  };

  // Reset entire stack to initial state
  const handleResetStack = () => {
    setActiveCardIndex(0);
    setRevealedCards([]);
    setHidingCards([]);
    setAutoScratchingCards([]);
    setIsAutoRevealing(false);
    setResetKey(prev => prev + 1); // Force re-render of all cards
    if (autoRevealTimeoutRef.current) {
      clearTimeout(autoRevealTimeoutRef.current);
    }
  };

  // Expose revealAll method to parent
  useImperativeHandle(ref, () => ({
    revealAll: () => {
      setIsAutoRevealing(true);
      setAutoScratchingCards([]);
      // Start with first unrevealed card (not first card overall)
      const firstUnrevealedCard = cards.find(card => !revealedCards.includes(card.id));
      if (firstUnrevealedCard) {
        setTimeout(() => {
          setAutoScratchingCards([firstUnrevealedCard.id]);
        }, 100);
      } else {
        // All cards already revealed, call onAllRevealed
        setIsAutoRevealing(false);
        if (onAllRevealed) {
          onAllRevealed();
        }
      }
    }
  }), [cards, revealedCards, onAllRevealed]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoRevealTimeoutRef.current) {
        clearTimeout(autoRevealTimeoutRef.current);
      }
    };
  }, []);

  // Determine stack position for each card
  const getStackPosition = (index) => {
    if (index < activeCardIndex) {
      return 'back'; // Already revealed cards go to back
    } else if (index === activeCardIndex) {
      return 'front'; // Current active card
    } else if (index === activeCardIndex + 1) {
      return 'middle'; // Next card in queue
    } else {
      return 'back'; // Cards further in queue
    }
  };

  return (
    <div
      className="scratch-card-stack"
      role="region"
      aria-label="Scratch cards to reveal"
    >
      {cards.map((card, index) => {
        const isRevealed = revealedCards.includes(card.id);
        const isActive = index === activeCardIndex;
        // Check if this card should be sliding out
        const shouldHide = hidingCards.includes(card.id);

        // Cards that are hiding don't get a stack position - they're exiting
        const stackPosition = shouldHide ? 'hiding' : getStackPosition(index);

        return (
          <div
            key={`${card.id}-${resetKey}`}
            className={`scratch-card-wrapper ${card.tier} ${stackPosition} ${isRevealed ? 'revealed' : ''} ${shouldHide ? 'hide' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <ScratchCard
              tier={card.tier}
              rewardAmount={card.reward}
              stackPosition={stackPosition}
              isActive={isActive && !isRevealed}
              onReveal={(tier, reward) => handleReveal(card.id, tier, reward)}
              onReset={isActive ? handleResetStack : undefined}
              autoScratch={autoScratchingCards.includes(card.id)}
              disableCollection={isAutoRevealing}
              soundEnabled={soundEnabled}
            />
          </div>
        );
      })}
    </div>
  );
});

ScratchCardStack.displayName = 'ScratchCardStack';

export default ScratchCardStack;
