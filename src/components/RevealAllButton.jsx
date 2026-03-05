import React from 'react';
import './RevealAllButton.css';

/**
 * Reveal All Button Component
 * Button to instantly reveal all scratch cards
 *
 * @param {Object} props
 * @param {Function} props.onClick - Callback when button is clicked
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.allRevealed - Whether all cards have been revealed
 */
function RevealAllButton({ onClick, disabled = false, allRevealed = false }) {
  const buttonText = allRevealed ? 'BACK TO HOME' : 'REVEAL ALL';
  const ariaLabel = allRevealed ? 'Back to home' : 'Reveal all scratch cards';

  return (
    <button
      className={`reveal-all-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className="reveal-all-button-text">{buttonText}</span>
    </button>
  );
}

export default RevealAllButton;
