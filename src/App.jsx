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
import Skills from '../Components/Skills.jsx'
import '@fontsource/press-start-2p/index.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [mode, setMode] = useState('overworld') // 'overworld' or 'nether'
  const [isLowRes, setIsLowRes] = useState(false)
  
  useEffect(() => {
    const checkLowRes = () => {
      const isMobile = window.innerWidth <= 768;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlow = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.saveData);
      setIsLowRes(isMobile || isSlow);
    };

    checkLowRes();
    window.addEventListener('resize', checkLowRes);
    return () => window.removeEventListener('resize', checkLowRes);
  }, []);
  
  const toggleMode = () => {
    setMode(prev => prev === 'overworld' ? 'nether' : 'overworld')
  }
  
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
        return <Home mode={mode} onNavigate={handleNavClick} />;
      case 'projects':
        return <Projects mode={mode} />;
      case 'experience':
        return <Experiences mode={mode} />;
      case 'about':
        return <AboutMe mode={mode} />;
      case 'contact':
        return <Contact mode={mode} />;
      case 'skills':
        return <Skills mode={mode} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`minecraft-world ${mode}`}>
      {/* Video Background */}
      <video 
        key={mode}
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-background"
        src={mode === 'overworld' 
          ? (isLowRes ? '/background/Overworld_wallpaper_compressed.mp4' : '/background/Overworld_wallpaper.mp4')
          : (isLowRes ? '/background/Nether_wallpaper_compressed.mp4' : '/background/Nether_wallpaper.mp4')
        }
      />
      <div className="video-overlay"></div>
      
      {/* Left Sidebar - Info & Mode Toggle */}
      <div className="minecraft-left-sidebar">
        <div className="sidebar-item home-button" onClick={() => handleNavClick('home')} data-tooltip="Home" aria-label="Go to home section">
          <img src="/assets/minecraft_ender_pearl.png" alt="Home Icon" className="sidebar-icon" />
        </div>
        <div className="sidebar-item mode-toggle" data-tooltip={`Mode: ${mode === 'overworld' ? 'Overworld' : 'Nether'}`}>
          <button
            type="button"
            className={`mode-toggle-vertical ${mode}`}
            onClick={toggleMode}
            aria-label={`Switch to ${mode === 'overworld' ? 'Nether' : 'Overworld'}`}
            title={`Switch to ${mode === 'overworld' ? 'Nether' : 'Overworld'}`}
          >
            <div className={`mode-state ${mode === 'overworld' ? 'active' : ''}`}>
              <img src="/assets/minecraft_bricks.png" alt="Overworld" className="mode-state-icon" />
              {/* <span>OVER</span> */}
            </div>
            <div className="mode-toggle-track">
              <span className={`mode-toggle-thumb ${mode}`}></span>
            </div>
            <div className={`mode-state ${mode === 'nether' ? 'active' : ''}`}>
              <img src="/assets/minecraft_nether_bricks.png" alt="Nether" className="mode-state-icon" />
              {/* <span>NETH</span> */}
            </div>
          </button>
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
      
      {/* Right Sidebar - Navigation */}
      <div className="minecraft-right-sidebar">
        <div 
          className={`sidebar-nav-item ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
          data-tooltip="Projects"
          aria-label="View projects"
        >
          <img src="/assets/minecraft_crafting_table.png" alt="Projects Icon" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'experience' ? 'active' : ''}`}
          onClick={() => handleNavClick('experience')}
          data-tooltip="Experience"
          aria-label="View experience"
        >
          <img src="/assets/minecraft_experience_bottle.png" alt="Experience Icon" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavClick('skills')}
          data-tooltip="Skills"
          aria-label="View skills"
        >
          <img src="/assets/minecraft_anvil.png" alt="Skills Icon" className="sidebar-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
          data-tooltip="About"
          aria-label="View about me"
        >
          <img src="/logos/chida_head_logo.png" alt="About Icon" className="sidebar-nav-icon about-nav-icon" />
        </div>
        <div 
          className={`sidebar-nav-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
          data-tooltip="Contact"
          aria-label="View contact section"
        >
          <img src="/assets/minecraft_writable_book.png" alt="Contact Icon" className="sidebar-nav-icon" />
        </div>
      </div>
    </div>
  )
}

export default App
