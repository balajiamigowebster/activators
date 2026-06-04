import React from 'react';

function Portfolio({ projects, portfolioFilter, setPortfolioFilter }) {
  const filteredProjects = portfolioFilter === 'All'
    ? projects
    : projects.filter(p => p.category === portfolioFilter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Engineering Showcase</h2>
        <p className="section-subtitle">A collection of premium platforms designed, engineered, and activated by our team.</p>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {['All', 'Web', 'Mobile', 'Design'].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${portfolioFilter === cat ? 'active' : ''}`}
              onClick={() => setPortfolioFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid list of projects */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-tag-badge">{project.category}</div>
              <div className="portfolio-image-placeholder">
                <div className="portfolio-visual-effect" style={{ background: `radial-gradient(circle, ${project.color}55 0%, transparent 70%)` }}></div>
                <div style={{ fontSize: '4.5rem', fontWeight: '800', color: 'rgba(255, 255, 255, 0.03)', userSelect: 'none', fontFamily: 'var(--font-mono)' }}>
                  0{project.id}
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="portfolio-title" style={{ color: project.color }}>{project.title}</h3>
                <p className="portfolio-desc">{project.desc}</p>
                <div className="portfolio-link-text">
                  Explore Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
