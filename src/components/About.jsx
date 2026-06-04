import React from 'react';

function About() {
  const points = [
    "Team Building Games and Activities",
    "Company Offsites and Retreats",
    "Virtual Employee Engagement",
    "Immersive Experiences",
    "Fun Hands-on Challenges",
    "Corporate Training and Coaching",
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column Heading */}
          <div className="about-heading">
            <h2>
              Team Building that blends <span>Fun</span> and <span>Learning</span>
            </h2>
          </div>

          {/* Right Column Content */}
          <div className="about-content">
            <div className="about-content-text">
              <p>
                <strong>TeamEx</strong> is your go-to group of creative professionals who specialise in innovative team building activities. We offer a wide range of activities to encourage bonding and collaboration within your team.
              </p>
              <p>
                We're dedicated to helping your team reach its full potential and work together to improve the morale and efficiency of the organisation. Get ready to experience extraordinary teamwork!
              </p>
            </div>

            <ul className="about-list">
              {points.map((point, index) => (
                <li key={index} className="about-list-item">
                  <span className="about-list-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ticker Marquee Banner */}
      <div className="ticker-slider-banner">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {/* Duplicated text to make it continuous */}
            <div className="ticker-item">
              Curious about the strategies used by top managers to identify their team's strengths? Download the Essential Toolkit <a href="#contact">here</a>.
            </div>
            <div className="ticker-item">
              Curious about the strategies used by top managers to identify their team's strengths? Download the Essential Toolkit <a href="#contact">here</a>.
            </div>
            <div className="ticker-item">
              Curious about the strategies used by top managers to identify their team's strengths? Download the Essential Toolkit <a href="#contact">here</a>.
            </div>
            <div className="ticker-item">
              Curious about the strategies used by top managers to identify their team's strengths? Download the Essential Toolkit <a href="#contact">here</a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
