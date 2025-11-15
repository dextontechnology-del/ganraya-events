import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Birthday Celebration - Kids Theme',
    description: 'Fun-filled birthday party with colorful decorations and entertainment for children.',
    image: '/assets/Birthday/B01.jpg',
    tags: ['Birthday']
  },
  {
    id: 2,
    title: 'Sweet 16 Birthday Bash',
    description: 'Elegant coming-of-age celebration with modern decor and memorable moments.',
    image: '/assets/Birthday/B02.jpg',
    tags: ['Birthday']
  },
  {
    id: 3,
    title: 'Adult Birthday Party',
    description: 'Sophisticated birthday celebration with premium decorations and entertainment.',
    image: '/assets/Birthday/B03.jpg',
    tags: ['Birthday']
  },
  {
    id: 4,
    title: 'First Birthday Celebration',
    description: 'Adorable first birthday party with cute themes and family-friendly activities.',
    image: '/assets/Birthday/B04.jpg',
    tags: ['Birthday']
  },
  {
    id: 5,
    title: 'Surprise Birthday Party',
    description: 'Exciting surprise birthday celebration with amazing decorations and joyful moments.',
    image: '/assets/Birthday/B05.jpg',
    tags: ['Birthday']
  },
  {
    id: 6,
    title: 'Elegant Baby Shower',
    description: 'Beautiful baby shower celebration with pastel decorations and thoughtful themes.',
    image: '/assets/BabyShower/BS01.jpg',
    tags: ['Baby Shower']
  },
  {
    id: 7,
    title: 'Gender Reveal Baby Shower',
    description: 'Exciting gender reveal party with creative decorations and memorable moments.',
    image: '/assets/BabyShower/BS02.jpg',
    tags: ['Baby Shower']
  },
  {
    id: 8,
    title: 'Twins Baby Shower',
    description: 'Double the fun baby shower celebration for expecting twins with unique themes.',
    image: '/assets/BabyShower/BS03.jpg',
    tags: ['Baby Shower']
  },
  {
    id: 9,
    title: 'Modern Baby Shower',
    description: 'Contemporary baby shower with stylish decor and modern entertainment.',
    image: '/assets/BabyShower/BS04.jpg',
    tags: ['Baby Shower']
  },
  {
    id: 10,
    title: 'Traditional Baby Shower',
    description: 'Classic baby shower celebration with traditional games and heartfelt moments.',
    image: '/assets/BabyShower/BS05.jpg',
    tags: ['Baby Shower']
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');


  const filters = ['All', 'Birthday', 'Baby Shower'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Recent Projects</h2>
          <p>Explore our portfolio of successful events</p>
        </motion.div>

        <div className="filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a 
                    href="#" 
                    className="project-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
