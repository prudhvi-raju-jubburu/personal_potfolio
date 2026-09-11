import { lazy, Suspense, useEffect, useState } from 'react';
import { Code2, FileText, Github, Linkedin, Mail, Cpu, Terminal, ExternalLink, X, ZoomIn, GraduationCap, Trophy, Award, Sparkles, Star, ArrowUpRight, Globe, Layers, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';
import SkillIcon from '../components/SkillIcon';
import ProjectCard from '../components/ProjectCard';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import Reveal from '../components/Reveal';
import {
  aboutFacts,
  achievements,
  certifications,
  education,
  experiences,
  profile,
  projects,
  stats,
} from '../data/site';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMedia';
import './Home.css';

const Hero3DCanvas = lazy(() => import('../components/Hero3DCanvas'));

const achieveIcons = {
  Award,
  Trophy,
  Sparkles,
  Star,
};

const factIcons = {
  'Education': GraduationCap,
  'Current focus': Sparkles,
  'Core stack': Code2,
  'Career goal': Trophy,
};

const statIcons = [GraduationCap, Code2, Trophy, Award];

const socialIcons = [
  { icon: Github, href: 'https://github.com/prudhvi-raju-jubburu', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/u/Prudhvi_Raju_Jubburu/', label: 'LeetCode' },
  { icon: Cpu, href: 'https://www.geeksforgeeks.org/profile/jubburuprudhviraju', label: 'GeeksforGeeks' },
  { icon: Terminal, href: 'https://www.codechef.com/users/cs23341a05a7', label: 'CodeChef' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

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
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 22,
      filter: 'blur(6px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
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
    </motion.h2>
  );
};

const Home = () => {
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [selected, setSelected] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    }
  }, [reduced]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (name.length < 2 || !email.includes('@') || message.length < 8) {
      setFormStatus('invalid');
      setFormError('Please add a name, a valid email, and a message of at least 8 characters.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormStatus('error');
      setFormError('The contact form is not configured yet. Email me directly instead.');
      return;
    }

    setFormStatus('sending');
    data.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
        setFormStatus('success');
      } else {
        setFormStatus('error');
        setFormError('Unable to send right now. Please email me directly.');
      }
    } catch {
      setFormStatus('error');
      setFormError('Network error. Please email me directly.');
    }
  };

  return (
    <div className="home-container">
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <motion.p
            className="section-kicker"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Software engineering portfolio
          </motion.p>
          <motion.h1
            className="hero-brand-title"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="brand-line-white">{profile.name}</span>
            <span className="brand-line-orange">{profile.role}</span>
          </motion.h1>
          <motion.p
            className="hero-tagline-text"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profile.intro}
          </motion.p>
          <motion.div
            className="hero-buttons-group"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> Resume
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </motion.div>
          <div className="social-links-bar">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="social-icon-btn"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={reduced ? {} : { y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span className="social-tooltip">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <motion.div
            className="hero-portrait-wrapper"
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="hero-portrait-inner">
              <div className="hero-portrait-glow" />
              <img
                src="/profile.jpeg"
                alt={profile.name}
                className="hero-portrait-img"
              />
            </div>

            {/* Floating Job Title Badges on Profile */}
            <div className="hero-floating-logo hero-float-react">
              <Code2 size={16} className="job-badge-icon" />
              <span>Software Engineer</span>
            </div>

            <div className="hero-floating-logo hero-float-node">
              <Globe size={16} className="job-badge-icon" />
              <span>Web Developer</span>
            </div>

            <div className="hero-floating-logo hero-float-python">
              <Layers size={16} className="job-badge-icon" />
              <span>Full-Stack Dev</span>
            </div>

            <div className="hero-floating-logo hero-float-js">
              <Sparkles size={16} className="job-badge-icon" />
              <span>AI Enthusiast</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Quick Stats Strip (Image 2) */}
      <div className="section-inner">
        <motion.div
          className="quick-stats-strip card"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, idx) => {
            const StatIcon = statIcons[idx] || Award;
            return (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={reduced ? false : { opacity: 0, y: 20, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
              >
                <div className="stat-icon-wrap">
                  <StatIcon size={16} />
                </div>
                <p className="stat-number text-gradient">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <span className="stat-sub">{stat.detail}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Animated About Editorial Section & 4 Fact Cards Grid (Image 1) */}
      <section className="section" id="about">
        <div className="section-inner about-editorial">
          <Reveal>
            <p className="section-kicker">About</p>
            <AnimatedHeadline text={profile.headline} />
            <motion.p
              className="section-lede"
              initial={reduced ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I’m a B.Tech Computer Science student at GMR Institute of Technology. I care about clean interfaces,
              reliable backends, and software that still makes sense after the demo.
            </motion.p>
          </Reveal>
          <div className="about-facts">
            {aboutFacts.map((fact, idx) => {
              const FactIcon = factIcons[fact.label] || Sparkles;
              return (
                <motion.div
                  key={fact.label}
                  className="fact-card card"
                  initial={reduced ? false : { opacity: 0, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={reduced ? {} : { y: -6, x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="fact-header">
                    <div className="fact-icon-bubble">
                      <FactIcon size={15} />
                    </div>
                    <p className="fact-label">{fact.label}</p>
                  </div>
                  <p className="fact-value">{fact.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="section" id="projects">
        <div className="section-inner">
          <Reveal>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Projects built end to end</h2>
            <p className="section-lede">Each card opens a case study covering problem, architecture and trade-offs.</p>
          </Reveal>
          <div className="projects-grid home-projects">
            {projects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={reduced ? {} : { y: -6, transition: { duration: 0.25 } }}
              >
                <ProjectCard project={project} onOpen={setSelected} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-inner">
          <Reveal>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Internships with shipped work</h2>
          </Reveal>
          <ol className="timeline">
            {experiences.map((job, idx) => (
              <li key={job.company} className="timeline-item">
                <motion.div
                  initial={reduced ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="timeline-card card">
                    <div className="timeline-card-inner">
                      <div className="timeline-info">
                        <p className="timeline-meta">{job.duration} · {job.location}</p>
                        <h3>{job.role}</h3>
                        <h4>{job.company}</h4>
                        <ul>
                          {job.responsibilities.map((item) => <li key={item}>{item}</li>)}
                          {job.achievements.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <div className="project-tech">
                          {job.technologies.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}
                        </div>
                      </div>

                      {job.certificateImage && (
                        <div
                          className="timeline-cert-preview cert-openable"
                          onClick={() =>
                            setSelectedCert({
                              title: `${job.role} Certificate`,
                              platform: job.company,
                              tech: job.technologies.join(', '),
                              image: job.certificateImage,
                            })
                          }
                          role="button"
                          tabIndex={0}
                          aria-label={`View ${job.company} Internship Certificate`}
                        >
                          <div className="timeline-cert-thumb-wrap">
                            <img
                              src={job.certificateImage}
                              alt={`${job.company} Internship Certificate`}
                              className="timeline-cert-img"
                              loading="lazy"
                            />
                            <div className="cert-zoom-overlay">
                              <ZoomIn size={18} />
                              <span>View Certificate</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-inner">
          <Reveal>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Academic path</h2>
          </Reveal>
          <div className="edu-grid">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.14, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduced ? {} : { y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="edu-card card edu-card-animated"
              >
                <div className="edu-card-header">
                  <div className="edu-icon-badge">
                    <GraduationCap size={18} />
                  </div>
                  <span className="timeline-meta edu-year-pill">{item.years}</span>
                </div>
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="stat-sub edu-note">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="section-inner">
          <Reveal>
            <p className="section-kicker">Proof of work</p>
            <h2 className="section-title">Certifications</h2>
            <p className="section-lede">Click any certification card to open and view full credential image.</p>
          </Reveal>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <motion.article
                key={cert.title}
                className="cert-mini card cert-openable"
                initial={reduced ? false : { opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={reduced ? {} : { scale: 1.03, y: -4 }}
                onClick={() => setSelectedCert(cert)}
                tabIndex={0}
                role="button"
                aria-label={`Open certificate ${cert.title}`}
              >
                <div className="cert-thumb-wrap">
                  <img src={cert.image} alt={cert.title} loading="lazy" className="cert-thumb" />
                  <div className="cert-zoom-overlay">
                    <ZoomIn size={20} />
                    <span>View Cert</span>
                  </div>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.platform}</p>
                <span className="tech-pill">{cert.tech}</span>
              </motion.article>
            ))}
          </div>
          <Reveal className="achieve-section-container">
            <h3 className="achieve-section-title">Key Milestones & Honors</h3>
            <div className="achieve-grid">
              {achievements.map((item, idx) => {
                const IconComp = achieveIcons[item.icon] || Trophy;
                return (
                  <motion.div
                    key={item.title}
                    className="achieve-card card"
                    initial={reduced ? false : { opacity: 0, x: -20, scale: 0.98 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    whileHover={reduced ? {} : { y: -4, x: 4, transition: { duration: 0.2 } }}
                  >
                    <div className="achieve-icon-box">
                      <IconComp size={18} />
                    </div>
                    <div className="achieve-content">
                      <div className="achieve-top-line">
                        <h4>{item.title}</h4>
                        {item.tag && <span className="achieve-tag">{item.tag}</span>}
                      </div>
                      <p>{item.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-inner contact-finale">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let’s build something useful.</h2>
          </Reveal>
          <div className="contact-grid">
            <motion.div
              className="contact-links"
              initial={reduced ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <motion.a
                className="contact-link-card"
                href={`mailto:${profile.email}`}
                whileHover={reduced ? {} : { scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-link-icon mail">
                  <Mail size={20} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-title">Email Me</span>
                  <span className="contact-link-sub">{profile.email}</span>
                </div>
                <ArrowUpRight size={18} className="contact-link-arrow" />
              </motion.a>

              <motion.a
                className="contact-link-card"
                href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? {} : { scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-link-icon linkedin">
                  <Linkedin size={20} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-title">LinkedIn</span>
                  <span className="contact-link-sub">jubburu-prudhvi-raju</span>
                </div>
                <ArrowUpRight size={18} className="contact-link-arrow" />
              </motion.a>

              <motion.a
                className="contact-link-card"
                href="https://github.com/prudhvi-raju-jubburu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? {} : { scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-link-icon github">
                  <Github size={20} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-title">GitHub</span>
                  <span className="contact-link-sub">prudhvi-raju-jubburu</span>
                </div>
                <ArrowUpRight size={18} className="contact-link-arrow" />
              </motion.a>

              <motion.a
                className="contact-link-card"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? {} : { scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-link-icon resume">
                  <FileText size={20} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-title">Resume / CV</span>
                  <span className="contact-link-sub">View PDF Document</span>
                </div>
                <ArrowUpRight size={18} className="contact-link-arrow" />
              </motion.a>
            </motion.div>
            <motion.form
              className="contact-form card"
              onSubmit={handleSubmit}
              noValidate
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <label htmlFor="name">Name
                <input id="name" name="name" autoComplete="name" placeholder="e.g. Jubburu Prudhvi Raju" required />
              </label>
              <label htmlFor="email">Email
                <input id="email" name="email" type="email" autoComplete="email" placeholder="e.g. prudhvi@example.com" required />
              </label>
              <label htmlFor="message">Message
                <textarea id="message" name="message" rows="4" placeholder="Write your message, project idea, or inquiry here..." required />
              </label>
              <button className="btn btn-primary" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {formStatus === 'success' && <p className="form-ok" role="status">Message sent. I’ll reply by email.</p>}
              {(formStatus === 'error' || formStatus === 'invalid') && <p className="form-err" role="alert">{formError}</p>}
            </motion.form>
          </div>
        </div>
      </section>

      {selected && <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />}

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="case-overlay" onClick={() => setSelectedCert(null)} role="dialog" aria-modal="true">
          <motion.div
            className="case-card cert-modal-card card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button type="button" className="close-btn" onClick={() => setSelectedCert(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="cert-modal-header">
              <span className="tech-pill">{selectedCert.tech}</span>
              <h2>{selectedCert.title}</h2>
              <p className="cert-modal-platform">{selectedCert.platform}</p>
            </div>
            <div className="cert-modal-img-wrap">
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
            </div>
            <div className="cert-modal-actions">
              <a href={selectedCert.image} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> Open Full Image
              </a>
              <button type="button" className="btn btn-ghost" onClick={() => setSelectedCert(null)}>
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
