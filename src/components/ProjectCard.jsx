import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => {
  return (
    <div className="project-card card animate-fade-in">
      {image && (
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
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
      
      <div className="project-footer">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
          <Github size={16} />
          View Code
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
