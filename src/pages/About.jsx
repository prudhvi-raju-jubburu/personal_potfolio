import { motion } from 'framer-motion';
import {
  Briefcase, GraduationCap, Users, Heart, Target,
  Layout, Terminal, Database, Cpu, Code2, Globe, Rocket,
  CheckCircle2, Sparkles
} from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Cpu className="category-icon languages" />,
      skills: ['C++', 'Python']
    },
    {
      title: 'MERN & Web Tech',
      icon: <Layout className="category-icon frontend" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="category-icon database" />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      icon: <Globe className="category-icon tools" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'Core Concepts',
      icon: <Code2 className="category-icon backend" />,
      skills: ['DSA', 'OOPs', 'DBMS']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="category-icon soft-skills" />,
      skills: ['Teamwork', 'Continuous Learning', 'Collaboration', 'Leadership']
    }
  ];

  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-header">
        <motion.h1 variants={itemVariants} className="section-title">
          About <span className="text-gradient">Me</span>
        </motion.h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <motion.section variants={itemVariants} className="about-main card">
          <div className="professional-summary">
            <h2 className="subheading-gradient">Professional Summary</h2>
            <p>
              I’m a <strong>B.Tech Computer Science student</strong> at GMR Institute of Technology and an aspiring <strong>MERN Stack Developer</strong>, passionate about building scalable and high-performance web applications. I focus on creating seamless user experiences by combining efficient backend systems with intuitive frontend design.
            </p>
            <p>
              Skilled in <strong>MongoDB, Express.js, React.js, Node.js, and Python</strong>, I emphasize <strong>clean, maintainable code</strong> and real-world problem solving. I continuously explore modern technologies, including <strong>AI-driven applications</strong>, to stay industry-ready.
            </p>
            <p>
              Beyond development, my experience as an <strong>NSS Volunteer</strong> has strengthened my leadership, teamwork, and adaptability, enabling me to contribute effectively to both technical and community-driven projects.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon-wrapper"><Users size={20} /></div>
              <div>
                <h4>Collaborative Leader</h4>
                <p>Leading community initiatives through NSS volunteer work.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon-wrapper"><Target size={20} /></div>
              <div>
                <h4>Strategic Thinker</h4>
                <p>Solving complex problems with structured system design.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon-wrapper"><Heart size={20} /></div>
              <div>
                <h4>Lifelong Learner</h4>
                <p>Constantly evolving with the latest tech stack shifts.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section variants={itemVariants} className="tech-stack-section">
          <div className="section-header">
            <h2 className="sub-title"><Sparkles size={28} className="text-gradient-icon" /> Technologies I Work With</h2>
            <div className="sub-title-line"></div>
          </div>

          <div className="tech-stack-grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="tech-card glass-card"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.15)"
                }}
              >
                <div className="tech-card-header">
                  <div className="icon-badge">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-pills">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <CheckCircle2 size={12} className="pill-check" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="about-details-grid">
          <motion.section variants={itemVariants} className="education-column">
            <h2 className="sub-title"><GraduationCap size={24} /> Education</h2>
            <div className="timeline">
              {[
                { date: '2023 - 2027', degree: 'B.Tech (CSE)', school: 'GMR Institute of Technology', grade: 'CGPA: 8.9' },
                { date: '2021 - 2023', degree: 'Intermediate (MPC)', school: 'Vidya Vikas Junior College', grade: 'GPA: 9.6' },
                { date: '2021', degree: 'Secondary Education', school: 'ZPP High School', grade: 'GPA: 9.7' }
              ].map((edu, idx) => (
                <div key={idx} className="timeline-item card">
                  <span className="timeline-date">{edu.date}</span>
                  <h3>{edu.degree}</h3>
                  <p>{edu.school}</p>
                  <div className="grade-pill">{edu.grade}</div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="experience-column">
            <h2 className="sub-title"><Briefcase size={24} /> Experience</h2>
            <div className="experience-list card">
              {[
                {
                  role: 'MERN Stack Developer Intern',
                  company: 'Codec Technologies',
                  date: 'Oct 2025',
                  points: [
                    'Learned full-stack web development using the MERN Stack and worked on REST API development and integration.',
                    'Built and integrated web application features using React.js, Node.js, Express.js, and MongoDB.'
                  ]
                },
                {
                  role: 'AI Technologies Intern',
                  company: 'EdyGrad',
                  date: 'June 2025',
                  points: [
                    'Learned Artificial Intelligence and Machine Learning fundamentals, including supervised and unsupervised learning concepts.',
                    'Gained hands-on experience in Python, data preprocessing, model training, and evaluation techniques.'
                  ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="exp-block">
                  <div className="exp-dot"></div>
                  <h4>{exp.role}</h4>
                  <p className="exp-info">{exp.company} • {exp.date}</p>
                  <ul className="exp-bullets">
                    {exp.points.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
