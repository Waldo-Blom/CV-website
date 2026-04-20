'use client';

import { useTheme } from '@/components/sections/ThemeContext';
import { useEffect, useState } from 'react';

export const PageBackground = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-700"
      style={{
        background: darkMode
          ? '#000'
          : `linear-gradient(180deg, 
        #1e4877 0%, 
        #4584b4 15%, 
        #87CEEB 30%, 
        #ffd3a573 50%, 
        #ff8a42ad 70%, 
        #ff4400b7 100%)`,
      }}
    >
      {darkMode ? <NightSky /> : <DaySky />} 
      {/* // TODO: Change the color of the text */}
    </div>
  );
};

const NightSky = () => {
  const [stars, setStars] = useState<
    {
      width: number;
      height: number;
      top: number;
      left: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    setStars(
      [...Array(300)].map(() => ({
        width: Math.random() * 2.5 + 0.5,
        height: Math.random() * 2.5 + 0.5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.width}px`,
            height: `${star.height}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const DaySky = () => {
  return (
    <div className="fixed inset-0">
      {/* //TODO: Add some clouds and a sun */}
    </div>
  );
};

