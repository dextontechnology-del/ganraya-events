import React from 'react';
import { FaAward, FaUsers, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward className="feature-icon" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in event management with multiple industry awards.'
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: 'Professional Team',
      description: 'Our expert team ensures every event is executed to perfection.'
    },
    {
      icon: <FaCalendarAlt className="feature-icon" />,
      title: '10+ Years Experience',
      description: 'Over a decade of creating memorable events for our clients.'
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your event needs.'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We are committed to delivering exceptional events that exceed your expectations</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
