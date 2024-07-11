// src/App.js
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Rui from './components/Rui'
import MainContent from './components/MainContent'; // Your main content component
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <Rui/>
      ) : (
        <>
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;

