import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle2, X, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 7000);
      } else {
        console.error("Web3Forms submission failed:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setFormStatus('error');
    }
  };

  const infoItems = [
    { 
      icon: <Mail size={20} />, 
      title: "Email", 
      value: "jubburuprudhviraju@gmail.com",
      link: "mailto:jubburuprudhviraju@gmail.com",
      color: "var(--accent-cyan)"
    },
    { 
      icon: <Phone size={20} />, 
      title: "Phone", 
      value: "+91 79816 13325",
      link: "tel:+917981613325",
      color: "var(--accent-emerald)"
    },
    { 
      icon: <MapPin size={20} />, 
      title: "Location", 
      value: "Eluru, Andhra Pradesh, India",
      link: null,
      color: "var(--accent-violet)"
    },
    { 
      icon: <Linkedin size={20} />, 
      title: "LinkedIn", 
      value: "in/jubburu-prudhvi-raju",
      link: "https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/",
      color: "#3b82f6"
    },
    { 
      icon: <Github size={20} />, 
      title: "GitHub", 
      value: "@prudhvi-raju-jubburu",
      link: "https://github.com/prudhvi-raju-jubburu",
      color: "#a855f7"
    }
  ];

  return (
    <motion.div 
      className="contact-container"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-header">
        <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Open to software engineering internship opportunities, full-stack development roles, or technical collaborations. Feel free to message me!
        </p>
      </div>

      <div className="contact-grid">
        {/* Info Cards Panel */}
        <motion.div 
          className="contact-info-panel"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="info-cards-stack">
            {infoItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="info-card card"
                whileHover={{ x: 6, borderColor: item.color }}
              >
                <div className="info-icon-box" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                  {item.icon}
                </div>
                <div className="info-text">
                  <span className="info-label">{item.title}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="info-value-link">{item.value}</a>
                  ) : (
                    <p className="info-value-text">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Panel */}
        <motion.div 
          className="contact-form-panel card"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div 
                className="feedback-state success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key="success"
              >
                <CheckCircle2 size={54} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to your email address as soon as possible.</p>
                <button className="btn btn-outline" onClick={() => setFormStatus('idle')}>
                  Send Another Message
                </button>
              </motion.div>
            ) : formStatus === 'error' ? (
              <motion.div 
                className="feedback-state error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key="error"
              >
                <X size={54} color="#ef4444" />
                <h3>Submission Failed</h3>
                <p>Unable to send via form right now. Please send your message directly to:<br /><strong>jubburuprudhviraju@gmail.com</strong></p>
                <button className="btn btn-outline" onClick={() => setFormStatus('idle')}>
                  Try Again
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
                <h3 className="form-heading">Send a Message</h3>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" type="email" name="email" placeholder="your.name@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="Hi Prudhvi, I'd like to talk about..." rows="4" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${formStatus === 'sending' ? 'loading' : ''}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <span className="loader">Sending...</span>
                  ) : (
                    <>
                      <Send size={16} />
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
