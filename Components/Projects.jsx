import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Project data structure
const projectsData = [
  {
    title: "Local AI Personal Assistant",
    description: "Architected an 8-service microservices system with a Go/Gin API gateway, PostgreSQL persistence, and Docker Compose deployment. Built a local LLM-powered finance service and intent-based orchestrator using Ollama.",
    icon: "/assets/minecraft_wolf_spawn_egg.png",
    techStack: "Go • Gin • Python • FastAPI • React • PostgreSQL • Docker • Ollama",
    github: "https://github.com/Chida-singh/personal-assistant",
    demo: null
  },
  {
    title: "SilentVoice — ASL Animation Suite",
    description: "Built a 3D ASL synthesis system over a 31K+ sentence corpus with 88% semantic accuracy. Implemented VAE latent space blending for SMPL-X avatars and shipped a YouTube Chrome extension for real-time overlay.",
    icon: "/assets/minecraft_sheep_spawn_egg.png",
    techStack: "Python • SMPL-X • Sentence-BERT • FAISS • VAE • React",
    github: "https://github.com/Chida-singh/SMPLX",
    demo: null
  },
  {
    title: "SYMBIONT",
    description: "Virtual Pet Health & Wellness Platform with gamified capybara pet, real-time animations, and XP progression. Nutrition tracking via text, barcode & OCR with Nutritionix API. AI health assistant using Google Gemini.",
    icon: "/assets/minecraft_panda_spawn_egg.png",
    techStack: "React • Express.js • Firebase • Socket.IO • Google Gemini AI",
    github: "https://github.com/cupnoodles7/symbiont",
    demo: null
  },
  {
    title: "Talk Tuah Therapist",
    description: "Mental health web platform with AI-powered chatbots and therapy modules. Real-time interactive support using Google Generative AI and speech recognition. Interactive UI with data visualization.",
    icon: "/assets/minecraft_snow_golem_spawn_egg.png",
    techStack: "Streamlit • Google Generative AI • Speech Recognition",
    github: "https://github.com/cupnoodles7/talk_tuah_therapist",
    demo: null
  },
  {
    title: "Google Forms Auto Filler Pro",
    description: "Smart Chrome extension that auto-fills Google Forms using intelligent field recognition and adaptive data learning. Supports text, dropdowns, checkboxes, dates, and dynamic Google Forms structures with robust storage management.",
    icon: "/assets/minecraft_goat_spawn_egg.png",
    techStack: "JavaScript • Chrome Extensions API • Local Storage • DOM Parsing",
    github: "https://github.com/Chida-singh/form-filler",
    demo: null
  },
  {
    title: "Family Tree Visualizer",
    description: "Interactive family tree generator handling 50+ nodes with drag-and-drop. Dynamic node operations (add, edit, delete) reducing setup effort by 70%. 4-directional edge connections for complex family networks.",
    icon: "/assets/minecraft_piglin_spawn_egg.png",
    techStack: "React • React Flow",
    github: "https://github.com/Chida-singh/Family-tree-visualizer",
    demo: null
  },
  {
    title: "Telegram Placement Tracker",
    description: "Desktop tool monitoring placement updates, events & deadlines from Telegram in real-time. Regex-based classification and JSON storage. Multi-tab UI with filters and auto-refresh.",
    icon: "/assets/minecraft_chicken_spawn_egg.png",
    techStack: "Python • Tkinter • Telethon • JSON • Regex",
    github: "https://github.com/Chida-singh/Placement_summary",
    demo: null
  },
  {
    title: "AR Ball Shooter Game",
    description: "AR game with plane detection and object interaction using AR Foundation. XR origins and session management for stable AR experiences. Reusable 3D prefabs and UI controls.",
    icon: "/assets/minecraft_creeper_spawn_egg.png",
    techStack: "Unity • AR Foundation • C#",
    github: "https://github.com/Chida-singh/Ball_shooter_game",
    demo: null
  },
  {
    title: "Traffic Management System",
    description: "Automated traffic signal controller based on real-time traffic density. AI techniques integrated with sensor data to optimize signal timing and improve efficiency.",
    icon: "/assets/minecraft_turtle_spawn_egg.png",
    techStack: "Arduino • AI • Sensors",
    github: "https://github.com/Chida-singh/Density-Based-Traffic-Management",
    demo: null
  },
  {
    title: "Multiplayer Tic Tac Toe",
    description: "Real-time two-player game with Socket.IO and Express. Client-server communication with game state sync and win/draw detection. Responsive UI with reset/rematch logic and cross-device support.",
    icon: "/assets/minecraft_axolotl_spawn_egg.png",
    techStack: "Node.js • Express • Socket.IO • HTML/CSS",
    github: "https://github.com/Chida-singh/Multiplayer-Tic-Tac-Toe",
    demo: null
  },
  {
    title: "Atmosphere Weather App",
    description: "Responsive weather web application with real-time data using WeatherAPI. Adaptive background gradients and debounce-based API calls. Dynamic front-end with Tailwind CSS.",
    icon: "/assets/minecraft_bat_spawn_egg.png",
    techStack: "HTML5 • Tailwind CSS • JavaScript • WeatherAPI",
    github: "https://github.com/Chida-singh/Weather_site",
    demo: null
  },
  {
    title: "2D Mario Game",
    description: "Side-scrolling platformer with character controls and collectibles. Collision detection, enemy AI, and level progression. Game assets and animations following Unity best practices.",
    icon: "/assets/minecraft_bee_spawn_egg.png",
    techStack: "Unity • C#",
    github: "https://github.com/Chida-singh/Mario",
    demo: null
  }
];


