import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Visit AP - Tourism Website',
      description: 'A tourism platform that helps users explore tourist destinations across Andhra Pradesh with location-based information and travel guidance. Developed REST APIs and integrated MongoDB for managing destinations, reviews, ratings, and dynamic content.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/visitap',
      liveLink: 'https://visitap.vercel.app/',
      image: '/projects/visitap.png'
    },
    {
      id: 2,
      title: 'FarmerDirect - Farmer to Consumer Platform',
      description: 'A digital marketplace connecting farmers directly with consumers, eliminating intermediaries and improving market accessibility. Implemented JWT authentication, product management, order processing, reviews, and location-based product discovery.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/LokeshRaivada/Farmer-to-Consumer-Project',
      image: '/projects/farmerdirect.png'
    },
    {
      id: 3,
      title: 'Buy Smart - Recommendation System',
      description: 'A product recommendation system that helps users discover relevant products from multiple e-commerce platforms. Applied filtering techniques and web scraping to generate personalized recommendations using user behavior and product data.',
      techStack: ['React.js', 'JavaScript', 'Python', 'Web Scraping'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/BuySmart',
      liveLink: 'https://buysmart-ai.vercel.app/',
      image: '/projects/buy-smart.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div 
      className="projects-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-header">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <span className="text-gradient">Projects</span>
        </motion.h1>
        <div className="title-underline"></div>
        <motion.p 
          className="projects-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build scalable and user-centric applications using modern web technologies. 
          Here's a curated selection of my work across full-stack development and UI design.
        </motion.p>
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
    </motion.div>
  );
};

export default Projects;
