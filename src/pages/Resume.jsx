import { motion } from 'framer-motion';
import { Download, FileText, Code2, Terminal, Cpu, ExternalLink } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const codingProfiles = [
    { 
      name: 'LeetCode', 
      icon: <Code2 size={20} className="profile-icon leetcode" />, 
      url: 'https://leetcode.com/u/CS23341A05A7/' 
    },
    { 
      name: 'CodeChef', 
      icon: <Terminal size={20} className="profile-icon codechef" />, 
      url: 'https://www.codechef.com/users/cs23341a05a7' 
    },
    { 
      name: 'GeeksforGeeks', 
      icon: <Cpu size={20} className="profile-icon gfg" />, 
      url: 'https://www.geeksforgeeks.org/profile/jubburuprum7md' 
    }
  ];

  return (
    <motion.div 
      className="resume-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="resume-header">
        <h1 className="section-title">My <span className="text-gradient">Resume</span></h1>
        <div className="title-underline"></div>
        <p className="resume-intro">
          Explore my detailed career path, technical expertise, and academic background below.
        </p>
      </div>

      <div className="resume-action-bar">
        <motion.div 
          className="coding-profiles-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {codingProfiles.map((profile, index) => (
            <motion.a 
              key={index}
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="profile-card card"
              whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
            >
              {profile.icon}
              <span>{profile.name}</span>
              <ExternalLink size={14} className="ext-icon" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a 
          href="/Resume.pdf" 
          download="Jubburu_Prudhvi_Raju_Resume.pdf" 
          className="btn btn-primary download-btn-v2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={20} />
          Download Resume
        </motion.a>
      </div>

      <motion.div 
        className="resume-viewer card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="viewer-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
          <FileText size={18} className="viewer-icon" />
          <span className="file-name">Jubburu_Prudhvi_Raju_Resume.pdf</span>
        </div>
        <div className="pdf-frame-wrapper">
          <iframe 
            src="/Resume.pdf#toolbar=0" 
            title="Resume PDF" 
            className="resume-iframe"
          />
          <div className="pdf-fallback-overlay">
            <p>PDF preview not available on some mobile devices.</p>
            <a href="/Resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Open PDF Directly
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
