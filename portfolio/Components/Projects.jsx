import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Project data structure
const projectsData = [
  {
    id: 1,
    title: "SYMBIONT",
    description: "Virtual Pet Health & Wellness Platform\nReact, Express.js, Firebase Gemini AI\nReact Express.js, Firebase, Node.js\nPrototyped in 24 hours (10+ testers)\nNutrition tracking via NutritionIx API\nScalable Firebase backend",
    icon: "🧪",
    techIcons: ["⚛️", "🔥", "🟢", "❤️"],
    github: "https://github.com/yourusername/symbiont",
    demo: "https://symbiont-demo.com"
  },
  {
    id: 2,
    title: "Talk Tush Therapist",
    description: "AI-powered chatbot therapist using natural language processing to provide mental health support",
    icon: "🧠",
    techIcons: ["⚛️", "🤖", "🟢"],
    github: "https://github.com/yourusername/talktush",
    demo: "https://talktush-demo.com"
  },
  {
    id: 3,
    title: "Automated Processing System",
    description: "Automated data processing system for large datasets with visualization tools",
    icon: "📊",
    techIcons: ["🐍", "📈", "🔄"],
    github: "https://github.com/yourusername/aps",
    demo: "https://aps-demo.com"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [page, setPage] = useState(1);
  const projectsPerPage = 25; // Show 25 project slots in a 5x5 grid
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };
  
  const nextPage = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  
  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  // Create a 5x5 grid (25 slots)
  const renderInventorySlots = () => {
    const slots = [];
    const startIdx = (page - 1) * projectsPerPage;
    
    // Create a 5x5 grid
    for (let i = 0; i < 25; i++) {
      const projectIndex = startIdx + i;
      const project = projectsData[projectIndex];
      
      slots.push(
        <div 
          key={i} 
          className={`inventory-slot ${project ? 'has-item' : ''}`}
          onClick={() => project && setCurrentProject(projectIndex)}
        >
          {project && (
            <div className={`inventory-item ${currentProject === projectIndex ? 'selected' : ''}`}>
              <span className="item-icon">{project.icon}</span>
              {currentProject === projectIndex && (
                <span className="item-hover-tooltip">{project.title}</span>
              )}
            </div>
          )}
        </div>
      );
    }
    return slots;
  };
  
  return (
    <div className="minecraft-projects">
      <h1 className="minecraft-section-title">MY PROJECTS</h1>
      
      <div className="minecraft-projects-container">
        {/* Left side - Inventory Grid */}
        <div className="minecraft-inventory">
          <div className="inventory-grid">
            {renderInventorySlots()}
          </div>
          
          {/* Tech icon display at the bottom */}
          <div className="tech-icon-bar">
            {projectsData[currentProject]?.techIcons.map((icon, i) => (
              <div key={i} className="tech-icon">{icon}</div>
            ))}
          </div>
        </div>
        
        {/* Right side - Project details */}
        <motion.div 
          className="minecraft-project-details"
          key={currentProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-display">
            <div className="project-icon-large">
              {projectsData[currentProject]?.icon}
            </div>
            <div className="project-name">
              {projectsData[currentProject]?.title}
            </div>
          </div>
          
          <div className="project-description">
            {projectsData[currentProject]?.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          
          <div className="project-action-buttons">
            <a 
              href={projectsData[currentProject]?.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="minecraft-action-button"
            >
              <span className="button-icon">🔨</span> Github
            </a>
            <a 
              href={projectsData[currentProject]?.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="minecraft-action-button"
            >
              <span className="button-icon">🌐</span> LIVE DEMO
            </a>
          </div>
          
          <div className="pagination-controls">
            <button onClick={prevProject} className="nav-button">
              &lt; PREV
            </button>
            <span className="page-indicator">
              {currentProject + 1} / {projectsData.length}
            </span>
            <button onClick={nextProject} className="nav-button">
              NEXT &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
