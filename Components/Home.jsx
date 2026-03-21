import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = ({ mode = 'overworld', onNavigate }) => {

  return (
    <div className={`home-container ${mode}`}>
      {/* Main Title */}
      <motion.div
        className="title-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="minecraft-title">
          Hi, I'm Chida
        </h1>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="action-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <a href="/Chidananda_resume.pdf" target="_blank" rel="noopener noreferrer" className="minecraft-button download-resume" aria-label="View and download Chidananda Singh's resume">
          <img src="/assets/minecraft_cherry_sign.png" alt="Resume Icon" className="button-icon" />
          View Resume
        </a>
        <button className="minecraft-button contact-me" onClick={() => onNavigate && onNavigate('contact')} aria-label="Navigate to the contact section">
          <img src="/assets/minecraft_writable_book.png" alt="Contact Icon" className="button-icon" />
          Contact Me
        </button>
      </motion.div>
    </div>
  );
};

export default Home;