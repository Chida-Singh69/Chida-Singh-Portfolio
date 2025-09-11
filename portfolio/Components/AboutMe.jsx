import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="minecraft-about">
      <h1 className="minecraft-section-title">ABOUT ME</h1>
      
      <div className="minecraft-about-container">
        <div className="minecraft-about-scroll">
          <div className="minecraft-scroll-content">
            <h3>WHO AM I?</h3>
            <p>
              I'm Chidananda, a full-stack developer and UI/UX designer based in Bengaluru, Karnataka. 
              I specialize in creating interactive web applications with clean, efficient code and 
              intuitive user experiences.
            </p>
            
            <h3>MY JOURNEY</h3>
            <p>
              My journey in programming began with a love for problem-solving and creative design. 
              I've honed my skills through academic studies in Computer Science and hands-on project work, 
              constantly exploring new technologies and methodologies.
            </p>
            
            <h3>WHAT I DO</h3>
            <p>
              I build responsive web applications using modern JavaScript frameworks like React, 
              along with backend technologies like Node.js and Firebase. I focus on creating 
              applications that are not only functional but also delightful to use.
            </p>
            
            <h3>WHEN NOT CODING</h3>
            <p>
              When I'm not writing code, you might find me playing Minecraft (obviously!), 
              exploring new tech, or contributing to open-source projects. I'm passionate about 
              continuous learning and staying at the forefront of web development trends.
            </p>
          </div>
        </div>
        
        <div className="minecraft-about-education">
          <div className="education-header">
            <div className="education-icon">📚</div>
            <h3>EDUCATION</h3>
          </div>
          
          <div className="education-content">
            <div className="education-item">
              <div className="education-degree">Bachelor of Computer Science</div>
              <div className="education-school">University Name</div>
              <div className="education-year">2020 - 2024</div>
            </div>
            
            <div className="education-item">
              <div className="education-degree">Web Development Certification</div>
              <div className="education-school">Online Platform</div>
              <div className="education-year">2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
