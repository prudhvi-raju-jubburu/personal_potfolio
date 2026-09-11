import { Github, ExternalLink, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/useMedia';
import './ProjectCard.css';

const ProjectCard = ({ project, onOpen }) => {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.article
      className="project-card card"
      initial={reduced ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      whileHover={reduced ? {} : { y: -8, transition: { duration: 0.25 } }}
    >
      <button type="button" className="project-media" onClick={() => onOpen(project)}>
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        <div className="project-media-overlay">
          <span className="project-preview-btn"><Eye size={16} /> Quick View</span>
        </div>
        <span className="project-category-badge">{project.category}</span>
      </button>
      <div className="project-content">
        <p className="project-index">{project.number}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.subtitle}</p>
        <p className="project-desc">{project.problem}</p>
        <div className="project-tech">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              className="tech-pill"
              whileHover={reduced ? {} : { scale: 1.08 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="project-card-footer">
        <button type="button" className="btn btn-ghost card-btn" onClick={() => onOpen(project)}>
          Case study
        </button>
        {project.github && (
          <a className="btn btn-ghost card-btn" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
            <Github size={16} /> GitHub
          </a>
        )}
        {project.live && (
          <a className="btn btn-primary card-btn" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
