import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ background: '#070048', color: '#ffffff', borderTop: 'none', padding: '5rem 0 3rem' }}>
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div style={{ textAlign: 'left' }}>
            <a href="#home" className="logo-wrapper" style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', textDecoration: 'none', display: 'block' }}>
              <span>Team<span style={{ color: 'var(--accent-pink)' }}>Ex</span></span>
            </a>
            <p className="footer-brand-desc" style={{ color: '#c3c6d1', lineHeight: '1.6', maxWidth: '300px', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              Redefining Team Building Experiences. Inspiring Creativity, Innovation, and Collaboration in modern teams through Fun Gamified Experiences.
            </p>
          </div>

          {/* Links Column 1 */}
          <div style={{ textAlign: 'left' }}>
            <h4 className="footer-heading" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Activities</h4>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}><a href="#popular-activities" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Outdoor Games</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#popular-activities" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Indoor Games</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#popular-activities" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Motivation Activities</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#popular-activities" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Problem Solving</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div style={{ textAlign: 'left' }}>
            <h4 className="footer-heading" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experiences</h4>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}><a href="#about" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Team Building Games</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#about" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Retreats & Offsites</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#about" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Virtual Engagement</a></li>
              <li style={{ marginBottom: '0.8rem' }}><a href="#about" style={{ color: '#c3c6d1', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-pink)'} onMouseOut={(e) => e.target.style.color = '#c3c6d1'}>Specialized Coaching</a></li>
            </ul>
          </div>

          {/* Links Column 3: Contact */}
     

        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: '#c3c6d1', fontSize: '0.88rem' }}>
          <p>&copy; {new Date().getFullYear()} TeamEx. All rights reserved.</p>
          <p>Inspiring Creativity and Collaboration.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
