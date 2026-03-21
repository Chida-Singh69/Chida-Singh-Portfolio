import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = ({ mode = 'overworld' }) => {
  return (
    <div className={`minecraft-about ${mode}`}>
      <h1 className="minecraft-section-title">ABOUT ME</h1>
      
      <div className="minecraft-about-container">
        <div className="minecraft-about-scroll">
          <div className="minecraft-scroll-content">
            <h3>Who am I?</h3>
            <p>
              I'm Chidananda Singh A, part-time jester, full-time builder (outside my Minecraft village). I go by Chida for obvious reasons. I build, fail, adapt and learn, and probably build, fail, adapt and learn again.
            </p>
            
            <h3>My Journey</h3>
            <p>
              It was long. Pretty long, before my goofball head came around to tinkering with actual codebases. For those of you who care, I fiddled with my ancient PC, and ended up pirating and playing games like CS 1.6, Minecraft, or things that could run on P.C. the Late. And that's pretty much all for my generic tech bro origin story, which might turn into villain origin one, if you disprove of my candidature :3
            </p>
            
            <h3>What I Do</h3>
            <p>
             I'll do whatever I'm asked of,  20 dollars is  20 dollars (ball knowledge)
            </p>
            
            <h3>When I'm Not Coding</h3>
            <p>
              I constantly clutter and clean my workspace, save up my salary and then blow it on clothes, partake in side quests which can range from bathing my dogs, to playing Valorant to visiting temples (a LOT of them). All that said, I'm just a chill guy with a resume.
            </p>
          </div>
        </div>
        
        <div className="minecraft-about-education">
          <div className="education-header">
            <div className="education-icon"><img src="/assets/minecraft_creeper_banner_pattern.png" alt="Side Quests Icon" /></div>
            <h3>SIDE QUESTS</h3>
          </div>
          
          <div className="education-content">
            <a 
              href="https://www.dsce.edu.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Bachelor of Computer Science and Design</div>
              <div className="education-school">Dayananda Sagar College Of Engineering</div>
            </a>
            
            
            <a 
              href="/Certifications/Udemy_Full_Stack.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Web Development Certification</div>
              <div className="education-school">Udemy</div>
            </a>

            <a 
              href="/Certifications/Udemy-go-lang.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Go Programming Language</div>
              <div className="education-school">Udemy</div>
            </a>

            <a 
              href="/Certifications/1ds22cg017_ChidanandaSingh_CAD_1stAttempt.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Computer Aided Design (CAD)</div>
              <div className="education-school">Service Now</div>
            </a>

            <a 
              href="/Certifications/1ds22cg017_Chidananda Singh_CSA_2ndAttempt.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-item education-item-clickable"
            >
              <div className="education-degree">Computer System Architecture (CSA)</div>
              <div className="education-school">Service Now</div>
            </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
