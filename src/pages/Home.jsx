import { Link } from 'react-router-dom';
import { 
  FileText, Github, Linkedin, Mail, User, Code2, 
  Terminal, Database, Layout, Cpu, Zap, 
  CheckCircle2, Users, Rocket 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import './Home.css';

const roles = [
  "MERN Stack Developer", 
  "Aspiring Software Engineer", 
  "Problem Solver", 
  "CS Student @ GMRIT"
];

const WhyHireMe = () => {
  const points = [
    {
      icon: <Zap size={32} />,
      title: "Strong MERN Stack Knowledge",
      desc: "Proficient in building full-stack applications with MongoDB, Express, React, and Node."
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Problem-Solving Mindset",
      desc: "Passionate about solving complex challenges and optimizing code performance."
    },
    {
      icon: <Users size={32} />,
      title: "Team Player (NSS Experience)",
      desc: "Valuable leadership and collaborative skills gained through NSS volunteering."
    },
    {
      icon: <Rocket size={32} />,
      title: "Quick Learner",
      desc: "Rapidly adapting to new technologies and staying ahead of industry trends."
    }
  ];

  return (
    <section className="why-hire-section">
      <h2 className="section-title">Why Hire Me?</h2>
      <div className="title-underline"></div>
      <div className="why-hire-grid">
        {points.map((point, index) => (
          <div key={index} className="why-hire-card card">
            <div className="why-icon-wrapper">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

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
            alt="J. Prudhvi Raju"
            className="profile-image"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/280?text=Profile'; }}
          />
        </div>

        <div className="hero-content">
          <h3 className="hero-greeting">Hi, I'm</h3>
          <h1 className="hero-name text-gradient">J. Prudhvi Raju</h1>
          <h2 className="hero-role">
            <span className="typing-text">{currentText}<span className="cursor-blink">|</span></span>
          </h2>

          <p className="hero-tagline">
            I build scalable and user-friendly web applications that solve real-world problems.
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
            <Link to="/projects" className="btn btn-primary">
              <Code2 size={18} />
              View Projects
            </Link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <WhyHireMe />
    </div>
  );
};

export default Home;