const MinecraftProjects = ({ mode = 'overworld' }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredSlot, setHoveredSlot] = useState(null);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };
  
  // Create inventory slots (4 per row for projects = 16 slots total)
  const renderInventorySlots = () => {
    const slots = [];
    const totalSlots = 16; // 4 rows x 4 columns
    
    for (let i = 0; i < totalSlots; i++) {
      const project = projectsData[i];
      const row = Math.floor(i / 4);
      const col = i % 4;
      
      slots.push(
        <div 
          key={i} 
          className={`inventory-slot ${project ? 'has-item' : ''} ${currentProject === i ? 'selected' : ''}`}
          onClick={() => project && setCurrentProject(i)}
          onMouseEnter={(e) => {
            setHoveredSlot(i);
            if (project) {
              const rect = e.currentTarget.getBoundingClientRect();
              const tooltip = e.currentTarget.querySelector('.item-tooltip');
              if (tooltip) {
                const isTopRow = row === 0;
                const isLeftEdge = col === 0;
                const isRightEdge = col === 3;
                
                if (isTopRow) {
                  tooltip.style.bottom = 'auto';
                  tooltip.style.top = `${rect.bottom + 5}px`;
                } else {
                  tooltip.style.top = 'auto';
                  tooltip.style.bottom = `${window.innerHeight - rect.top + 5}px`;
                }
                
                if (isLeftEdge) {
                  tooltip.style.left = `${rect.left}px`;
                  tooltip.style.right = 'auto';
                  tooltip.style.transform = 'translateX(0)';
                } else if (isRightEdge) {
                  tooltip.style.right = `${window.innerWidth - rect.right}px`;
                  tooltip.style.left = 'auto';
                  tooltip.style.transform = 'translateX(0)';
                } else {
                  tooltip.style.left = `${rect.left + rect.width / 2}px`;
                  tooltip.style.right = 'auto';
                  tooltip.style.transform = 'translateX(-50%)';
                }
              }
            }
          }}
          onMouseLeave={() => setHoveredSlot(null)}
        >
          {project && (
            <>
              <div className="inventory-item">
                <img src={project.icon} alt={project.title} className="item-icon" loading="lazy" />
              </div>
            </>
          )}
          {hoveredSlot === i && project && (
            <div className="item-tooltip">
              {project.title}
            </div>
          )}
        </div>
      );
    }
    return slots;
  };
  const project = projectsData[currentProject];
  
  return (
    <div className={`minecraft-projects ${mode}`}>
      <h1 className="minecraft-section-title">MY PROJECTS</h1>
      
      <div className="minecraft-projects-container">
        {/* Left side - Inventory Grid */}
        <div className="minecraft-inventory">
          <div className="inventory-grid">
            {renderInventorySlots()}
          </div>
        </div>
        
        {/* Right side - Project Details */}
        <motion.div 
          className="minecraft-project-details"
          key={currentProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-display">
            <div className="project-icon-large">
              <img src={project.icon} alt={project.title} className="project-icon-img" loading="lazy" />
            </div>
            <div className="project-title-section">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-counter">
                Project {currentProject + 1} of {projectsData.length}
              </p>
            </div>
          </div>
          
          <div className="project-info-section">
            <div className="info-box">
              <div className="info-box-header">Description</div>
              <div className="info-box-content">
                {project.description}
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-box-header">Tech Stack</div>
              <div className="info-box-content tech-stack">
                {project.techStack}
              </div>
            </div>
          </div>
          
          <div className="project-action-buttons">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="minecraft-action-button"
              >
                Github
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="minecraft-action-button"
              >
                <span className="button-icon">🧭</span>
                LIVE DEMO
              </a>
            )}
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

export default MinecraftProjects;
