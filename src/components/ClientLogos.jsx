import React from 'react';

function ClientLogos() {
  const logos = [
    { name: 'Axis Bank', url: 'https://www.theteamex.com/public/upload/clients/0G75YoVvPC_Axis_Mutual_Fund_Logo.svg.png' },
    { name: 'GitHub', url: 'https://www.theteamex.com/public/upload/clients/GKucshVlVQ_github-logo-vector.png' },
    { name: 'Google', url: 'https://www.theteamex.com/public/upload/clients/Tqpzo7DcDV_Google_2015_logo.svg.jpg' },
    { name: 'Shark Ninja', url: 'https://www.theteamex.com/public/upload/clients/q7jqgXFp6u_download.png' },
    { name: 'GoDaddy', url: 'https://www.theteamex.com/public/upload/clients/flb1mM3Lu3_GD_LOCKUP_RGB_BLACK.png' },
  ];

  return (
    <section className="clientele-section">
      <div className="container clientele-container">
        <div className="clientele-title-box">
          <h3>Our Clientele</h3>
        </div>
        <div className="clientele-logos-slider">
          <div className="logos-track">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img 
                key={index} 
                src={logo.url} 
                alt={logo.name} 
                className="client-logo-img" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
