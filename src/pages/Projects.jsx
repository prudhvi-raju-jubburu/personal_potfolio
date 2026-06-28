import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Visit AP – Full-Stack Tourism Platform',
      description: 'Designed and developed a responsive tourism platform for exploring destinations across Andhra Pradesh. Implemented destination management, reviews, ratings, and REST API integration using MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/visitap',
      liveLink: 'https://visitap.vercel.app/',
      image: '/projects/visitap.png'
    },
    {
      id: 2,
      title: 'FarmerDirect – Farmer-to-Consumer Marketplace',
      description: 'Developed a farmer-to-consumer marketplace connecting farmers directly with consumers, eliminating intermediaries. Implemented JWT authentication, product management, order processing, and review modules.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/LokeshRaivada/Farmer-to-Consumer-Project',
      liveLink: 'https://farmerdirect.vercel.app/',
      image: '/projects/farmerdirect.png'
    },
    {
      id: 3,
      title: 'Buy Smart – Product Recommendation System',
      description: 'Developed a recommendation system that provides personalized product recommendations based on user preferences. Integrated web scraping and filtering techniques for product aggregation.',
      techStack: ['React.js', 'Python', 'JavaScript', 'Web Scraping'],
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
