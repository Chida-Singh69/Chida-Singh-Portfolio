import React, { useState } from "react";
import { motion } from "framer-motion";
import './Experiences.css';

const experiencesData = [
  {
    id: 1,
    company: "Nasdaq",
    companyUrl: "https://www.nasdaq.com/solutions/sustainability/metrio",
    role: "Analyst – Observability (SDE I)",
    period: "Jan 2026 – Present",
    subRoles: [
      { title: "Analyst – Observability (SDE I)", period: "Aug 2026 – Present" },
      { title: "SDE Intern", period: "Jan 2026 – Jul 2026" }
    ],
    skills: ["Go", "AWS", "Terraform", "Bash", "OTEL", "AG-UI", "VS Code Extensions", "GitHub Copilot"],
    points: [
      "Automated a manual Terraform AMI update job (~4 hrs) to 0 manual steps via a Bash script that fetches the latest safe AMI from AWS's GitHub, applies changes, and opens a merge request.",
      "Delivered AWS alarm notifications to 2 channels (Microsoft Teams & ntfy mobile app) at $0 added cost — no PowerAutomate license needed, giving on-call engineers instant mobile alerts.",
      "Architected an AG-UI protocol POC across React, Go, and Python, streaming AI-generated events to mimic a 'draft with AI' feature; evaluated Go vs Python trade-offs and demoed to the team.",
      "Shipped 2 production REST API endpoints in Go with layered architecture (handler, service, repository) and 100% unit test coverage; cut PR review cycles by ~40% via early-return guard refactors.",
      "Built a VS Code extension wrapping GitHub Copilot to reduce token usage, doing CRUD on task files in 1–2 LLM calls; validated savings with OTEL telemetry across Haiku and Sonnet.",
      "Authored repo-wide Copilot instructions and prompt templates, reducing pattern-breaking code by ~30%; won 1st place at Nasdaq's internal AWS GameDay competition."
    ],
    logo: "/logos/nasdaq-logo-png_seeklogo-426643.webp"
  },
  {
    id: 2,
    company: "GiftOlexia",
    companyUrl: "https://giftolexia.com/",
    role: "Web Development Intern",
    period: "May 2025 – Sep 2025",
    skills: ["React.js", "CI/CD", "Render", "Performance Optimization", "Agile"],
    points: [
      "Spearheaded assessment page redesign within a 4-member agile team, iterating through 3+ versions with stakeholders; boosted completion rates by 30% and cut user drop-off by 25% via mobile-first design.",
      "Configured Render deployment pipeline with Git-based CI/CD, achieving 99.8% uptime across 6 production releases."
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
                  loading="lazy"
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

            {currentExp.subRoles ? (
              <div className="detail-section">
                <span className="detail-label">Timeline:</span>
                <div className="sub-roles-list">
                  {currentExp.subRoles.map((sr, idx) => (
                    <div key={idx} className="sub-role-item">
                      <span className="sub-role-title">{sr.title}</span>
                      <span className="sub-role-period">{sr.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="detail-section">
                <span className="detail-label">Period:</span> {currentExp.period}
              </div>
            )}

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
