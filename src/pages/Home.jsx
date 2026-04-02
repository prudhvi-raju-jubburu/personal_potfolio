import { Link } from 'react-router-dom';
import { 
  FileText, Github, Linkedin, Mail, Code2, 
  Zap, CheckCircle2, Users, Rocket, ArrowRight, ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const roles = [
  "Aspiring Software Engineer",
  "MERN Stack Developer",
  "Computer Science Student @ GMRIT",
  "Problem Solver & Tech Enthusiast",
  "Actively Seeking Internship Opportunities"
];

const WhyHireMe = () => {
  const points = [
    {
      icon: <Zap size={28} />,
      title: "MERN Stack Mastery",
      desc: "Architecting scalable full-stack applications with MongoDB, Express, React, and Node.js."
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Algorithmic Precision",
      desc: "Optimizing performance and solving complex challenges with structured data structures."
    },
    {
      icon: <Users size={28} />,
      title: "Collaborative Spirit",
      desc: "Exceptional teamwork and leadership skills cultivated through diverse NSS initiatives."
    },
    {
      icon: <Rocket size={28} />,
      title: "Agile Learning",
      desc: "Rapidly mastering emerging technologies to stay at the forefront of digital innovation."
    }
  ];

  return (
    <section className="why-hire-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Why <span className="text-gradient">Partner</span> With Me?</h2>
        <div className="title-underline"></div>
      </motion.div>
      
      <div className="why-hire-grid">
        {points.map((point, index) => (
          <motion.div 
            key={index} 
            className="why-hire-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="why-icon-wrapper">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100;
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && currentText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
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
    <div className="home-container">
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="hero-greeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi there, I'm
          </motion.h3>
          <motion.h1 
            className="hero-name text-gradient"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            J. Prudhvi Raju
          </motion.h1>
          <motion.h2 
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="typing-text">{currentText}<span className="cursor-blink">|</span></span>
          </motion.h2>

          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I architect elegant, high-performance web applications that bridge the gap between technical complexity and intuitive user experiences.
          </motion.p>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <Github size={22} />, url: "https://github.com/prudhvi-raju-jubburu", title: "GitHub" },
              { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/", title: "LinkedIn" },
              { icon: <Mail size={22} />, url: "mailto:jubburuprudhviraju@gmail.com", title: "Email" }
            ].map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.title}>
                {social.icon}
              </a>
            ))}
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Link to="/projects" className="btn btn-primary">
              <Code2 size={18} />
              View Projects
              <ArrowRight size={16} className="arrow-icon" />
            </Link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              <FileText size={18} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="profile-img-wrapper">
            <img
              src="/my_profile.png"
              alt="J. Prudhvi Raju"
              className="profile-image perfect-circle"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Profile'; }}
            />
            <div className="profile-img-glow"></div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showScroll && (
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        )}
      </AnimatePresence>

      <WhyHireMe />
    </div>
  );
};

export default Home;
