import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle2, X } from 'lucide-react';
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
        setTimeout(() => setFormStatus('idle'), 6000);
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
      color: "#ef4444"
    },
    { 
      icon: <Phone size={20} />, 
      title: "Phone", 
      value: "+91 79816 13325",
      link: "tel:+917981613325",
      color: "#10b981"
    },
    { 
      icon: <MapPin size={20} />, 
      title: "Location", 
      value: "Eluru, AP",
      link: null,
      color: "#f59e0b"
    },
    { 
      icon: <Linkedin size={20} />, 
      title: "LinkedIn", 
      value: "J. Prudhvi Raju",
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-header">
        <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
        <div className="title-underline"></div>
        <p className="contact-intro">
          I'm open to internship opportunities or projects. Reach out via direct message or use the form!
        </p>
      </div>

      <div className="contact-grid">
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
                whileHover={{ x: 5, borderColor: item.color }}
              >
                <div className="info-icon-box" style={{ color: item.color, backgroundColor: `${item.color}08` }}>
                  {item.icon}
                </div>
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
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div 
                className="success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key="success"
              >
                <CheckCircle2 size={50} className="success-icon" />
                <h3>Sent Successfully!</h3>
                <p>Thanks for writing. I'll get back to you shortly.</p>
                <button className="btn btn-outline btn-sm" onClick={() => setFormStatus('idle')}>
                  Send Another
                </button>
              </motion.div>
            ) : formStatus === 'error' ? (
              <motion.div 
                className="success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key="error"
              >
                <X size={50} color="#ef4444" style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.3))" }} />
                <h3>Submission Failed</h3>
                <p>Could not send message. Please email me directly at:<br /><strong>jubburuprudhviraju@gmail.com</strong></p>
                <button className="btn btn-outline btn-sm" onClick={() => setFormStatus('idle')}>
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
                <div className="form-group-compact">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group-compact">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="yourname@example.com" required />
                </div>
                <div className="form-group-compact">
                  <label>Message</label>
                  <textarea name="message" placeholder="Write your message here..." rows="3" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn-compact ${formStatus === 'sending' ? 'loading' : ''}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <span className="loader"></span>
                  ) : (
                    <>
                      <Send size={15} />
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
