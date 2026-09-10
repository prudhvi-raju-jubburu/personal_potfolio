import { motion } from 'framer-motion';
import { Download, FileText, Code2, Terminal, Cpu, ExternalLink, Github, Linkedin } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const codingProfiles = [
    { 
      name: 'LeetCode', 
      icon: <Code2 size={20} className="profile-icon leetcode" />, 
      url: 'https://leetcode.com/u/Prudhvi_Raju_Jubburu/',
      stat: '300+ Problems'
    },
    { 
      name: 'CodeChef', 
      icon: <Terminal size={20} className="profile-icon codechef" />, 
      url: 'https://www.codechef.com/users/cs23341a05a7',
      stat: '2-Star Coder'
    },
    { 
      name: 'GeeksforGeeks', 
      icon: <Cpu size={20} className="profile-icon gfg" />, 
      url: 'https://www.geeksforgeeks.org/profile/jubburuprudhviraju',
      stat: 'Verified Profile'
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} className="profile-icon github" />, 
      url: 'https://github.com/prudhvi-raju-jubburu',
      stat: 'Projects & Repos'
    }
  ];

  return (
    <motion.div 
      className="resume-container"
      id="resume"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-header">
        <h1 className="section-title">My <span className="text-gradient">Resume</span></h1>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          View or download my formal software engineering resume, technical background, and competitive coding profiles below.
        </p>
      </div>

      <div className="resume-action-bar">
        {/* Coding Profiles Cards */}
        <motion.div 
          className="coding-profiles-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {codingProfiles.map((profile, index) => (
            <motion.a 
              key={index}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="profile-card card"
              whileHover={{ y: -4, borderColor: 'var(--accent-cyan)' }}
            >
              <div className="profile-card-left">
                {profile.icon}
                <div className="profile-info">
                  <span className="profile-name">{profile.name}</span>
                  <span className="profile-stat">{profile.stat}</span>
                </div>
              </div>
              <ExternalLink size={15} className="ext-icon" />
            </motion.a>
          ))}
        </motion.div>

        {/* Download Resume CTA */}
        <div className="resume-download-cta-wrap">
          <motion.a 
            href="/Resume.pdf" 
            download="Jubburu_Prudhvi_Raju_Resume.pdf" 
            className="btn btn-primary btn-lg download-btn-v2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={20} />
            <span>Download Resume (PDF)</span>
          </motion.a>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <motion.div 
        className="resume-viewer card"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="viewer-header">
          <div className="window-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="viewer-file-info">
            <FileText size={16} className="viewer-icon" />
            <span className="file-name">Jubburu_Prudhvi_Raju_Resume.pdf</span>
          </div>
          <a 
            href="/Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="open-external-btn"
            title="Open in new tab"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="pdf-frame-wrapper">
          <iframe 
            src="/Resume.pdf#toolbar=0" 
            title="Resume PDF Preview" 
            className="resume-iframe"
          />
          <div className="pdf-fallback-overlay">
            <p>PDF preview is restricted on some mobile browsers.</p>
            <a href="/Resume.pdf" className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
              Open PDF File Directly
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
