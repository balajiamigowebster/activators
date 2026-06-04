import React from 'react';

function ConstructionGames() {
  return (
    <section id="construction-activities" className="business-games-section-white" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container">
        <h2 className="business-games-title" style={{ color: '#0d0614', marginBottom: '3.5rem' }}>
          Construction + Invention Activities
        </h2>
        
        <div className="business-games-grid">
          {/* Card 1: The Great Garden Grand Prix (bg-color2) */}
          <div className="business-games-card bg-color2">
            <div className="program-img-wrapper">
              <img src="/garden_grand_prix.png" alt="The Great Garden Grand Prix" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">The Great Garden Grand Prix</h3>
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
                  Indoors/Outdoors
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Design a Board Game (bg-color3) */}
          <div className="business-games-card bg-color3">
            <div className="program-img-wrapper">
              <img src="/board_game.png" alt="Design a Board Game" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Design a Board Game</h3>
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

          {/* Card 3: Cascade Loop (bg-color4) */}
          <div className="business-games-card bg-color4">
            <div className="program-img-wrapper">
              <div className="program-badge-fire" style={{ top: '0.8rem', right: '0.8rem' }}>🔥</div>
              <img src="/corporate_training.png" alt="Cascade Loop" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Cascade Loop</h3>
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

          {/* Card 4: Bridge Racer (bg-color5) */}
          <div className="business-games-card bg-color5">
            <div className="program-img-wrapper">
              <img src="/school_scramble.png" alt="Bridge Racer" className="program-img" />
            </div>
            <div className="program-content">
              <h3 className="program-title">Bridge Racer</h3>
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
        </div>
      </div>
    </section>
  );
}

export default ConstructionGames;
