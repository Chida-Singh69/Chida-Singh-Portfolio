import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <div className="minecraft-contact">
      <h1 className="minecraft-section-title">CONTACT ME</h1>
      
      <div className="minecraft-contact-container">
        {/* Map-like navigation with compass */}
        <div className="minecraft-map">
          <div className="compass-rose">
            <div className="compass-icon">🧭</div>
            <div className="compass-direction north">N</div>
            <div className="compass-direction east">E</div>
            <div className="compass-direction south">S</div>
            <div className="compass-direction west">W</div>
          </div>
          
          <div className="contact-locations">
            <div className="contact-location">
              <div className="location-icon">📧</div>
              <div className="location-label">EMAIL</div>
            </div>
            <div className="contact-location">
              <div className="location-icon">🔗</div>
              <div className="location-label">LINKEDIN</div>
            </div>
            <div className="contact-location">
              <div className="location-icon">💻</div>
              <div className="location-label">GITHUB</div>
            </div>
            <div className="contact-location">
              <div className="location-icon">�</div>
              <div className="location-label">TWITTER</div>
            </div>
          </div>
        </div>
        
        {/* Contact form as a written book */}
        <div className="minecraft-contact-book">
          <div className="book-pages">
            <div className="book-page left">
              <h3>SEND MESSAGE</h3>
              
              {formStatus.submitted ? (
                <div className="form-success-message">
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-field">
                    <label>NAME:</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="minecraft-input"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label>EMAIL:</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="minecraft-input"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label>MESSAGE:</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="minecraft-textarea"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="send-button">
                    SEND →
                  </button>
                </form>
              )}
            </div>
            
            <div className="book-page right">
              <h3>CONTACT INFO</h3>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="detail-icon">📧</span>
                  <a href="mailto:chidananda@example.com">chidananda@example.com</a>
                </div>
                
                <div className="contact-detail">
                  <span className="detail-icon">🔗</span>
                  <a href="https://linkedin.com/in/chidananda" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/chidananda
                  </a>
                </div>
                
                <div className="contact-detail">
                  <span className="detail-icon">💻</span>
                  <a href="https://github.com/chida-singh" target="_blank" rel="noopener noreferrer">
                    github.com/chida-singh
                  </a>
                </div>
                
                <div className="contact-detail">
                  <span className="detail-icon">📱</span>
                  <a href="https://twitter.com/chidananda" target="_blank" rel="noopener noreferrer">
                    @chidananda
                  </a>
                </div>
                
                <div className="location-detail">
                  <span className="detail-icon">📍</span>
                  Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
