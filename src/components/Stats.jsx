import React from 'react';

function Stats() {
  return (
    <section className="stats-section-pink">
      <div className="container">
        <h2 className="stats-title">Our Success Stories</h2>
        <div className="stats-cards-wrapper">
          {/* Card 1: Experience */}
          <div className="stat-card-pink">
            <div className="stat-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="stat-card-number">5+</h3>
            <p className="stat-card-desc">Years of Experience</p>
          </div>

          {/* Card 2: Activities */}
          <div className="stat-card-pink">
            <div className="stat-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3 className="stat-card-number">1200+</h3>
            <p className="stat-card-desc">Activities Conducted</p>
          </div>

          {/* Card 3: Participants */}
          <div className="stat-card-pink">
            <div className="stat-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="stat-card-number">125000+</h3>
            <p className="stat-card-desc">Participants Engaged</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
