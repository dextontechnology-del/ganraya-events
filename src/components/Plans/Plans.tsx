import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import './Plans.css';

const plans = [
  {
    name: 'Basic',
    price: '$999',
    description: 'Perfect for small events and gatherings',
    features: [
      'Up to 50 guests',
      'Basic decoration',
      'Event coordination',
      '6 hours of service',
      'Basic sound system'
    ],
    popular: false
  },
  {
    name: 'Standard',
    price: '$2,499',
    description: 'Ideal for medium-sized events',
    features: [
      'Up to 150 guests',
      'Premium decoration',
      'Full event coordination',
      '10 hours of service',
      'Professional sound system',
      'Lighting setup',
      'Dedicated event manager'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '$4,999+',
    description: 'For large and luxurious events',
    features: [
      '150+ guests',
      'Luxury decoration',
      'Full event planning',
      'Unlimited hours',
      'Premium sound & lighting',
      'Dedicated team',
      'Catering coordination',
      'Custom design services',
      '24/7 support'
    ],
    popular: false
  }
];

const Plans = () => {
  return (
    <section id="plans" className="plans-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Event Packages</h2>
          <p>Choose the perfect package for your next event</p>
        </motion.div>
        
        <div className="plans-container">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="popular-tag">
                  <FaStar /> Most Popular
                </div>
              )}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="plan-btn"
                onClick={() => {
                  const message = `Hi, I'm interested in the ${plan.name} plan (${plan.price}). ${plan.description}`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/916353735223?text=${encodedMessage}`, '_blank');
                }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
