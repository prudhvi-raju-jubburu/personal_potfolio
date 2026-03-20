import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // To make this REALLY work without a backend, you can use Formspree.
    // Example: fetch("https://formspree.io/f/YOUR_FORM_ID", { ... })
    
    // Simulating a real request
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container animate-fade-in">
      <div className="contact-header">
        <h1 className="page-title">Contact Me</h1>
        <div className="title-underline"></div>
        <p className="contact-intro">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info card">
          <h2>Get In Touch</h2>
          
          <div className="info-items">
            <div className="info-item">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <a href="mailto:jubburuprudhviraju@gmail.com">jubburuprudhviraju@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Eluru, Andhra Pradesh</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <Github size={24} />
              </div>
              <div className="info-details">
                <h3>GitHub</h3>
                <a href="https://github.com/prudhvi-raju-jubburu" target="_blank" rel="noopener noreferrer">prudhvi-raju-jubburu</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Linkedin size={24} />
              </div>
              <div className="info-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper card">
          {formStatus === 'success' ? (
            <div className="success-message">
              <CheckCircle2 size={60} className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button className="btn btn-outline" onClick={() => setFormStatus('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${formStatus === 'sending' ? 'loading' : ''}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
