import { useState } from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/site';
import { usePrefersReducedMotion } from '../hooks/useMedia';
import './Home.css';
import './Contact.css';

const Contact = () => {
  const reduced = usePrefersReducedMotion();
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

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
      setFormError(`The contact form is not configured yet. Email ${profile.email} instead.`);
      return;
    }
    setFormStatus('sending');
    data.append('access_key', accessKey);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
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
    <div className="section">
      <div className="section-inner contact-finale">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Let’s build something useful.</h1>
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

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <label htmlFor="c-name">Name
              <input id="c-name" name="name" placeholder="e.g. Jubburu Prudhvi Raju" required />
            </label>
            <label htmlFor="c-email">Email
              <input id="c-email" name="email" type="email" placeholder="e.g. prudhvi@example.com" required />
            </label>
            <label htmlFor="c-message">Message
              <textarea id="c-message" name="message" rows="4" placeholder="Write your message, project idea, or inquiry here..." required />
            </label>
            <button className="btn btn-primary" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {formStatus === 'success' && <p className="form-ok" role="status">Message sent.</p>}
            {(formStatus === 'error' || formStatus === 'invalid') && <p className="form-err" role="alert">{formError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
