import React, { useState, useEffect } from 'react';
import './preloadingani.css';
import revelsound from '../Assets/revelosound.mp3';

const Preloadingani = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Change delay as needed
    return () => clearTimeout(timer);
  }, []);

  const playSound = () => {
    const audio = new Audio(revelsound);
    audio.play()
      .catch(error => console.log("Failed to play sound:", error));
  };

  useEffect(() => {
    if (isVisible) {
      playSound();
    }
  }, [isVisible]);

  return (
    <div className="text-container" onClick={playSound}>
      <h1 className="text">
        {isVisible &&
          "Rupesh Borkar".split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
      </h1>
    </div>
  );
}

export default Preloadingani;
