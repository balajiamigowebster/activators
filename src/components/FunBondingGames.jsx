import React from 'react';

function FunBondingGames() {
  return (
    <section id="fun-bonding" className="business-games-section-white" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container">
        <h2 className="business-games-title" style={{ color: '#0d0614', marginBottom: '3.5rem' }}>
          Fun + Bonding Activities
        </h2>
        
        <div className="business-games-grid">
          {/* Card 1: Friendly Feud (bg-color3) */}
          <div className="business-games-card bg-color3">
            <div className="program-img-wrapper">
              <div className="program-badge-fire" style={{ top: '0.8rem', right: '0.8rem' }}>🔥</div>
              <img src="/friendly_feud.png" alt="Friendly Feud" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Friendly Feud</h3>
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

          {/* Card 2: Dragon Dance-Off (bg-color4) */}
          <div className="business-games-card bg-color4">
            <div className="program-img-wrapper">
              <img src="/dragon_dance.png" alt="Dragon Dance-Off" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Dragon Dance-Off</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  150 - 180 mins
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

          {/* Card 3: Corporate Training And Development (bg-color5) */}
          <div className="business-games-card bg-color5">
            <div className="program-img-wrapper">
              <img src="/corporate_training.png" alt="Corporate Training And Development" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Corporate Training And Development</h3>
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

          {/* Card 4: Conflict Resolution Training (bg-color6) */}
          <div className="business-games-card bg-color6">
            <div className="program-img-wrapper">
              <img src="/conflict_resolution.png" alt="Conflict Resolution Training" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Conflict Resolution Training</h3>
              <div className="program-meta">
                <span className="program-meta-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  60 - 90 mins
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
      </div>
    </section>
  );
}

export default FunBondingGames;
