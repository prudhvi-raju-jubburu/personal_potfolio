import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    number: '01',
    title: 'Visit AP – Full-Stack Tourism Platform',
    description: 'Designed and developed a responsive tourism platform for exploring destinations across Andhra Pradesh. Implemented destination management, reviews, ratings, and REST API integration using MongoDB.',
    features: [
      'REST API & MongoDB database integration for destination storage',
      'User reviews, ratings, and location-based destination discovery',
      'Responsive full-stack architecture built with React and Express'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/prudhvi-raju-jubburu/visitap',
    liveLink: 'https://visitap.vercel.app/',
    image: '/projects/visitap.png',
    category: 'MERN Stack'
  },
  {
    id: 2,
    number: '02',
    title: 'FarmerDirect – Farmer-to-Consumer Marketplace',
    description: 'Developed a farmer-to-consumer marketplace connecting farmers directly with consumers, eliminating intermediaries. Implemented JWT authentication, product management, order processing, and review modules.',
    features: [
      'JWT Authentication & protected user role routes',
      'Direct farmer product management and catalog listings',
      'Customer order processing and feedback modules'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/LokeshRaivada/Farmer-to-Consumer-Project',
    liveLink: 'https://farmerdirect.vercel.app/',
    image: '/projects/farmerdirect.png',
    category: 'MERN Stack'
  },
  {
    id: 3,
    number: '03',
    title: 'Buy Smart – Product Recommendation System',
    description: 'Developed a recommendation system that provides personalized product recommendations based on user preferences. Integrated web scraping and filtering techniques for product aggregation.',
    features: [
      'Personalized product recommendation algorithms based on user queries',
      'Automated web scraping for real-time price & product data aggregation',
      'Responsive frontend interface with search filtering'
    ],
    techStack: ['React.js', 'Python', 'JavaScript', 'Web Scraping'],
    githubLink: 'https://github.com/prudhvi-raju-jubburu/BuySmart',
    liveLink: 'https://buysmart-ai.vercel.app/',
    image: '/projects/buy-smart.png',
    category: 'AI / Python'
  }
];

const categories = ['All', 'MERN Stack', 'AI / Python'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      className="projects-container"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-header">
        <h1 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h1>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Core software engineering projects ordered by technical architecture and recruiter impact.
        </p>

        {/* Category Filters */}
        <div className="project-category-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="projects-grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              number={project.number}
              title={project.title}
              description={project.description}
              features={project.features}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              image={project.image}
              tag={project.category}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
