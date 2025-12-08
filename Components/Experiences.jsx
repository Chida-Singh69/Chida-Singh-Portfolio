import React, { useState } from "react";
import { motion } from "framer-motion";

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
  return (
    <div className={`minecraft-experiences ${mode}`}>
      <h1 className="minecraft-section-title">MY EXPERIENCE</h1>

      <div className="minecraft-experience-container">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="experience-header">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-title">
                <h3>{exp.role} @ {exp.company}</h3>
                <div className="experience-period">{exp.period}</div>
              </div>
            </div>

            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <div key={idx} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>

            <div className="experience-bullet-points">
              {exp.points.map((point, idx) => (
                <div key={idx} className="experience-point">
                  • {point}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
