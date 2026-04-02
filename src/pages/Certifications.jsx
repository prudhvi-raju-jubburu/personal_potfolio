import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certifications = [
    { title: 'Front End Web Developer', provider: 'Infosys Springboard', img: '/certifications/frontend.png', category: 'Web' },
    { title: 'MERN Stack Developer', provider: 'Codec Technologies', img: '/certifications/mern.png', category: 'Stack' },
    { title: 'Problem Solving', provider: 'HackerRank', img: '/certifications/problem.png', category: 'Core' },
    { title: 'OOP in Java', provider: 'Coursera', img: '/certifications/java.png', category: 'Language' },
    { title: 'Javascript', provider: 'NPTEL', img: '/certifications/javascript.png', category: 'Language' },
    { title: 'Joy of Computing in Python', provider: 'NPTEL', img: '/certifications/python.png', category: 'Language' },
    { title: 'Javascript Essentials', provider: 'L&T Edu Tech', img: '/certifications/L&T javascript.png', category: 'Web' },
    { title: 'NSS Volunteer Certificate', provider: 'National Service Scheme', img: '/certifications/nss.jpg', category: 'Leadership' },
    { title: 'Hackathon Achievement', provider: 'Technical Fest', img: '/certifications/vibe.jpeg', category: 'Achievement' },
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
        <h1 className="section-title">Certifications & <span className="text-gradient">Awards</span></h1>
        <div className="title-underline"></div>
        <p className="certifications-intro">
          A collection of my professional credentials emphasizing my dedication to continuous learning and excellence.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="certification-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => openModal(cert.img)}
          >
            <div className="cert-image-container">
              <img src={cert.img} alt={cert.title} className="cert-img" onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Certificate'} />
              <div className="cert-overlay">
                <ZoomIn size={32} color="white" />
              </div>
            </div>
            <div className="cert-details">
              <span className="cert-category">{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
            </div>
          </motion.div>
        ))}
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
