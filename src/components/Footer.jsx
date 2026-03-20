import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {year} Jubburu Prudhvi Raju. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/prudhvi-raju-jubburu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jubburu-prudhvi-raju-8a6213374/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
