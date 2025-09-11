import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  // Import the background directly
  const backgroundImageUrl = '/background/evening_sunset_background.jpg';

  return (
    <div 
      className="home-container"
      style={{
        background: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >      
      <div className="home-content">
        
        <motion.h1 
          className="minecraft-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          CHIDANANDA SINGH A
        </motion.h1>
        
        <motion.h2
          className="minecraft-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Full-Stack Developer & UI/UX Designer
        </motion.h2>
      </div>

      {/* Removed middle navigation section as requested */}
    </div>
  );
};

export default Home;
