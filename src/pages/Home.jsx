import { Link } from 'react-router-dom';
import { FileText, Github, Linkedin, Mail, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Home.css';

const roles = ["Aspiring Software Engineer","MERN Stack Developer" ,"Building Scalable Web Applications","Problem Solver" ,"NSS Volunteer", "Seeking Internship Opportunities"];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100;
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && currentText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);
  return (
    <div className="home-container animate-fade-in">
      <div className="hero-section">
        <div className="profile-image-container">
          <img
            src="/my_profile.png"
            alt="Profile"
            className="profile-image"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/250?text=Upload+my_profile.png'; }}
          />
        </div>

        <div className="hero-content">
          <h3 className="hero-greeting">👋 Hello, I'm</h3>
          <h1 className="hero-name text-gradient">Jubburu Prudhvi Raju</h1>
          <h2 className="hero-role">
            And I'm a <span className="highlight typing-text">{currentText}<span className="cursor-blink">|</span></span>
          </h2>

          <p className="hero-tagline">
            Motivated B.Tech student with strong skills in web development and hands-on project experience. 
            I enjoy building real-world applications and continuously improving my technical skills.
          </p>

          <div className="social-links">
            <a href="https://github.com/prudhvi-raju-jubburu" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jubburuprudhviraju@gmail.com" className="social-icon" title="Email">
              <Mail size={24} />
            </a>
          </div>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              <User size={18} />
              About Me
            </Link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              <FileText size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
