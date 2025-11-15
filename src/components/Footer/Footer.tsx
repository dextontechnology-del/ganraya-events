import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <h3>GANRAYA EVENTS</h3>
              <p>Transforming your events into unforgettable experiences with professional planning and execution.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Our Projects</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Corporate Events</a></li>
                <li><a href="#">Wedding Planning</a></li>
                <li><a href="#">Conference Management</a></li>
                <li><a href="#">Exhibition Planning</a></li>
                <li><a href="#">Virtual Events</a></li>
              </ul>
            </div>
            
            <div className="footer-col contact-info">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt className="icon" />
                  <span>77/78 Mahadev Nagar 4<br />Dindoli, Surat</span>
                </li>
                <li>
                  <FaPhoneAlt className="icon" />
                  <a href="tel:+916353735223">+91 6353735223</a>
                </li>
                <li>
                  <FaEnvelope className="icon" />
                  <a href="mailto:shreeganrayaevents9924@gmail.com">shreeganrayaevents9924@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} GANRAYA EVENTS. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
