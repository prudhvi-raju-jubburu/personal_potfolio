import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/site';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './Navbar.css';

const sectionLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  const hrefFor = (hash) => (isHome ? hash : `/${hash}`);

  const isActiveHash = (hash) => isHome && `#${activeSection}` === hash;

  const handleNavClick = (e, hash) => {
    close();
    if (isHome && hash.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const navHeight = 72;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={close}>
          <img src={profile.photo} alt={profile.name} className="nav-logo-img" width="36" height="36" />
          <span className="logo-text">
            J. Prudhvi <span className="text-gradient">Raju</span>
          </span>
        </NavLink>

        <nav className={`nav-menu ${open ? 'active' : ''}`} aria-label="Primary">
          <a href={hrefFor('#home')} className={`nav-link-btn ${isHome && activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>
            Home
          </a>
          {sectionLinks.map((item) => (
            <a
              key={item.hash}
              href={hrefFor(item.hash)}
              className={`nav-link-btn ${isActiveHash(item.hash) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.hash)}
            >
              {item.label}
            </a>
          ))}
          <NavLink to="/resume" className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`} onClick={close}>
            Resume
          </NavLink>
          <a href={profile.resume} className="btn btn-primary nav-resume" download={profile.resumeFileName} onClick={close}>
            Download CV
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
