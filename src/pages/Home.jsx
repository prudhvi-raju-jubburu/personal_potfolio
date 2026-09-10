import { Link } from 'react-router-dom';
import {
  FileText, Github, Linkedin, Mail, Code2, Cpu, Terminal,
  ArrowRight, ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';
import './Home.css';

const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "AI / ML Enthusiast"
];

const ProfessionalRoleSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="masked-role-viewport">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 22, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -22, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="animated-role-text"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const QuickStats = () => {
  const stats = [
    { number: "8.9", label: "B.Tech CGPA", sub: "GMR Institute of Tech" },
    { number: "300+", label: "DSA Solved", sub: "LeetCode & GFG" },
    { number: "17,600", label: "Global Rank", sub: "TCS CodeVita S13" },
    { number: "1st Place", label: "Hackathon Winner", sub: "STEPCONE 2026" }
  ];

  return (
    <motion.div
      className="quick-stats-strip card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <h3 className="stat-number text-gradient">{stat.number}</h3>
          <p className="stat-label">{stat.label}</p>
          <span className="stat-sub">{stat.sub}</span>
        </div>
      ))}
    </motion.div>
  );
};

const Home = () => {
  const [showScroll, setShowScroll] = useState(true);

  // Mouse Parallax tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    rawMouseX.set((clientX / innerWidth - 0.5) * 30);
    rawMouseY.set((clientY / innerHeight - 0.5) * 30);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      {/* Reference Vertical Left SCROLL Bar */}
      <div className="vertical-scroll-bar">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-line"></div>
      </div>

      {/* Background Ambient Spotlight with Mouse Parallax */}
      <motion.div
        className="hero-spotlight-container"
        style={{ x: mouseX, y: mouseY }}
      >
        <div className="spotlight spot-orange"></div>
        <div className="spotlight spot-cyan"></div>
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="hero-section" id="home">
        {/* Background Faded Profile Image Treatment */}
        <div className="hero-bg-profile-container">
          <div className="hero-bg-profile-glow"></div>
          <img
            src="/profile.jpeg"
            alt="Jubburu Prudhvi Raju"
            className="hero-bg-profile-img"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=J.+Prudhvi+Raju'; }}
          />
          <div className="hero-bg-profile-fade-overlay"></div>
        </div>

        {/* Left Hero Brand Typography */}
        <div className="hero-content">
          <motion.h1
            className="hero-brand-title"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="brand-line-white">JUBBURU</span>
            <span className="brand-line-orange">PRUDHVI RAJU</span>
          </motion.h1>

          <div className="hero-subtitle-container">
            <ProfessionalRoleSlider />
          </div>

          <motion.p
            className="hero-tagline-text"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Computer Science undergraduate focused on Full Stack Development, MERN Stack, REST APIs, AI-assisted tools, and scalable web applications.
          </motion.p>

          <motion.div
            className="hero-buttons-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link to="/projects" className="btn btn-primary">
              <Code2 size={18} />
              View Projects
              <ArrowRight size={16} className="arrow-icon" />
            </Link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className="social-label">Profiles:</span>
            {[
              { icon: <Github size={18} />, url: "https://github.com/prudhvi-raju-jubburu", title: "GitHub" },
              { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/", title: "LinkedIn" },
              { icon: <Code2 size={18} />, url: "https://leetcode.com/u/Prudhvi_Raju_Jubburu/", title: "LeetCode" },
              { icon: <Cpu size={18} />, url: "https://www.geeksforgeeks.org/profile/jubburuprudhviraju", title: "GeeksforGeeks" },
              { icon: <Terminal size={18} />, url: "https://www.codechef.com/users/cs23341a05a7", title: "CodeChef" },
              { icon: <Mail size={18} />, url: "mailto:jubburuprudhviraju@gmail.com", title: "Email" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title={social.title}
                aria-label={social.title}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScroll && (
            <motion.a
              href="#skills-globe-section"
              className="scroll-indicator"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              aria-label="Scroll to Skills Globe"
            >
              <ChevronDown size={26} />
            </motion.a>
          )}
        </AnimatePresence>
      </section>

      {/* Verified Stats Strip */}
      <QuickStats />

      {/* Technical Skills & Interactive 3D Globe */}
      <div id="skills-globe-section" className="home-sections-divider"></div>
      <SkillsSection />
    </div>
  );
};

export default Home;
