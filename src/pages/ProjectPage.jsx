import { Link, useParams } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/site';
import './Home.css';
import '../components/ProjectCard.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="section">
        <div className="section-inner">
          <h1 className="section-title">Project not found</h1>
          <Link className="btn btn-primary" to="/#projects">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="section">
      <div className="section-inner case-page">
        <p className="section-kicker">{project.number} · {project.category}</p>
        <h1 className="section-title">{project.title}</h1>
        <p className="section-lede">{project.subtitle}</p>
        <img src={project.image} alt={`${project.title} preview`} className="case-page-img" />
        <section><h2>Problem</h2><p>{project.problem}</p></section>
        <section><h2>Solution</h2><p>{project.solution}</p></section>
        <section>
          <h2>Architecture</h2>
          <ul>
            <li><strong>Frontend:</strong> {project.architecture.frontend}</li>
            <li><strong>Backend:</strong> {project.architecture.backend}</li>
            <li><strong>Database:</strong> {project.architecture.database}</li>
            <li><strong>AI/ML:</strong> {project.architecture.ai}</li>
          </ul>
        </section>
        <section>
          <h2>Key features</h2>
          <ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section><h2>Technical challenges</h2><p>{project.challenges}</p></section>
        <section><h2>Implementation</h2><p>{project.implementation}</p></section>
        <section><h2>Result</h2><p>{project.result}</p></section>
        <div className="project-tech" style={{ margin: '1rem 0' }}>
          {project.techStack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}
        </div>
        <div className="case-actions">
          {project.github && <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>}
          {project.live && <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live demo</a>}
          <Link className="btn btn-ghost" to="/#projects">All projects</Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectPage;
