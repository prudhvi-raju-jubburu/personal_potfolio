import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Users, Heart, Target, 
  Code2, Sparkles, CheckCircle2, Award, Calendar, MapPin
} from 'lucide-react';
import SkillsSection from '../components/SkillsSection';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Codec Technologies',
      date: 'Oct 2025',
      location: 'Remote',
      points: [
        'Learned full-stack web development using the MERN Stack and worked on REST API development and integration.',
        'Built and integrated web application features using React.js, Node.js, Express.js, and MongoDB.'
      ]
    },
    {
      role: 'AI Technologies Intern',
      company: 'EdyGrad',
      date: 'June 2025',
      location: 'Remote',
      points: [
        'Learned Artificial Intelligence and Machine Learning fundamentals, including supervised and unsupervised learning concepts.',
        'Gained hands-on experience in Python, data preprocessing, model training, and evaluation techniques.'
      ]
    }
  ];

  const education = [
    {
      date: '2023 - 2027',
      degree: 'B.Tech in Computer Science & Engineering (CSE)',
      school: 'GMR Institute of Technology',
      grade: 'CGPA: 8.9'
    },
    {
      date: '2021 - 2023',
      degree: 'Intermediate (MPC)',
      school: 'Vidya Vikas Junior College',
      grade: 'GPA: 9.6'
    },
    {
      date: '2021',
      degree: 'Secondary School Certificate (SSC)',
      school: 'ZPP High School',
      grade: 'GPA: 9.7'
    }
  ];

  return (
    <motion.div
      className="about-container"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="section-header">
        <motion.h1 variants={itemVariants} className="section-title">
          About <span className="text-gradient">Me</span>
        </motion.h1>
        <div className="title-underline"></div>
        <motion.p variants={itemVariants} className="section-subtitle">
          Computer Science undergraduate passionate about full-stack engineering, algorithmic problem solving, and building scalable software solutions.
        </motion.p>
      </div>

      <div className="about-content">
        {/* Main Summary Section */}
        <motion.section variants={itemVariants} className="about-summary-card card">
          <div className="summary-left">
            <h2 className="subheading-gradient">Engineering Mindset & Background</h2>
            <p>
              I’m a <strong>B.Tech Computer Science student</strong> at GMR Institute of Technology and an aspiring <strong>Software Engineer / MERN Stack Developer</strong>. I focus on creating seamless digital experiences by pairing robust, clean backend systems with responsive frontend interfaces.
            </p>
            <p>
              Skilled in <strong>MongoDB, Express.js, React.js, Node.js, and Python</strong>, I place a high premium on <strong>clean code, performance optimization, and problem solving</strong>. I actively train in Data Structures & Algorithms across platforms like LeetCode and CodeChef.
            </p>
            <p>
              Beyond technical development, my leadership role as an <strong>NSS Volunteer</strong> has sharpened my collaboration, communication, and organizational skills when coordinating team initiatives.
            </p>
          </div>

          <div className="summary-highlights-stack">
            <div className="highlight-box">
              <div className="icon-badge cyan"><Users size={22} /></div>
              <div>
                <h4>Collaborative Leader</h4>
                <p>Organized community outreach & health camps through NSS volunteer work.</p>
              </div>
            </div>
            <div className="highlight-box">
              <div className="icon-badge violet"><Target size={22} /></div>
              <div>
                <h4>Algorithmic Problem Solver</h4>
                <p>300+ DSA problems solved across LeetCode, CodeChef, and GeeksforGeeks.</p>
              </div>
            </div>
            <div className="highlight-box">
              <div className="icon-badge emerald"><Heart size={22} /></div>
              <div>
                <h4>Continuous Learner</h4>
                <p>Constantly evolving stack expertise with AI integration and modern web tech.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Embedded Skills Matrix */}
        <SkillsSection />

        {/* Experience & Education Timelines */}
        <div className="experience-education-grid">
          {/* Experience Timeline */}
          <motion.section variants={itemVariants} className="timeline-column" id="experience">
            <div className="column-title-box">
              <Briefcase className="column-icon cyan" size={26} />
              <h2>Work Experience</h2>
            </div>
            <div className="timeline-wrapper">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-card card"
                  whileHover={{ x: 5 }}
                >
                  <div className="timeline-card-header">
                    <span className="timeline-date-tag"><Calendar size={13} /> {exp.date}</span>
                    <span className="timeline-location"><MapPin size={13} /> {exp.location}</span>
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <ul className="timeline-bullets">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx}><CheckCircle2 size={14} className="bullet-icon" /> {p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Timeline */}
          <motion.section variants={itemVariants} className="timeline-column" id="education">
            <div className="column-title-box">
              <GraduationCap className="column-icon violet" size={26} />
              <h2>Education</h2>
            </div>
            <div className="timeline-wrapper">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-card card"
                  whileHover={{ x: 5 }}
                >
                  <div className="timeline-card-header">
                    <span className="timeline-date-tag"><Calendar size={13} /> {edu.date}</span>
                    <span className="grade-badge">{edu.grade}</span>
                  </div>
                  <h3 className="timeline-role">{edu.degree}</h3>
                  <h4 className="timeline-company">{edu.school}</h4>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
