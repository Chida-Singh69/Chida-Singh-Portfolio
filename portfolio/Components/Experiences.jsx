import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiencesData = [
  {
    id: 1,
    company: "Shree Sai Sadhabana School",
    role: "Web Dev Intern",
    period: "Nov 2024 - Mar 2025",
    skills: ["Web Design", "Frontend", "UI Design", "JavaScript"],
    points: [
      "Redesigned website navigation and layout",
      "Enhanced UI responsiveness",
      "Implemented mobile-responsive design",
      "Optimized page load times"
    ],
    icon: "🖥️"
  },
  {
    id: 2,
    company: "Open Source Contributor",
    role: "React Developer",
    period: "Jun 2024 - Oct 2024",
    skills: ["React", "JavaScript", "Git"],
    points: [
      "Contributed to open-source React projects",
      "Fixed reported issues and bugs",
      "Implemented new component features",
      "Collaborated with international developers"
    ],
    icon: "⚛️"
  }
  // Add more experiences as needed
];

const Experiences = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  
  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiencesData.length);
  };
  
  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiencesData.length) % experiencesData.length);
  };
  
  return (
    <div className="minecraft-experiences">
      <h1 className="minecraft-section-title">MY EXPERIENCE</h1>
      
      <div className="minecraft-experience-container">
        {/* Left side - Skills Grid */}
        <div className="experience-skills-grid">
          {experiencesData[currentExperience].skills.map((skill, index) => (
            <div key={index} className="skill-slot">
              <div className="skill-icon">
                {index === 0 && "🖥️"}
                {index === 1 && "🎨"}
                {index === 2 && "📱"}
                {index === 3 && "🟢"}
              </div>
              <div className="skill-label">{skill}</div>
            </div>
          ))}
        </div>
        
        {/* Right side - Experience details */}
        <motion.div 
          className="minecraft-experience-details"
          key={currentExperience}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="experience-header">
            <div className="experience-icon">{experiencesData[currentExperience].icon}</div>
            <div className="experience-title">
              <h3>{experiencesData[currentExperience].role} @ {experiencesData[currentExperience].company}</h3>
              <p className="experience-period">{experiencesData[currentExperience].period}</p>
            </div>
          </div>
          
          <div className="experience-bullet-points">
            {experiencesData[currentExperience].points.map((point, index) => (
              <div key={index} className="experience-point">
                • {point}
              </div>
            ))}
          </div>
          
          <div className="experience-navigation">
            <button onClick={prevExperience} className="nav-button">
              &lt; PREV
            </button>
            <button onClick={nextExperience} className="nav-button">
              NEXT &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
