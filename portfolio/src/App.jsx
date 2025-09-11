import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import './components.css'
import './minecraft-icons.css'
import AboutMe from '../Components/AboutMe.jsx'
import Contact from '../Components/Contact.jsx'
import Experiences from '../Components/Experiences.jsx'
import Home from '../Components/Home.jsx'
import Projects from '../Components/Projects.jsx'
import '@fontsource/press-start-2p/index.css'
// Import background image
import backgroundImage from './background/evening_sunset_background.jpg'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  
  // Navigation menu items with Minecraft item icons
  const navItems = [
    { id: 'home', label: 'Home', iconClass: 'icon-home' },
    { id: 'projects', label: 'Projects', iconClass: 'icon-projects' },
    { id: 'experience', label: 'Experience', iconClass: 'icon-experience' },
    { id: 'skills', label: 'Skills', iconClass: 'icon-skills' },
    { id: 'about', label: 'About', iconClass: 'icon-about' },
    { id: 'contact', label: 'Contact', iconClass: 'icon-contact' },
  ]

  const handleNavClick = (section) => {
    setCurrentSection(section)
  }
  
  // Function to render the active section content
  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experiences />;
      case 'about':
        return <AboutMe />;
      case 'contact':
        return <Contact />;
      case 'skills':
        return <div className="skills-section">
          <h1>MY SKILLS</h1>
          <div className="minecraft-inventory-grid">
            {/* Skills rendered as Minecraft items */}
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="React">
                <div className="skill-icon skill-react"></div>
                <span className="item-name">React</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="JavaScript">
                <div className="skill-icon skill-javascript"></div>
                <span className="item-name">JavaScript</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="HTML/CSS">
                <div className="skill-icon skill-html-css"></div>
                <span className="item-name">HTML/CSS</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Node.js">
                <div className="skill-icon skill-node"></div>
                <span className="item-name">Node.js</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Firebase">
                <div className="skill-icon skill-firebase"></div>
                <span className="item-name">Firebase</span>
              </div>
            </div>
            <div className="inventory-slot">
              <div className="inventory-item" data-skill="Git">
                <div className="skill-icon skill-git"></div>
                <span className="item-name">Git</span>
              </div>
            </div>
          </div>
        </div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="minecraft-world" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Top info bar */}
      <div className="minecraft-info-bar">
        <div className="player-info">
          <h1>Chidananda Singh A</h1>
          <p>Computer Science & Design</p>
          <p>Bengaluru, Karnataka</p>
        </div>
        <div className="top-icons">
          <div className="icon-slot">
            <div className="minecraft-icon" style={{ backgroundImage: 'url("/src/assets/minecraft_player_head.png")' }}></div>
          </div>
          <div className="icon-slot">
            <div className="minecraft-icon" style={{ backgroundImage: 'url("/src/assets/minecraft_chest.png")' }}></div>
          </div>
          <div className="icon-slot">
            <div className="minecraft-icon" style={{ backgroundImage: 'url("/src/assets/minecraft_map.png")' }}></div>
          </div>
          <div className="icon-slot">
            <div className="minecraft-icon" style={{ backgroundImage: 'url("/src/assets/minecraft_diamond.png")' }}></div>
          </div>
        </div>
      </div>
      
      {/* Main content with animation */}
      <div className="minecraft-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="minecraft-section-content"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Bottom navigation bar */}
      <div className="minecraft-bottom-nav">
        <div 
          className={`nav-item ${currentSection === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          <img src="/assets/minecraft_grass_block.png" alt="Home" className="minecraft-icon" />
          <div className="nav-label">HOME</div>
        </div>
        <div 
          className={`nav-item ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          <img src="/assets/minecraft_crafting_table.png" alt="Projects" className="minecraft-icon" />
          <div className="nav-label">PROJECTS</div>
        </div>
        <div 
          className={`nav-item ${currentSection === 'experience' ? 'active' : ''}`}
          onClick={() => handleNavClick('experience')}
        >
          <img src="/assets/minecraft_experience_bottle.png" alt="Experience" className="minecraft-icon" />
          <div className="nav-label">EXPERIENCE</div>
        </div>
        <div 
          className={`nav-item ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
        >
          <img src="/assets/minecraft_enchanted_book.png" alt="Skills" className="minecraft-icon" />
          <div className="nav-label">SKILLS</div>
        </div>
        <div 
          className={`nav-item ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          <img src="/assets/minecraft_written_book.png" alt="About" className="minecraft-icon" />
          <div className="nav-label">ABOUT</div>
        </div>
        <div 
          className={`nav-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          <img src="/assets/minecraft_compass.png" alt="Contact" className="minecraft-icon" />
          <div className="nav-label">CONTACT</div>
        </div>
      </div>
    </div>
  )
}

export default App
