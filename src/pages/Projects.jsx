import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'NSS GMRIT Website (2024)',
      description: 'Developed a web-based portal for NSS volunteer attendance and unit activity management.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/NSS---GMRIT',
      // liveLink: 'https://placeholder.com/nss-live',
      image: '/projects/nss.png'
    },
    {
      id: 2,
      title: 'Personal Portfolio Website (2025)',
      description: 'Designed and built a responsive personal portfolio with a modern UI.',
      techStack: ['React.js', 'Javascript', 'CSS'],
      githubLink: 'https://github.com/placeholder/portfolio',
      liveLink: 'https://placeholder.com/portfolio-live',
      image: '/projects/portfolio.png'
    },
    {
      id: 3,
      title: 'Product Recommendation System (2026)',
      description: 'Developed a product recommendation system using machine learning techniques.',
      techStack: ['React.js', 'Python', 'Web Scraping', 'Machine Learning'],
      githubLink: 'https://github.com/naveen957359/Buy-smart',
      // liveLink: 'https://placeholder.com/chatbot-live',
      image: '/projects/buy-smart.png'
    },

    {
      id: 4,
      title: 'Geo-Enabled Tourism System for Andhra Pradesh using MERN Stack (2026)',
      description: 'Developed a Geo-Enabled Tourism System for Andhra Pradesh using MERN Stack.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: '#',
      // liveLink: 'https://placeholder.com/chatbot-live',
      image: '/projects/visitap.png'
    }
  ];

  return (
    <div className="projects-container animate-fade-in">
      <div className="projects-header">
        <h1 className="page-title">My Projects</h1>
        <div className="title-underline"></div>
        <p className="projects-intro">
          Here is a selection of my recent work. These projects demonstrate my ability to translate ideas into functional, beautiful web applications.
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
