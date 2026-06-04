import React, { useState } from 'react';

function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formParticipants, setFormParticipants] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormDate('');
      setFormParticipants('');
      setFormCity('');
      setFormMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section-banner">
      <div className="container">
        <div className="contact-banner-container">
          
          {/* Left Text Column */}
          <div className="contact-text-side">
            <h2>Book Your Free Consultation Today!</h2>
            <p style={{ marginBottom: '2rem' }}>
              Let’s start a conversation. Whether you’re planning a large company offsite, an in-office bonding day, or a virtual challenge for global teams, we’re here to help you coordinate the perfect experience.
            </p>
            <p>
              Fill out the form with your event details, and our team of engagement specialists will get back to you with custom program designs and pricing estimates within 24 hours.
            </p>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-side">
            <h3>Let's start a conversation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
                <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="John Smith" 
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%' }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
                <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>Email Address *</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="john@company.com" 
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '1.2rem' }}>
                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>Date of Event</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%', height: '42px' }}
                  />
                </div>
                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>No. of Participants</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    placeholder="e.g. 50"
                    value={formParticipants}
                    onChange={(e) => setFormParticipants(e.target.value)}
                    style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%', height: '42px' }}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
                <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>Event City / Location</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Mumbai, In-Office, Resort" 
                  value={formCity}
                  onChange={(e) => setFormCity(e.target.value)}
                  style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%' }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                <label className="form-label" style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block' }}>Brief Message / Details</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Tell us about your team goals and activities you like..." 
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  style={{ border: '1.5px solid rgba(0, 0, 0, 0.08)', borderRadius: '8px', padding: '0.65rem 1rem', width: '100%', height: '80px', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="nav-cta" style={{ width: '100%', border: 'none', padding: '0.85rem' }}>
                Connect Now
              </button>

              {formSubmitted && (
                <div style={{ marginTop: '1.2rem', padding: '1rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: '8px', color: '#15803d', textAlign: 'center', fontWeight: '600' }}>
                  Thank you! Our team will get back to you shortly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
