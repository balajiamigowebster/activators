import React from 'react';

function Planner({ 
  plannerServices, 
  selectedServices, 
  toggleService, 
  calculateTotal, 
  handlePlannerSubmit,
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactBrief,
  setContactBrief,
  plannerSubmitted 
}) {
  return (
    <section id="planner" className="section" style={{ backgroundColor: 'rgba(10, 10, 15, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">Interactive Project Planner</h2>
        <p className="section-subtitle">Select services to construct a custom estimation proposal for your product release.</p>

        {/* Planner Workspace */}
        <div className="planner-wrapper">
          
          {/* Services Options selector */}
          <div className="planner-services">
            {plannerServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <div 
                  key={service.id} 
                  className={`planner-option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="option-details">
                    <div className="option-checkbox">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h4 className="option-text-title">{service.title}</h4>
                      <p className="option-text-desc">{service.desc}</p>
                    </div>
                  </div>
                  <div className="option-price">${service.price.toLocaleString()}</div>
                </div>
              );
            })}

            {/* Consultation details Form */}
            <form onSubmit={handlePlannerSubmit} className="glass-card" style={{ marginTop: '1.5rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Ready to Activate?</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Jane Doe" 
                    required 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="jane@company.com" 
                    required 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details (Optional)</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Describe your goals, targets, and timeline constraints..."
                  value={contactBrief}
                  onChange={(e) => setContactBrief(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Estimate Request
              </button>

              {plannerSubmitted && (
                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '8px', color: '#4ade80', textAlign: 'center' }}>
                  Proposal submitted! Our engineering lead will contact you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Sticky live calculator card */}
          <div className="planner-summary-card">
            <h3 className="summary-title">Summary & Cost</h3>
            
            {selectedServices.map((id) => {
              const service = plannerServices.find(s => s.id === id);
              if (!service) return null;
              return (
                <div key={id} className="summary-item">
                  <span>{service.title.split(' ')[0]} Integration</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>${service.price.toLocaleString()}</span>
                </div>
              );
            })}

            <div className="summary-item" style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.8rem' }}>
              <span>Standard Delivery Frame</span>
              <span>4 - 6 weeks</span>
            </div>

            <div className="summary-total">
              <span>Estimated Total</span>
              <span className="summary-total-price">${calculateTotal().toLocaleString()}</span>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'left', lineHeight: '1.4' }}>
              *This is an approximate estimate based on selected system architectures. Actual project deliverables and terms will be locked post initial intake session.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Planner;
