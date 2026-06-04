import React from 'react';

function Navbar({ activeSection, scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  // Arrow helper SVG
  const ArrowIcon = () => (
    <svg className="arrow-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
      <polyline points="1 1 5 5 9 1"></polyline>
    </svg>
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="logo-wrapper" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="/logo.jpg" alt="Activators Logo" style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
          <span>Activators</span>
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link">Home</a>
          </li>

          {/* Dropdown 1: Activities */}
          <li className="nav-item-dropdown">
            <a href="#popular-activities" className="nav-link">
              Team Building Activities <ArrowIcon />
            </a>
            <div className="nav-dropdown-menu">
              <a href="#popular-activities" className="nav-dropdown-item">Outdoor Games</a>
              <a href="#popular-activities" className="nav-dropdown-item">Indoor Games</a>
              <a href="#popular-activities" className="nav-dropdown-item">Motivation Activities</a>
              <a href="#popular-activities" className="nav-dropdown-item">Leadership Team Building</a>
              <a href="#popular-activities" className="nav-dropdown-item">Communication</a>
              <a href="#popular-activities" className="nav-dropdown-item">Tech Based Programs</a>
              <a href="#popular-activities" className="nav-dropdown-item">Problem Solving</a>
              <a href="#popular-activities" className="nav-dropdown-item">Training and Development</a>
              <a href="#business-games" className="nav-dropdown-item">Business Games</a>
              <a href="#construction-activities" className="nav-dropdown-item">Construction + Invention</a>
              <a href="#fun-bonding" className="nav-dropdown-item">Fun + Bonding</a>
            </div>
          </li>

          {/* Dropdown 2: Experiences */}
          <li className="nav-item-dropdown">
            <a href="#about" className="nav-link">
              All Experiences <ArrowIcon />
            </a>
            <div className="nav-dropdown-menu">
              <a href="#popular-activities" className="nav-dropdown-item">Team Building Games</a>
              <a href="#about" className="nav-dropdown-item">Virtual Engagement</a>
              <a href="#about" className="nav-dropdown-item">Corporate Retreats & Offsites</a>
              <a href="#about" className="nav-dropdown-item">Corporate Training</a>
              <a href="#about" className="nav-dropdown-item">Specialized Coaching</a>
              <a href="#about" className="nav-dropdown-item">Fan & Crowd Engagement</a>
            </div>
          </li>

          {/* Dropdown 3: About */}
          <li className="nav-item-dropdown">
            <a href="#about" className="nav-link">
              About us <ArrowIcon />
            </a>
            <div className="nav-dropdown-menu">
              <a href="#about" className="nav-dropdown-item">The Experiment</a>
              <a href="#about" className="nav-dropdown-item">Our Mission</a>
              <a href="#team" className="nav-dropdown-item">Our Team</a>
            </div>
          </li>

          <li>
            <a href="#gallery" className="nav-link">Gallery</a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="nav-cta">Connect Now</a>

        {/* Mobile Hamburger toggle */}
        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
