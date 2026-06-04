import React from 'react';

const IMAGES = [
  'https://www.theteamex.com/public/upload/photos/CLeLXD81Lg_Copy of _P9A0016 (1).jpg',
  'https://www.theteamex.com/public/upload/photos/UNchr2rmuT_WhatsApp Image 2024-11-28 at 12.43.45 PM (1).jpg',
  'https://www.theteamex.com/public/upload/photos/RVRbUN85VJ_Copy of 8G4A4748_11zon.jpg',
  'https://www.theteamex.com/public/upload/photos/BRjY9JesuS_img7.jpg',
  'https://www.theteamex.com/public/upload/photos/qJjko4pD8Y_DH_GroupPhoto.jpg.jpeg',
  'https://www.theteamex.com/public/upload/photos/1qAJLlOVmf_Ryan_DrumJam_ActPraticipants_FunImage (1).jpg.jpeg',
  'https://www.theteamex.com/public/upload/photos/NVTDosO0b8_WK_GroupPhoto_Revised.jpg'
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section-pink">
      <div className="container-fluid" style={{ padding: '0 4%' }}>
        <h2 className="stats-title">Gallery</h2>
        <div className="main-gallery">
          {IMAGES.map((src, index) => (
            <a key={index} href={src} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`TeamEx event ${index + 1}`} />
              <div className="main-gallery-overlay">
                <div className="gallery-overlay-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
