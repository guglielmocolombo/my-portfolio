// src/App.js
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import MainContent from './components/MainContent'; // Your main content component
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [showSplash, setShowSplash] = useState(false);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onEnd={handleSplashEnd} />
      ) : (
        <>
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;

