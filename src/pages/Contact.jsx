import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  const infoItems = [
    { 
      icon: <Mail size={22} />, 
      title: "Email", 
      value: "jubburuprudhviraju@gmail.com",
      link: "mailto:jubburuprudhviraju@gmail.com"
    },
    { 
      icon: <MapPin size={22} />, 
      title: "Location", 
      value: "Eluru, Andhra Pradesh",
      link: null
    },
    { 
      icon: <Linkedin size={22} />, 
      title: "LinkedIn", 
      value: "J. Prudhvi Raju",
      link: "https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/"
    },
    { 
      icon: <Github size={22} />, 
      title: "GitHub", 
      value: "@prudhvi-raju-jubburu",
      link: "https://github.com/prudhvi-raju-jubburu"
    }
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="contact-header">
        <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
        <div className="title-underline"></div>
        <p className="contact-intro">
          I'm always open to new opportunities, collaborations, or just a friendly hello. 
          Feel free to reach out using the form or through my social channels!
        </p>
      </div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info-panel"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-cards-stack">
            {infoItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="info-card card"
                whileHover={{ x: 10, borderColor: 'var(--accent-color)' }}
              >
                <div className="info-icon-box">{item.icon}</div>
                <div className="info-text">
                  <span>{item.title}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-panel card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div 
                className="success-state"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key="success"
              >
                <div className="success-lottie-mock">
                  <CheckCircle2 size={80} />
                </div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out, Prudhvi will get back to you shortly.</p>
                <button className="btn btn-outline" onClick={() => setFormStatus('idle')}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form 
                className="contact-form" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="form"
              >
                <div className="form-row">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Project Inquiry" required />
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea placeholder="How can I help you today?" rows="5" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${formStatus === 'sending' ? 'loading' : ''}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <span className="loader"></span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
