import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import './SkillsSection.css';

// Verified Technology Data Source of Truth
const technologies = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    color: '#61DAFB',
    desc: 'Declarative component-driven UI library for building interactive, reactive web interfaces.',
    projects: ['Visit AP', 'FarmerDirect', 'BuySmart'],
    // 3D Spatial Coordinates (Normalized % & Depth Z)
    x: -28, y: -22, z: 110,
    speed: 0.75, ampX: 14, ampY: 16, phase: 0,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="tech-svg">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    )
  },
  {
    id: 'js',
    name: 'JavaScript',
    category: 'Programming',
    color: '#F7DF1E',
    desc: 'Core language for client-side web logic, ES6+ features, and full-stack application development.',
    projects: ['Visit AP', 'FarmerDirect', 'BuySmart'],
    x: 0, y: -8, z: 140, // High foreground center
    speed: 0.9, ampX: 10, ampY: 18, phase: 1.2,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="tech-svg" style={{ color: '#F7DF1E' }}>
        <path d="M3 3h18v18H3V3zm10.7 13.5c.6.9 1.4 1.5 2.5 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-2-1.8l-.7-.3c-2.1-.9-3.4-2-3.4-4.4 0-2.3 1.8-4 4.5-4 2 0 3.4.7 4.3 2.3l-2.1 1.3c-.5-.8-1.1-1.1-2.1-1.1-1 0-1.6.6-1.6 1.2 0 .8.6 1.1 1.9 1.7l.7.3c2.4 1 3.6 2.1 3.6 4.5 0 2.6-2 4.2-5.2 4.2-2.7 0-4.4-1.2-5.3-2.9l2.2-1.4zM7.5 16.5c.5.8 1.1 1.3 2 1.3 1 0 1.6-.5 1.6-1.7V9.5h2.9v6.7c0 2.8-1.6 4.2-4.4 4.2-2.3 0-3.8-1.1-4.5-2.6l2.4-1.3z" />
      </svg>
    )
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Backend',
    color: '#68A063',
    desc: 'Asynchronous event-driven JavaScript runtime for high-concurrency server microservices.',
    projects: ['Visit AP', 'FarmerDirect'],
    x: 30, y: -20, z: 80,
    speed: 0.7, ampX: 15, ampY: 13, phase: 2.4,
    svg: (
      <svg viewBox="0 0 24 24" fill="#68A063" className="tech-svg">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z" />
      </svg>
    )
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AI & Backend',
    color: '#3776AB',
    desc: 'Core language for backend automation, web scraping, data modeling, and AI algorithms.',
    projects: ['BuySmart', 'EdyGrad AI Internship'],
    x: -24, y: 16, z: 95,
    speed: 0.85, ampX: 13, ampY: 15, phase: 0.8,
    svg: (
      <svg viewBox="0 0 24 24" fill="#3776AB" className="tech-svg">
        <path d="M11.8 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1s-2.7.3-2.7 4.1c0 3.8 2.3 3.9 2.3 3.9h1.4v-2c0-2.3 2-2.3 2-2.3h4.1s2 0 2-2V6S16.2 2 11.8 2zm-1.3 1.3c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9zm1.7 18.7c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.8s2.7-.3 2.7-4.1c0-3.8-2.3-3.9-2.3-3.9h-1.4v2c0 2.3-2 2.3-2 2.3h-4.1s-2 0-2 2V18s-.1 4 4.3 4zm1.3-1.3c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" />
      </svg>
    )
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend Framework',
    color: '#E0E0E0',
    desc: 'Minimalist server framework for designing REST API routes and request pipelines.',
    projects: ['Visit AP', 'FarmerDirect'],
    x: 24, y: 18, z: 75,
    speed: 0.65, ampX: 11, ampY: 17, phase: 3.1,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E0E0E0" strokeWidth="2" className="tech-svg">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 9h10M7 12h7M7 15h4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'NoSQL Database',
    color: '#47A248',
    desc: 'Document-oriented database system storing JSON schema documents with high-speed indexing.',
    projects: ['Visit AP', 'FarmerDirect'],
    x: -36, y: -4, z: 30,
    speed: 0.6, ampX: 16, ampY: 11, phase: 4.2,
    svg: (
      <svg viewBox="0 0 24 24" fill="#47A248" className="tech-svg">
        <path d="M12 2C11.5 4 10 7.5 8 9.5c-3 3-4 6.5-4 9 0 4 3.5 5.5 8 5.5s8-1.5 8-5.5c0-2.5-1-6-4-9-2-2-3.5-5.5-4-7.5zM12 21.5c-2.5 0-4.5-1-4.5-3 0-1.8 1.2-4.5 3-6.5 1-1.2 1.5-3 1.5-3s.5 1.8 1.5 3c1.8 2 3 4.7 3 6.5 0 2-2 3-4.5 3z" />
      </svg>
    )
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Algorithms & Systems',
    color: '#00599C',
    desc: 'Compiled system language utilized for rigorous Data Structures & Algorithms solving.',
    projects: ['LeetCode 300+', 'TCS CodeVita S13'],
    x: 36, y: -2, z: 40,
    speed: 0.95, ampX: 12, ampY: 14, phase: 1.9,
    svg: (
      <svg viewBox="0 0 24 24" fill="#00599C" className="tech-svg">
        <path d="M22.4 12l-3-5.2h-6.1l-3 5.2 3 5.2h6.1l3-5.2zm-12.8 0l-3-5.2H.5l3 5.2-3 5.2h6.1l3-5.2z" />
        <path d="M16 10h1.5v1.5H19V10h1.5V8.5H19V7h-1.5v1.5H16V10zm5 4h1.5v1.5H24V14h1.5v-1.5H24V11h-1.5v1.5H21V14z" fill="#38BDF8" />
      </svg>
    )
  },
  {
    id: 'htmlcss',
    name: 'HTML5 & CSS3',
    category: 'UI & Styling',
    color: '#E34F26',
    desc: 'Modern semantic web markup, CSS Grid layouts, glassmorphism, and responsive styling.',
    projects: ['Visit AP', 'FarmerDirect', 'BuySmart'],
    x: -10, y: 22, z: 50,
    speed: 0.8, ampX: 13, ampY: 10, phase: 2.7,
    svg: (
      <svg viewBox="0 0 24 24" fill="#E34F26" className="tech-svg">
        <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.4 5.5h-9l.2 2.5h8.6l-.6 6.8-4.6 1.3-4.6-1.3-.3-3.5h2.5l.1 1.6 2.3.6 2.3-.6.2-2.5H6.2L5.4 4.5h12.3l-.3 3z" />
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Dev Tools',
    color: '#F05032',
    desc: 'Distributed version control and branch workflows for collaboration and deployment.',
    projects: ['All Repositories'],
    x: 10, y: -24, z: 15,
    speed: 0.6, ampX: 13, ampY: 11, phase: 5.0,
    svg: (
      <svg viewBox="0 0 24 24" fill="#F05032" className="tech-svg">
        <path d="M21.6 10.9l-8.5-8.5c-.8-.8-2.1-.8-2.9 0L7.4 5.2l3.4 3.4c.6-.2 1.4 0 1.9.5.6.6.7 1.4.4 2.1l3.1 3.1c.7-.3 1.5-.2 2.1.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1l-3.1-3.1v5.1c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.2-.9.6-1.2v-5.2c-.4-.3-.6-.7-.6-1.2 0-.5.2-.9.5-1.2L6 6.3 2.4 9.9c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.6z" />
      </svg>
    )
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational SQL',
    color: '#4479A1',
    desc: 'Relational database engine for structured tables, SQL joins, and relational integrity.',
    projects: ['Database Systems'],
    x: -16, y: -24, z: -35, // Far background left
    speed: 0.55, ampX: 9, ampY: 10, phase: 3.8,
    svg: (
      <svg viewBox="0 0 24 24" fill="#4479A1" className="tech-svg">
        <path d="M12 3C7 3 3 5.2 3 8v8c0 2.8 4 5 9 5s9-2.2 9-5V8c0-2.8-4-5-9-5zm0 2.2c4.1 0 7 1.7 7 2.8s-2.9 2.8-7 2.8-7-1.7-7-2.8 2.9-2.8 7-2.8zM5 11c1.3.9 3.9 1.5 7 1.5s5.7-.6 7-1.5v2.2c0 1.1-2.9 2.8-7 2.8s-7-1.7-7-2.8V11zm0 4.5c1.3.9 3.9 1.5 7 1.5s5.7-.6 7-1.5v2.2c0 1.1-2.9 2.8-7 2.8s-7-1.7-7-2.8v-2.2z" />
      </svg>
    )
  },
  {
    id: 'rest',
    name: 'REST APIs',
    category: 'API Architecture',
    color: '#38BDF8',
    desc: 'Stateless HTTP endpoints, JSON structure design, and seamless full-stack data flow.',
    projects: ['Visit AP', 'FarmerDirect'],
    x: 24, y: 24, z: -25, // Background right
    speed: 0.7, ampX: 10, ampY: 11, phase: 4.9,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" className="tech-svg">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    color: '#A855F7',
    category: 'AI Technologies',
    desc: 'Supervised ML model training, feature extraction, and predictive analytics pipelines.',
    projects: ['BuySmart', 'EdyGrad AI Internship'],
    x: 0, y: 8, z: -55, // Center background
    speed: 0.5, ampX: 12, ampY: 8, phase: 0.4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" className="tech-svg">
        <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zm-7 8a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4zm14 0a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4zM6 15l4-2m4 0l4 2M9 7l3 5m3-5l-3 5" />
      </svg>
    )
  }
];

