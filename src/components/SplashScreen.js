// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css'; // Add your CSS here for styling

const SplashScreen = ({ onEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, 15000); // Duration of your video in milliseconds

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div className="splash-screen">
      <video className="splash-video" autoPlay muted onEnded={onEnd}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SplashScreen;
