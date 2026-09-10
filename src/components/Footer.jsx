import { Github, Linkedin, Mail, Heart, MapPin, Phone, Code2, Cpu, Terminal } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <h3 className="footer-logo">J. Prudhvi <span className="text-gradient">Raju.</span></h3>
            <p className="footer-slogan">
              Computer Science undergraduate & full-stack developer committed to scalable software design, performant web applications, and algorithmic problem solving.
            </p>
            <div className="footer-social-bar">
              <a href="https://github.com/prudhvi-raju-jubburu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://leetcode.com/u/Prudhvi_Raju_Jubburu/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" title="LeetCode">
                <Code2 size={18} />
              </a>
              <a href="https://www.geeksforgeeks.org/profile/jubburuprudhviraju" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks" title="GeeksforGeeks">
                <Cpu size={18} />
              </a>
              <a href="https://www.codechef.com/users/cs23341a05a7" target="_blank" rel="noopener noreferrer" aria-label="CodeChef" title="CodeChef">
                <Terminal size={18} />
              </a>
              <a href="mailto:jubburuprudhviraju@gmail.com" aria-label="Email" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <div className="footer-nav-grid">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/about#skills">Skills</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/about#experience">Experience</NavLink>
              <NavLink to="/certifications">Certifications</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div className="footer-contact-column">
            <h4>Contact Info</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Mail size={15} className="f-icon" />
                <a href="mailto:jubburuprudhviraju@gmail.com">jubburuprudhviraju@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="f-icon" />
                <a href="tel:+917981613325">+91 79816 13325</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} className="f-icon" />
                <span>Eluru, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-bar">
          <p className="copyright">
            © {currentYear} J. Prudhvi Raju. Engineered with <Heart size={13} className="heart-icon" /> React & Three.js.
          </p>
          <div className="footer-legal-links">
            <span>All Rights Reserved</span>
            <span>•</span>
            <span>Designed for Recruiter Usability</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
