import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { aboutFacts, education, experiences, profile } from '../data/site';
import './Home.css';
import './About.css';

const AnimatedHeadline = ({ text }) => {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 22,
      filter: 'blur(6px)',
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.h1
      className="about-statement"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        const isHighlight = ['AI', 'web', 'technologies', 'modern', 'engineering'].includes(cleanWord);
        return (
          <motion.span
            variants={child}
            key={index}
            className={`headline-word ${isHighlight ? 'headline-highlight' : ''}`}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

const About = () => (
  <div className="section">
    <div className="section-inner about-editorial">
      <p className="section-kicker">About</p>
      <AnimatedHeadline text={profile.headline} />
      <p className="section-lede">
        I’m {profile.legalName}, a B.Tech CSE student at GMR Institute of Technology and an aspiring software engineer.
        I build full-stack web products with a bias toward clarity, performance and useful outcomes.
      </p>
      <div className="about-facts">
        {aboutFacts.map((fact) => (
          <Reveal key={fact.label} className="fact-card card">
            <p className="fact-label">{fact.label}</p>
            <p>{fact.value}</p>
          </Reveal>
        ))}
      </div>
      <h2 className="section-title" style={{ marginTop: '3rem' }}>Experience</h2>
      <ol className="timeline">
        {experiences.map((job) => (
          <li key={job.company} className="timeline-item">
            <div className="timeline-card card">
              <p className="timeline-meta">{job.duration} · {job.location}</p>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <ul>
                {job.responsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="section-title">Education</h2>
      <div className="edu-grid">
        {education.map((item) => (
          <article key={item.degree} className="edu-card card">
            <p className="timeline-meta">{item.years}</p>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <p className="stat-sub">{item.note}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default About;
