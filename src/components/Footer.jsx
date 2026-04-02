import { Github, Linkedin, Mail, Heart, ExternalLink, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-column">
            <h3 className="footer-logo">J. Prudhvi <span className="text-gradient">Raju.</span></h3>
            <p className="footer-slogan">
              Building next-generation digital experiences with precision, accessible performance, and user-centric design.
            </p>
            <div className="footer-social-icons">
              <a href="https://github.com/prudhvi-raju-jubburu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jubburuprudhviraju@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <div className="footer-links-grid">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/certifications">Certifications</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div className="footer-contact-column">
            <h4>Contact Info</h4>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail size={16} className="contact-icon" />
                <span>jubburuprudhviraju@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <MapPin size={16} className="contact-icon" />
                <span>Eluru, Andhra Pradesh</span>
              </div>
              <div className="contact-info-item">
                <Phone size={16} className="contact-icon" />
                <span>Available on inquiry</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="copyright">© {currentYear} J. Prudhvi Raju. Engineered with <Heart size={14} className="heart-icon" /> and React.</p>
            <div className="footer-legal">
              <span>All Rights Reserved</span>
              <span>•</span>
              <span>Design & Dev by Prudhvi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
