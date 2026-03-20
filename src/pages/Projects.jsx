import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Geo-Enabled Tourism System (MERN)',
      description: 'A full-stack tourism platform for Andhra Pradesh with interactive maps, place details, and real-time navigation integration.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Maps API'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu',
      liveLink: '#',
      image: '/projects/visitap.png'
    },
    {
      id: 2,
      title: 'NSS GMRIT Management System',
      description: 'A comprehensive web portal for volunteer attendance tracking and unit activity management for NSS GMRIT.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/NSS---GMRIT',
      liveLink: '#',
      image: '/projects/nss.png'
    },
    {
      id: 3,
      title: 'Modern Personal Portfolio',
      description: 'A professional, high-performance portfolio website built with React and Vite featuring glassy UI and smooth scroll.',
      techStack: ['React.js', 'Vite', 'CSS3', 'Lucide React'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/personal_potfolio',
      liveLink: '#',
      image: '/projects/portfolio.png'
    },
    {
      id: 4,
      title: 'Product Recommendation System',
      description: 'Leveraging machine learning algorithms to provide personalized product suggestions based on user behavior and web scraping.',
      techStack: ['React.js', 'Python', 'Web Scraping', 'ML Algorithms'],
      githubLink: 'https://github.com/naveen957359/Buy-smart',
      liveLink: '#',
      image: '/projects/buy-smart.png'
    }
  ];

  return (
    <div className="projects-container animate-fade-in">
      <div className="projects-header">
        <h1 className="page-title">Featured Projects</h1>
        <div className="title-underline"></div>
        <p className="projects-intro">
          Here is a selection of my best work demonstrating my ability to build complex full-stack solutions and user-centric applications.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
