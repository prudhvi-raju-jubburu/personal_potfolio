import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Branding */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="nav-logo-avatar-wrap">
            <img 
              src="/profile.jpeg" 
              alt="Jubburu Prudhvi Raju" 
              className="nav-logo-img" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=PR'; }}
            />
          </div>
          <span className="logo-text">
            J. Prudhvi <span className="text-gradient">Raju</span>
          </span>
        </NavLink>

        {/* Desktop & Mobile Navigation Content */}
        <div className="nav-right-content">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => {
              const isCurrentRoute = location.pathname === item.path;

              return (
                <li className="nav-item" key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {isCurrentRoute && <span className="nav-active-dot" />}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Trigger */}
          <div className="nav-controls">
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
