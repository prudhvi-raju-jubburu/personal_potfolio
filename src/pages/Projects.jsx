import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Geo-Enabled Tourism System',
      description: 'A comprehensive full-stack tourism platform for Andhra Pradesh. Features include interactive maps, point-of-interest discovery, and real-time navigation integration for travelers.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Maps API'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/visitap',
      // liveLink: 'https://visit-ap.vercel.app/',
      image: '/projects/visitap.png'
    },
    
    {
      id: 2,
      title: 'Smart Product Recommendation Engine',
      description: 'An AI-powered recommendation engine that leverages machine learning and web scraping to provide personalized product suggestions based on user behavior and market trends.',
      techStack: ['React.js', 'Python', 'Scrapy', 'ML Algorithms'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/BuySmart',
      // liveLink: 'https://buy-smart-ten.vercel.app/',
      image: '/projects/buy-smart.png'
    },
    {
      id: 3,
      title: 'Personal Portfolio ',
      description: 'A professional, high-performance developer portfolio featuring a glassy UI, dynamic themes, and buttery-smooth animations. Optimized for accessibility and fast loading speeds.',
      techStack: ['React.js', 'Vite', 'Framer Motion', 'Lucide React'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/personal_potfolio',
      liveLink: 'https://prudhviraju-portfolio.vercel.app/',
      image: '/projects/portfolio.png'
    },
    {
      id: 4,
      title: 'NSS GMRIT Portal',
      description: 'A robust management system developed for NSS GMRIT to streamline volunteer attendance tracking, unit activity reporting, and organizational management.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/prudhvi-raju-jubburu/NSS---GMRIT',
      // liveLink: '#',
      image: '/projects/nss.png'
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
