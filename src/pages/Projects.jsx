import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import { projects } from '../data/site';
import './Projects.css';
import './Home.css';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="section">
      <div className="section-inner">
        <p className="section-kicker">Projects</p>
        <h1 className="section-title">Featured work</h1>
        <p className="section-lede">Open a case study for architecture, trade-offs and implementation notes.</p>
        <div className="projects-grid home-projects">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>
      {selected && <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default Projects;
