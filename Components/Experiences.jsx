import React, { useState } from "react";
import { motion } from "framer-motion";
import './Experiences.css';

const experiencesData = [
  {
    id: 1,
    company: "Nasdaq",
    companyUrl: "https://www.nasdaq.com/solutions/sustainability/metrio",
    role: "SDE Intern",
    period: "Jan 2026 – Present",
    skills: ["Go Lang", "Backend Development", "Learning Phase"],
    points: [
      "Currently working with the Metrio team at Nasdaq.",
      "Learning Go Lang and backend development practices.",
      "Onboarding and familiarizing with enterprise-scale systems."
    ],
    logo: "/logos/nasdaq-logo-png_seeklogo-426643.webp"
  },
  {
    id: 2,
    company: "GiftOlexia",
    companyUrl: "https://giftolexia.com/",
    role: "Web Development Intern",
    period: "May 2025 – Sep 2025",
    skills: ["React.js", "API Integration", "Performance Optimization", "Team Collaboration"],
    points: [
      "Revamped the assessment page in a 4-member team to align UX with business goals.",
      "Completed 3+ design and implementation iterations based on stakeholder feedback.",
      "Migrated the legacy assessment flow to React.js with modular components.",
      "Integrated APIs and improved page load speed by around 40%."
    ],
    logo: "/logos/Giftolexia_logo.png"
  },
  {
    id: 3,
    company: "Shree Sai Sadhbhaavana School",
    companyUrl: "https://www.sadhbhaavana.com/",
    role: "Web Development Intern",
    period: "Nov 2024 – Mar 2025",
    skills: ["Web Design", "UI/UX", "Wix & Figma", "Performance Optimization"],
    points: [
      "Redesigned website navigation and layout using Figma wireframes on Wix.",
      "Improved accessibility and engagement for 500+ users by ~25%.",
      "Enhanced UI responsiveness across devices for parents, staff, and students.",
      "Streamlined content update workflow in collaboration with school staff."
    ],
    logo: "/logos/shree sai sadhbhaavana school_logo.png"
  }
];

const Experiences = ({ mode = "overworld" }) => {
  const [selectedExp, setSelectedExp] = useState(0);
  const currentExp = experiencesData[selectedExp];

  return (
    <div className={`minecraft-experiences ${mode}`}>
      <div className="crafting-container">
        
        {/* Top bar with logo slots */}
        <div className="crafting-header">
          <div className="logo-slots">
            {experiencesData.map((exp, idx) => (
              <div 
                key={exp.id}
                className={`logo-slot ${selectedExp === idx ? 'selected' : ''}`}
                onClick={() => setSelectedExp(idx)}
              >
                <img 
                  src={exp.logo} 
                  alt={exp.company}
                  className="company-logo"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="crafting-content">
          <div className="experience-header">
            <div className="header-title">Experiences</div>
          </div>

          <motion.div
            key={selectedExp}
            className="experience-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="detail-section">
              <a 
                href={currentExp.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company-link"
              >
                {currentExp.company}
              </a>
            </div>

            <div className="detail-section">
              <span className="detail-label">Role:</span> {currentExp.role}
            </div>

            <div className="detail-section">
              <span className="detail-label">Period:</span> {currentExp.period}
            </div>

            <div className="detail-section">
              <span className="detail-label">Skills:</span>
              <div className="skills-list">
                {currentExp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">• {skill}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <span className="detail-label">Highlights:</span>
              <ul className="points-list">
                {currentExp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
