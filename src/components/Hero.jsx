import React from 'react';

function Hero() {
  return (
    <section id="home" className="home-main-banner">
      <picture>
        {/* Mobile webp & jpg sources (viewport width <= 767px) */}
        <source 
          srcSet="https://www.theteamex.com/public/images/banner-mobile.webp" 
          type="image/webp" 
          media="(max-width: 767px)" 
        />
        <source 
          srcSet="https://www.theteamex.com/public/images/banner-mobile.jpg" 
          type="image/jpeg" 
          media="(max-width: 767px)" 
        />
        
        {/* Desktop webp & jpg sources (viewport width >= 768px) */}
        <source 
          srcSet="https://www.theteamex.com/public/images/banner-desktop.webp" 
          type="image/webp" 
          media="(min-width: 768px)" 
        />
        <source 
          srcSet="https://www.theteamex.com/public/images/banner-desktop.jpg" 
          type="image/jpeg" 
          media="(min-width: 768px)" 
        />
        
        {/* Fallback image */}
        <img 
          src="https://www.theteamex.com/public/images/banner-desktop.jpg" 
          alt="TeamEx Activities Banner Poster" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </picture>
    </section>
  );
}

export default Hero;
