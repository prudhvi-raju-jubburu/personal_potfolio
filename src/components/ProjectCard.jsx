import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => {
  return (
    <motion.div 
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="project-card card">
        {/* Full Card Link for Live Demo */}
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card-overlay-link"
          aria-label={`View ${title} live demo`}
        >
          <div className="project-external-icon">
            <ExternalLink size={18} />
          </div>
          
          {image && (
            <div className="project-image-wrapper">
              <img src={image} alt={title} className="project-image" />
              <div className="image-overlay"></div>
            </div>
          )}
          
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{description}</p>
            
            <div className="project-tech">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </a>

        {/* Source Code Button - Absolute Positioned */}
        <div className="project-card-footer-overlay">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
            aria-label={`View ${title} source code on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
