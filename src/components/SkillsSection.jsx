import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import FloatingSkillsEcosystem from './3DSkillsGlobe';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Terminal className="category-icon orange" size={18} />,
    skills: [
      { id: 'cpp', name: 'C++', tag: 'DSA & Systems' },
      { id: 'python', name: 'Python', tag: 'AI / Scripting' },
      { id: 'js', name: 'JavaScript (ES6+)', tag: 'Web Logic' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="category-icon cyan" size={18} />,
    skills: [
      { id: 'react', name: 'React.js', tag: 'UI Library' },
      { id: 'htmlcss', name: 'HTML5 & CSS3', tag: 'Markup & Style' },
      { id: 'rest', name: 'REST APIs', tag: 'Integrations' }
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server className="category-icon emerald" size={18} />,
    skills: [
      { id: 'node', name: 'Node.js', tag: 'Runtime' },
      { id: 'express', name: 'Express.js', tag: 'Web Framework' },
      { id: 'git', name: 'Git & GitHub', tag: 'Dev Tools' }
    ]
  },
  {
    title: 'Databases & AI',
    icon: <Database className="category-icon orange" size={18} />,
    skills: [
      { id: 'mongodb', name: 'MongoDB', tag: 'NoSQL' },
      { id: 'mysql', name: 'MySQL', tag: 'Relational SQL' },
      { id: 'ml', name: 'Machine Learning', tag: 'Data & Models' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">
          TECHNICAL <span className="text-gradient">SKILLS</span>
        </h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Explore the technologies I use to build full-stack applications and AI-powered solutions.
        </p>
      </div>

      {/* Centered Full-Width Interactive Floating Ecosystem Container */}
      <motion.div 
        className="skills-ecosystem-centered-card card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="ecosystem-card-header">
          <Sparkles size={15} className="sparkle-icon" />
          <span>Floating 3D Technology Ecosystem</span>
        </div>

        <FloatingSkillsEcosystem />
      </motion.div>

      {/* Categorized Skills Grid */}
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="skill-category-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
          >
            <div className="category-header">
              <div className="category-icon-box">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-pill-group">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill-item">
                  <CheckCircle2 size={13} className="check-icon" />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-tag">{skill.tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

