import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img 
            src="/profile.jpg" 
            alt="Logo" 
            className="nav-logo-img" 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=JP'; }}
          />
          <span>Portfolio.</span>
        </NavLink>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={closeMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" className="nav-links" onClick={closeMenu}>Experience</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-links" onClick={closeMenu}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-links" onClick={closeMenu}>Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