const FloatingSkillsEcosystem = () => {
  const containerRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0, isRight: false, isBottom: false });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  // Check reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animation Loop for organic 3D floating movement
  useEffect(() => {
    if (prefersReducedMotion) return;
    let animId;
    const start = performance.now();

    const loop = (now) => {
      setTime((now - start) * 0.001);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [prefersReducedMotion]);

  // Smooth Mouse Parallax Handler
  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: relX * 35, y: relY * 25 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Smart Context Card Positioning
  const handleNodeClickOrHover = (tech, e) => {
    if (selectedTech?.id === tech.id) return;
    setSelectedTech(tech);

    if (containerRef.current && e) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = e.currentTarget.getBoundingClientRect();
      const nodeCenterX = targetRect.left + targetRect.width / 2 - containerRect.left;
      const nodeCenterY = targetRect.top + targetRect.height / 2 - containerRect.top;

      const isRight = nodeCenterX > containerRect.width * 0.5;
      const isBottom = nodeCenterY > containerRect.height * 0.52;

      setCardPos({
        x: nodeCenterX,
        y: nodeCenterY,
        isRight,
        isBottom
      });
    }
  };

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target.classList.contains('ecosystem-stage')) {
      setSelectedTech(null);
    }
  };

  // Calculate dynamic card style with bounds protection
  const getCardTransform = () => {
    if (cardPos.isBottom) {
      return cardPos.isRight
        ? 'translate(calc(-100% + 40px), calc(-100% - 20px))'
        : 'translate(calc(-40px), calc(-100% - 20px))';
    }
    return cardPos.isRight
      ? 'translate(calc(-100% - 20px), -50%)'
      : 'translate(20px, -50%)';
  };

  return (
    <div
      className="ecosystem-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
    >
      {/* Background Soft Lighting & Spatial Haze */}
      <div className="ecosystem-bg-lighting">
        <div className="ambient-glow glow-cyan"></div>
        <div className="ambient-glow glow-orange"></div>
      </div>

      {/* 3D Spatial Environment Stage */}
      <div className="ecosystem-stage">
        {technologies.map((tech) => {
          // Floating Math Calculations
          const floatX = prefersReducedMotion ? 0 : Math.sin(time * tech.speed + tech.phase) * tech.ampX;
          const floatY = prefersReducedMotion ? 0 : Math.cos(time * tech.speed * 0.8 + tech.phase * 1.3) * tech.ampY;
          const floatZ = prefersReducedMotion ? 0 : Math.sin(time * tech.speed * 0.5 + tech.phase * 0.7) * 12;

          const totalZ = tech.z + floatZ;
          const zNorm = Math.max(0, Math.min(1, (totalZ + 70) / 220));

          const parallaxX = mouseOffset.x * (0.4 + zNorm * 0.6);
          const parallaxY = mouseOffset.y * (0.4 + zNorm * 0.6);

          const finalX = tech.x + (floatX / 10) + (parallaxX / 10);
          const finalY = tech.y + (floatY / 10) + (parallaxY / 10);

          const scale = 0.75 + zNorm * 0.45;
          const opacity = selectedTech
            ? (selectedTech.id === tech.id ? 1 : 0.55)
            : (0.45 + zNorm * 0.55);
          const zIndex = Math.round(zNorm * 100) + (selectedTech?.id === tech.id ? 200 : 0);
          const blur = (1 - zNorm) * 1.2;

          const isSelected = selectedTech?.id === tech.id;

          return (
            <motion.div
              key={tech.id}
              className={`floating-tech-node ${isSelected ? 'selected' : ''}`}
              style={{
                left: `calc(50% + ${finalX}%)`,
                top: `calc(50% + ${finalY}%)`,
                transform: `translate(-50%, -50%) scale(${isSelected ? scale * 1.25 : scale})`,
                opacity: opacity,
                zIndex: zIndex,
                filter: blur > 0.2 ? `blur(${blur}px)` : 'none'
              }}
              onClick={(e) => handleNodeClickOrHover(tech, e)}
              onMouseEnter={(e) => handleNodeClickOrHover(tech, e)}
              whileHover={{ scale: scale * 1.25, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div
                className="tech-glass-badge"
                style={{
                  boxShadow: isSelected
                    ? `0 0 30px ${tech.color}80, 0 0 15px ${tech.color}40`
                    : `0 8px 25px rgba(0,0,0,0.6)`
                }}
              >
                <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                  {tech.svg}
                </div>
                <span className="tech-name-label">{tech.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Contextual Skill Card */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            key={selectedTech.id}
            className="ecosystem-floating-card"
            style={{
              left: `${cardPos.x}px`,
              top: `${cardPos.y}px`,
              transform: getCardTransform()
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-header">
              <div className="card-title-group">
                <span className="card-icon" style={{ color: selectedTech.color }}>
                  {selectedTech.svg}
                </span>
                <div>
                  <h4 className="card-title">{selectedTech.name}</h4>
                  <span className="card-category-badge">{selectedTech.category}</span>
                </div>
              </div>
              <button
                className="card-close-btn"
                onClick={() => setSelectedTech(null)}
                aria-label="Close detail card"
              >
                ×
              </button>
            </div>

            <p className="card-description">{selectedTech.desc}</p>

            {selectedTech.projects && selectedTech.projects.length > 0 && (
              <div className="card-projects-section">
                <span className="card-projects-label">Used in projects:</span>
                <div className="card-projects-tags">
                  {selectedTech.projects.map((proj, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default Subtle Hint Footer */}
      {!selectedTech && (
        <div className="ecosystem-default-hint">
          <Sparkles size={14} className="hint-sparkle" />
          <span>Hover or tap any technology to explore its role and project usage</span>
        </div>
      )}
    </div>
  );
};

export default FloatingSkillsEcosystem;
