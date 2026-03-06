import React, { useState, useEffect } from 'react';
import './PasswordGate.css';
import DailyDropsLogo from '../assets/images/DailyDrops.svg';

const PasswordGate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem('dailyDropsAuth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password check
    if (password === '1') {
      sessionStorage.setItem('dailyDropsAuth', 'authenticated');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="password-gate">
      <div className="password-gate-content">
        <div className="password-gate-logo">
          <div className="logo-wrapper">
            <img src={DailyDropsLogo} alt="Daily Drops" className="daily-drops-logo" />
          </div>
          <p>Protected Prototype</p>
        </div>

        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="password-input"
            autoFocus
          />
          {error && <div className="password-error">{error}</div>}
          <button type="submit" className="password-submit">
            Access Prototype
          </button>
        </form>

        <div className="password-footer">
          <p>Design prototype for authorized viewers only</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
