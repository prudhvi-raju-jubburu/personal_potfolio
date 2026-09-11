import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/site';
import { usePrefersReducedMotion } from '../hooks/useMedia';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const reduced = usePrefersReducedMotion();

  return (
    <motion.footer
      className="footer"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-gradient-line" />
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.role}</p>
        </div>

        <div className="footer-links">
          <motion.a
            href="https://github.com/prudhvi-raju-jubburu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={reduced ? {} : { scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={reduced ? {} : { scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            whileHover={reduced ? {} : { scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
          </motion.a>
        </div>

        <div className="footer-right">
          <p className="copyright">© {year} {profile.legalName}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
