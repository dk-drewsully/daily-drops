import React from 'react';
import './PrototypeNav.css';
import DailyDropsLogo from '../assets/images/DailyDrops.svg';

/**
 * PrototypeNav Component
 * Dev-only side navigation for switching between celebration overlay states
 *
 * @param {Object} props
 * @param {string} props.currentState - Current active state
 * @param {Function} props.onStateChange - Callback when state changes
 * @param {boolean} props.isVisible - Show/hide navigation
 */
function PrototypeNav({ currentState, onStateChange, isVisible, soundEnabled = true, onToggleSound }) {
  if (!isVisible) return null;

  const states = [
    { id: 'default', label: 'Default', description: 'Normal flow' },
    { id: 'details', label: 'Details Screen', description: 'End state' },
    { id: 'reward', label: 'Reward', description: 'Celebration', tier: 'reward' }
  ];

  return (
    <div className="prototype-nav">
      <div className="prototype-nav-header">
        <img src={DailyDropsLogo} alt="Daily Drops" className="prototype-nav-logo" />
      </div>

      <div className="prototype-nav-states">
        {states.map(state => (
          <button
            key={state.id}
            className={`prototype-nav-button ${state.tier || 'default'} ${currentState === state.id ? 'active' : ''} ${state.wip ? 'wip' : ''}`}
            onClick={() => onStateChange(state.id)}
          >
            {state.wip && (
              <>
                <span className="wip-tape wip-tape-top-left"></span>
                <span className="wip-tape wip-tape-bottom-right"></span>
              </>
            )}
            <span className="prototype-nav-button-label">{state.label}</span>
            {state.wip && <span className="wip-hover-label">WIP</span>}
          </button>
        ))}
      </div>

      <button
        className={`nav-sound-toggle ${soundEnabled ? 'on' : 'off'}`}
        onClick={onToggleSound}
        aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
      >
        <span className="nav-sound-icon">{soundEnabled ? '🔊' : '🔇'}</span>
        <span className="nav-sound-label">{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
      </button>
    </div>
  );
}

export default PrototypeNav;
