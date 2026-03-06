import { useState, useEffect } from 'react';
import DailyDropsScreen from './components/DailyDropsScreen';
import PasswordGate from './components/PasswordGate';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('loading'); // 'loading' or 'landing'

  const goToLoading = () => setCurrentScreen('loading');
  const goToLanding = () => setCurrentScreen('landing');

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToLoading();
      } else if (e.key === 'ArrowRight') {
        goToLanding();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PasswordGate>
      <div className="App">
        {/* Navigation Arrows for Testing */}
        <div className="nav-arrows">
          <button
            className="nav-arrow nav-arrow-left"
            onClick={goToLoading}
          >
            ← Loading
          </button>
          <button
            className="nav-arrow nav-arrow-right"
            onClick={goToLanding}
          >
            Landing →
          </button>
        </div>

        {/* Unified Screen with Transitions */}
        <div className="screen-container">
          <DailyDropsScreen state={currentScreen} />
        </div>
      </div>
    </PasswordGate>
  );
}

export default App;
