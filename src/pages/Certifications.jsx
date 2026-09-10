import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles, Award, Code2, Users } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Curated list of verified technical certificates
  const certifications = [
    { title: 'TCS CodeVita Season 13 Rank Certificate', provider: 'Tata Consultancy Services', img: '/certifications/codevita.png', category: 'Competitive Coding' },
    { title: 'MERN Stack Developer', provider: 'Codec Technologies', img: '/certifications/mernintern.png', category: 'Full Stack' },
    { title: 'Frontend Developer', provider: 'Infosys Springboard', img: '/certifications/frontend.png', category: 'Web Engineering' },
    { title: 'Introduction to MERN Stack', provider: 'Simplilearn', img: '/certifications/mern.png', category: 'Full Stack' },
    { title: 'Joy of Computing in Python', provider: 'NPTEL', img: '/certifications/python.png', category: 'Python / ML' },
    { title: 'Problem Solving', provider: 'HackerRank', img: '/certifications/problem.png', category: 'Algorithms' },
  ];

  const achievements = [
    {
      title: 'Global Rank 17600 – TCS CodeVita Season 13',
      provider: 'Tata Consultancy Services',
      detail: 'Secured a global rank of 17,600 in TCS CodeVita Season 13 competitive programming event.',
      icon: <Award size={24} />,
      img: '/certifications/codevita.png',
      category: 'Coding'
    },
    {
      title: 'Solved 300+ DSA Problems',
      provider: 'LeetCode / GeeksforGeeks / CodeChef',
      detail: 'Solved over 300 data structures and algorithms questions with a consistent coding streak.',
      icon: <Code2 size={24} />,
      img: '/certifications/problem.png',
      category: 'Coding'
    },
    {
      title: '2-Star Coder on CodeChef',
      provider: 'CodeChef',
      detail: 'Earned 2-star rating on CodeChef competitive programming platform.',
      icon: <Award size={24} />,
      category: 'Coding'
    },
    {
      title: 'Selected for NSF × Adobe Mentorship Program',
      provider: 'Adobe & National Science Foundation',
      detail: 'Selected for the NSF × Adobe Mentorship Program, collaborating with industry engineering mentors.',
      icon: <Sparkles size={24} />,
      category: 'Mentorship'
    },
    {
      title: 'First Place – Vibe with Data',
      provider: 'STEPCONE 2026',
      detail: 'Won 1st Place in the Vibe with Data Hackathon, presenting data application solutions.',
      icon: <Award size={24} />,
      img: '/certifications/vibe.jpeg',
      category: 'Hackathon'
    },
    {
      title: 'Active NSS Volunteer',
      provider: 'National Service Scheme',
      detail: 'Organized community health drives and educational camps, cultivating teamwork and leadership.',
      icon: <Users size={24} />,
      img: '/certifications/nss.jpg',
      category: 'Social Work'
    }
  ];

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImg]);

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
      id="certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-header">
        <h1 className="section-title">Credentials & <span className="text-gradient">Achievements</span></h1>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Curated technical certificates, global competitive ranks, and engineering accomplishments validating full-stack engineering proficiency.
        </p>

        {/* Tab Controls */}
        <div className="cert-tab-controls">
          <button 
            className={`cert-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Show All
          </button>
          <button 
            className={`cert-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications ({certifications.length})
          </button>
          <button 
            className={`cert-tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements ({achievements.length})
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
                  whileHover={{ y: -6 }}
                  onClick={() => openModal(cert.img)}
                >
                  <div className="cert-image-container">
                    <img 
                      src={cert.img} 
                      alt={cert.title} 
                      className="cert-img" 
                      loading="lazy"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/340x220?text=Certificate'} 
                    />
                    <div className="cert-overlay">
                      <ZoomIn size={26} color="white" />
                      <span>Enlarge Certificate</span>
                    </div>
                  </div>
                  <div className="cert-details">
                    <span className="cert-category-badge">{cert.category}</span>
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
                  whileHover={{ y: -6 }}
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
                    <span className="cert-category-badge ach-cat">{ach.category}</span>
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

      {/* Enlarged Modal */}
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
              <img src={selectedImg} alt="Certificate Enlarged Preview" className="enlarged-certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certifications;
