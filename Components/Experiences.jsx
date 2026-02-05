import React, { useState } from "react";
import { motion } from "framer-motion";
import './Experiences.css';

const experiencesData = [
  {
    id: 1,
    company: "GiftOlexia",
    role: "Web Development Intern",
    period: "May 2025 – Sep 2025",
    skills: ["React.js", "API Integration", "Performance Optimization", "Team Collaboration"],
    points: [
      "Revamped the assessment page in a 4-member team to align UX with business goals.",
      "Completed 3+ design and implementation iterations based on stakeholder feedback.",
      "Migrated the legacy assessment flow to React.js with modular components.",
      "Integrated APIs and improved page load speed by around 40%."
    ],
    icon: "🧩"
  },
  {
    id: 2,
    company: "Shree Sai Sadhbhaavana School",
    role: "Web Development Intern",
    period: "Nov 2024 – Mar 2025",
    skills: ["Web Design", "UI/UX", "Wix & Figma", "Performance Optimization"],
    points: [
      "Redesigned website navigation and layout using Figma wireframes on Wix.",
      "Improved accessibility and engagement for 500+ users by ~25%.",
      "Enhanced UI responsiveness across devices for parents, staff, and students.",
      "Streamlined content update workflow in collaboration with school staff."
    ],
    icon: "🏫"
  }
];

const Experiences = ({ mode = "overworld" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = experiencesData.length;
  const currentExp = experiencesData[currentPage];

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`minecraft-experiences ${mode}`}>
      <div className="minecraft-book-container">
        <motion.div
          key={currentPage}
          className="minecraft-book"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="book-spine-left"></div>
          <div className="book-inner">
            <div className="book-page">
              <div className="book-page-header">
                Page {currentPage + 1} of {totalPages}
              </div>

              <div className="book-content">
                <div className="book-text">
                  {currentExp.company}
                  <br /><br />
                  {currentExp.role}
                  <br />
                  {currentExp.period}
                  <br /><br />
                  Skills:
                  <br />
                  {currentExp.skills.map((skill, idx) => (
                    <React.Fragment key={idx}>
                      • {skill}
                      <br />
                    </React.Fragment>
                  ))}
                  <br />
                  {currentExp.points.map((point, idx) => (
                    <React.Fragment key={idx}>
                      • {point}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="book-buttons">
              <button 
                className="book-button" 
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                Prev
              </button>
              <button 
                className="book-button" 
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
