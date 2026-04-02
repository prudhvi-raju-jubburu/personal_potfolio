import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="nav-logo-wrapper">
            <img 
              src="/my_profile.png" 
              alt="J. Prudhvi Raju" 
              className="nav-logo-img" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=PR'; }}
            />
          </div>
          <span className="logo-text">J. Prudhvi <span className="text-gradient">Raju.</span></span>
        </NavLink>
        
        <div className="nav-content">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-controls">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="menu-icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
