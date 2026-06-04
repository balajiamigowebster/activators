import React from 'react';

function BusinessGames() {
  return (
    <section id="business-games" className="business-games-section-white">
      {/* Floating geometric accent shapes */}
      <div className="accent-shape-diamond accent-shape-blue" style={{ top: '12%', left: '8%', opacity: 0.8 }}></div>
      <div className="accent-shape-diamond accent-shape-teal" style={{ bottom: '8%', right: '8%', opacity: 0.8 }}></div>

      <div className="container">
        <h2 className="business-games-title" style={{ color: '#0d0614', marginBottom: '3.5rem' }}>
          Business Games Activities
        </h2>
        
        <div className="business-games-grid">
          {/* Card 1: Synergy Challenge (bg-color1) */}
          <div className="business-games-card bg-color1">
            <div className="program-img-wrapper">
              <img src="/synergy_challenge.png" alt="Synergy Challenge" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Synergy Challenge</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  90 - 120 mins
                </span>
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  Indoors
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Bounty Hunters (bg-color2) */}
          <div className="business-games-card bg-color2">
            <div className="program-img-wrapper">
              <div className="program-badge-fire" style={{ top: '0.8rem', right: '0.8rem' }}>🔥</div>
              <img src="/bounty_hunters_chest.png" alt="Bounty Hunters" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Bounty Hunters</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  90 - 120 mins
                </span>
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  Indoors
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Power Play (bg-color3) */}
          <div className="business-games-card bg-color3">
            <div className="program-img-wrapper">
              <img src="/power_play_lions.png" alt="Power Play" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Power Play</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  120 - 150 mins
                </span>
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  Indoors
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: The Royal Flush Event (bg-color4) */}
          <div className="business-games-card bg-color4">
            <div className="program-img-wrapper">
              <img src="/royal_flush.png" alt="The Royal Flush Event" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">The Royal Flush Event</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  120 - 150 mins
                </span>
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  Indoors
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered View More Button */}
        <div className="btn-wrapper-center" style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <button className="btn btn-pink-solid" style={{ minWidth: '180px', border: 'none' }}>
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default BusinessGames;
