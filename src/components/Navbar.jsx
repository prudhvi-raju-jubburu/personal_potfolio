import { NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home as HomeIcon,
  User,
  Code2,
  Layers,
  Briefcase,
  Mail,
  FileText,
  Download,
  ChevronRight,
  Github,
  Linkedin,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile, socials } from '../data/site';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './Navbar.css';

const navItems = [
  { label: 'Home', hash: '#home', icon: HomeIcon },
  { label: 'About', hash: '#about', icon: User },
  { label: 'Skills', hash: '#skills', icon: Code2 },
  { label: 'Projects', hash: '#projects', icon: Layers },
  { label: 'Experience', hash: '#experience', icon: Briefcase },
  { label: 'Contact', hash: '#contact', icon: Mail },
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

  const getSocialIcon = (id) => {
    if (id === 'github') return <Github size={18} />;
    if (id === 'linkedin') return <Linkedin size={18} />;
    if (id === 'email') return <Mail size={18} />;
    return null;
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={close}>
            <img src={profile.photo} alt={profile.name} className="nav-logo-img" width="36" height="36" />
            <span className="logo-text">
              J. Prudhvi <span className="text-gradient">Raju</span>
            </span>
          </NavLink>

          <nav className={`nav-menu ${open ? 'active' : ''}`} aria-label="Primary" id="mobile-nav">
            <div className="nav-links-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.hash === '#home' ? isHome && activeSection === 'home' : isActiveHash(item.hash);
                return (
                  <a
                    key={item.hash}
                    href={hrefFor(item.hash)}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.hash)}
                  >
                    <span className="nav-link-content">
                      <span className="nav-link-icon"><Icon size={18} /></span>
                      <span className="nav-link-label">{item.label}</span>
                    </span>
                    <ChevronRight size={16} className="nav-link-arrow" />
                  </a>
                );
              })}

              <NavLink
                to="/resume"
                className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
                onClick={close}
              >
                <span className="nav-link-content">
                  <span className="nav-link-icon"><FileText size={18} /></span>
                  <span className="nav-link-label">Resume</span>
                </span>
                <ChevronRight size={16} className="nav-link-arrow" />
              </NavLink>
            </div>

            <div className="nav-actions">
              <a
                href={profile.resume}
                className="btn btn-primary nav-resume"
                download={profile.resumeFileName}
                onClick={close}
              >
                <Download size={16} className="btn-icon" />
                <span>Download CV</span>
              </a>

              <div className="nav-mobile-socials">
                <span className="nav-socials-heading">Connect</span>
                <div className="nav-socials-row">
                  {socials.filter((s) => ['github', 'linkedin', 'email'].includes(s.id)).map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-social-icon-btn"
                      aria-label={s.label}
                    >
                      {getSocialIcon(s.id)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <button
            type="button"
            className={`mobile-menu-btn ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div
        className={`nav-backdrop ${open ? 'active' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;

