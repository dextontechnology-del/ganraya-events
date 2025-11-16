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
  },
  {
    id: 11,
    title: 'Traditional Haldi Ceremony',
    description: 'Beautiful traditional haldi ceremony with vibrant yellow decorations and rituals.',
    image: '/assets/Haldi/HD01.jpg',
    tags: ['Haldi']
  },
  {
    id: 12,
    title: 'Modern Haldi Celebration',
    description: 'Contemporary haldi ceremony with elegant decor and joyful celebrations.',
    image: '/assets/Haldi/HD02.jpg',
    tags: ['Haldi']
  },
  {
    id: 13,
    title: 'Outdoor Haldi Function',
    description: 'Scenic outdoor haldi ceremony with natural beauty and festive atmosphere.',
    image: '/assets/Haldi/HD03.jpg',
    tags: ['Haldi']
  },
  {
    id: 14,
    title: 'Royal Haldi Ceremony',
    description: 'Grand royal haldi celebration with luxurious decorations and traditional rituals.',
    image: '/assets/Haldi/HD04.jpg',
    tags: ['Haldi']
  },
  {
    id: 15,
    title: 'Traditional Wedding Stage',
    description: 'Elegant traditional wedding stage with classic floral decorations and cultural elements.',
    image: '/assets/MerrigeStage/MS01.jpg',
    tags: ['Marriage Stage']
  },
  {
    id: 16,
    title: 'Modern Wedding Stage',
    description: 'Contemporary wedding stage design with sophisticated lighting and modern aesthetics.',
    image: '/assets/MerrigeStage/MS02.jpg',
    tags: ['Marriage Stage']
  },
  {
    id: 17,
    title: 'Royal Wedding Stage',
    description: 'Magnificent royal wedding stage with grand decorations and luxurious setup.',
    image: '/assets/MerrigeStage/MS03.jpg',
    tags: ['Marriage Stage']
  },
  {
    id: 18,
    title: 'Garden Wedding Stage',
    description: 'Beautiful outdoor garden wedding stage with natural flowers and romantic ambiance.',
    image: '/assets/MerrigeStage/MS04.jpg',
    tags: ['Marriage Stage']
  },
  {
    id: 19,
    title: 'Minimalist Wedding Stage',
    description: 'Elegant minimalist wedding stage with clean lines and subtle sophisticated decor.',
    image: '/assets/MerrigeStage/MS05.jpg',
    tags: ['Marriage Stage']
  },
  {
    id: 20,
    title: 'Grand Wedding Reception',
    description: 'Luxurious wedding reception hall with elegant lighting, floral arrangements, and sophisticated ambiance.',
    image: '/assets/Event/EV01.jpg',
    tags: ['Events']
  },
  {
    id: 21,
    title: 'Night Merrige Ceremony',
    description: 'Night merrige ceremony venue with formal stage setup, elegant seating, and professional lighting.',
    image: '/assets/Event/EV02.jpg',
    tags: ['Events']
  },
  {
    id: 22,
    title: 'Open Merrige Ceremony',
    description: 'Open merrige ceremony venue with formal stage setup, elegant seating, and professional lighting.',
    image: '/assets/Event/EV03.jpg',
    tags: ['Events']
  },
  {
    id: 23,
    title: 'Outdoor Wedding Ceremony',
    description: 'Beautiful outdoor wedding setup with natural scenery, decorated arch, and romantic atmosphere.',
    image: '/assets/Event/EV04.jpg',
    tags: ['Events']
  },
  {
    id: 24,
    title: 'Luxury Event',
    description: 'Spacious luxury event venue with crystal chandeliers, elegant decor, and premium furnishings.',
    image: '/assets/Event/EV05.jpg',
    tags: ['Events']
  },
  {
    id: 25,
    title: 'Grand Merrige Ceremony',
    description: 'Grand merrige ceremony venue with formal stage setup, elegant seating, and professional lighting.',
    image: '/assets/Event/EV06.jpg',
    tags: ['Events']
  },
  {
    id: 26,
    title: 'Merrige Ceremony',
    description: 'Merrige ceremony venue with formal stage setup, elegant seating, and professional lighting.',
    image: '/assets/Event/EV07.jpg',
    tags: ['Events']
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);


  const filters = ['All', 'Birthday', 'Baby Shower', 'Haldi', 'Marriage Stage', 'Events'];
  
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
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a 
                    href="#" 
                    className="project-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }}
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

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-details">
                  <div className="modal-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="modal-description">{selectedProject.description}</p>
                  <div className="modal-info">
                    <h4>Event Details</h4>
                    <p>This is a premium event service offered by Ganraya Events. Our team specializes in creating memorable experiences with attention to every detail.</p>
                    <div className="modal-features">
                      <ul>
                        <li>Professional Event Planning</li>
                        <li>Custom Theme Design</li>
                        <li>Quality Decorations</li>
                        <li>Complete Event Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
