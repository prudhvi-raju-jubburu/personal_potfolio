import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, X } from 'lucide-react';
import './ProjectCard.css';

const ProjectCaseStudy = ({ project, onClose }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="case-overlay" onClick={onClose} role="presentation">
      <div
        className="case-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close case study">
          <X size={20} />
        </button>
        <img src={project.image} alt="" className="case-hero-img" />
        <div className="case-body">
          <p className="section-kicker">{project.number} · {project.category}</p>
          <h2 id="case-title">{project.title}</h2>
          <p className="case-sub">{project.subtitle}</p>

          <section>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </section>
          <section>
            <h3>Architecture</h3>
            <ul>
              <li><strong>Frontend:</strong> {project.architecture.frontend}</li>
              <li><strong>Backend:</strong> {project.architecture.backend}</li>
              <li><strong>Database:</strong> {project.architecture.database}</li>
              <li><strong>AI/ML:</strong> {project.architecture.ai}</li>
            </ul>
          </section>
          <section>
            <h3>Key features</h3>
            <ul>
              {project.features.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h3>Technical challenges</h3>
            <p>{project.challenges}</p>
          </section>
          <section>
            <h3>Implementation</h3>
            <p>{project.implementation}</p>
          </section>
          <section>
            <h3>Result</h3>
            <p>{project.result}</p>
          </section>
          <div className="project-tech">
            {project.techStack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}
          </div>
          <div className="case-actions">
            {project.github && (
              <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> GitHub
              </a>
            )}
            {project.live && (
              <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> Live demo
              </a>
            )}
            <Link className="btn btn-ghost" to={`/projects/${project.slug}`} onClick={onClose}>
              Open as page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
