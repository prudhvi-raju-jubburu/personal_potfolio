import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles, Award, Code2, Users, FileText } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const certifications = [
    { title: 'Front End Web Developer', provider: 'Infosys Springboard', img: '/certifications/frontend.png', category: 'Web' },
    { title: 'MERN Stack Developer', provider: 'Codec Technologies', img: '/certifications/mernintern.png', category: 'Stack' },
    { title: 'Introduction to MERN Stack', provider: 'Simplilearn SkillUp', img: '/certifications/mern.png', category: 'Stack' },
    { title: 'Problem Solving', provider: 'HackerRank', img: '/certifications/problem.png', category: 'Core' },
    { title: 'Javascript', provider: 'NPTEL', img: '/certifications/javascript.png', category: 'Language' },
    { title: 'Joy of Computing in Python', provider: 'NPTEL', img: '/certifications/python.png', category: 'Language' },
    { title: 'Javascript Essentials', provider: 'L&T Edu Tech', img: '/certifications/L&T javascript.png', category: 'Web' },
    { title: 'Web Development', provider: 'SoloLearn', img: '/certifications/websololearn.png', category: 'Web' },
    { title: 'NSS Volunteer Certificate', provider: 'National Service Scheme', img: '/certifications/nss.jpg', category: 'Leadership' },
  ];

  const achievements = [
    {
      title: 'Solved 250+ DSA Problems',
      provider: 'LeetCode / GeekforGeeks / CodeChef',
      detail: 'Solved over 250 data structures and algorithms questions with a 50+ day active coding streak.',
      icon: <Code2 size={24} />,
      img: '/certifications/problem.png',
      category: 'Coding'
    },
    {
      title: 'NSF x Adobe Mentorship Program',
      provider: 'Adobe & National Science Foundation',
      detail: 'Selected for the prestigious NSF x Adobe Mentorship Program, working with industry mentors.',
      icon: <Sparkles size={24} />,
      category: 'Mentorship'
    },
    {
      title: 'First Place - Vibe with Data',
      provider: 'STEPCONE 2026',
      detail: 'Won 1st Place in the Vibe with Data Hackathon, showcasing advanced data application development.',
      icon: <Award size={24} />,
      img: '/certifications/vibe.jpeg',
      category: 'Hackathon'
    },
    {
      title: 'Active NSS Volunteer',
      provider: 'National Service Scheme',
      detail: 'Organized community health drives and educational camps, building leadership and teamwork.',
      icon: <Users size={24} />,
      img: '/certifications/nss.jpg',
      category: 'Social Work'
    }
  ];

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <motion.div 
      className="certifications-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="certifications-header">
        <h1 className="section-title">Credentials & <span className="text-gradient">Achievements</span></h1>
        <div className="title-underline"></div>
        <p className="certifications-intro">
          A collection of my professional certificates and key milestones that validate my engineering skills, problem-solving, and leadership qualities.
        </p>

        {/* Tab Controls */}
        <div className="tab-controls">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Show All
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="cert-items-wrapper">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="certifications-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Certifications Tab */}
            {(activeTab === 'all' || activeTab === 'certifications') && 
              certifications.map((cert, index) => (
                <motion.div 
                  key={`cert-${index}`}
                  className="certification-card card"
                  whileHover={{ y: -8 }}
                  onClick={() => openModal(cert.img)}
                >
                  <div className="cert-image-container">
                    <img src={cert.img} alt={cert.title} className="cert-img" onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Certificate'} />
                    <div className="cert-overlay">
                      <ZoomIn size={28} color="white" />
                    </div>
                  </div>
                  <div className="cert-details">
                    <span className="cert-category">{cert.category}</span>
                    <h3>{cert.title}</h3>
                    <p>{cert.provider}</p>
                  </div>
                </motion.div>
              ))
            }

            {/* Achievements Tab */}
            {(activeTab === 'all' || activeTab === 'achievements') && 
              achievements.map((ach, index) => (
                <motion.div 
                  key={`ach-${index}`}
                  className={`certification-card card achievement-card ${ach.img ? 'clickable-ach' : ''}`}
                  whileHover={{ y: -8 }}
                  onClick={ach.img ? () => openModal(ach.img) : undefined}
                >
                  <div className="ach-icon-container">
                    <div className="ach-icon-badge">
                      {ach.icon}
                    </div>
                    {ach.img && (
                      <span className="ach-zoom-hint" title="View Certificate">
                        <ZoomIn size={14} />
                      </span>
                    )}
                  </div>
                  <div className="cert-details ach-details">
                    <span className="cert-category ach-category">{ach.category}</span>
                    <h3>{ach.title}</h3>
                    <p className="ach-provider">{ach.provider}</p>
                    <p className="ach-description">{ach.detail}</p>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                <X size={24} />
              </button>
              <img src={selectedImg} alt="Certificate Enlarged" className="enlarged-certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certifications;
