import React from 'react';

function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'rgba(10, 10, 15, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">Creative Services, Activated.</h2>
        <p className="section-subtitle">We design and develop performant ecosystems. Elevate your project with custom architectural frameworks.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Interactive Web Apps</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Leverage React, SPA models, and Vite environments. We construct fast, modular apps designed for clean transitions.
            </p>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-secondary)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                <path d="M12 16V12"></path>
                <path d="M12 8H12.01"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Design Systems</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Complete Figma to React component translation. Custom design tokens, glassmorphism templates, and unified CSS models.
            </p>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(6, 182, 212, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-cyan)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Mobile Engineering</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              High-performance iOS & Android deployments. Native component bridges, device integration, and hardware-accelerated layouts.
            </p>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Growth & Performance</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              SEO semantic structuring, Core Web Vitals refinement, and rapid load architecture to accelerate customer conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
