import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    '/assets/Hero_bg/bg_1.jpg',
    '/assets/Hero_bg/bg_2.jpg',
    '/assets/Hero_bg/bg_3.jpg'
  ];
  
  // Preload images
  useEffect(() => {
    backgrounds.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '500+', label: 'Events Managed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
  ];

  return (
    <div className="hero-container">
      <div className="hero-background-overlay"></div>
      {backgrounds.map((bg, index) => (
        <div 
          key={index}
          className={`hero-background ${index === backgroundIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-badge"
        >
          <span>#1 Event Management Company</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-heading"
          style={{ color: 'white' }}
        >
          Transform Your <span className="highlight">Events</span> into Unforgettable Experiences
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          Professional event management services tailored to your vision. From corporate meetings to grand celebrations, 
          we bring your ideas to life with creativity and precision.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-btns"
        >
          <a href="#plans" className="btn primary-btn">
            Get Started <FaArrowRight className="btn-icon" />
          </a>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </div>
  );
};

export default Hero;
