import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Contact us using the information below.</p>
        </div>
        
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h3>Our Location</h3>
              <p>77/78 Mahadev Nagar 4</p>
              <p>Dindoli, Surat</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-details">
              <h3>Phone Number</h3>
              <p><a href="tel:+916353735223">+91 6353735223</a></p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>Email Address</h3>
              <p><a href="mailto:shreeganrayaevents9924@gmail.com">shreeganrayaevents9924@gmail.com</a></p>
              <p>24/7 Support Available</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaClock />
            </div>
            <div className="contact-details">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
