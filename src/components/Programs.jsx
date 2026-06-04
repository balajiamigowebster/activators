import React, { useState } from 'react';

const CATEGORIES = [
  'All',
  'Outdoor Games',
  'Indoor Games',
  'Motivation Activities',
  'Leadership Team Building',
  'Communication',
  'Tech Based Programs',
  'Problem Solving',
  'Training and Development',
];

const PROGRAMS_DATA = [
  {
    id: 1,
    title: 'Saving The Boss',
    image: '/saving_boss.png',
    duration: '90 - 120 mins',
    location: 'Indoors/Outdoors',
    bgClass: 'bg-color1',
    categories: ['Outdoor Games', 'Indoor Games', 'Problem Solving'],
    featured: false
  },
  {
    id: 2,
    title: 'Friendly Feud',
    image: '/friendly_feud.png',
    duration: '90 - 120 mins',
    location: 'Indoors',
    bgClass: 'bg-color2',
    categories: ['Indoor Games', 'Communication'],
    featured: true
  },
  {
    id: 3,
    title: 'Dragon Dance-Off',
    image: '/dragon_dance.png',
    duration: '150 - 180 mins',
    location: 'Indoors',
    bgClass: 'bg-color3',
    categories: ['Indoor Games', 'Motivation Activities'],
    featured: false
  },
  {
    id: 4,
    title: 'Corporate Training And Development',
    image: '/corporate_training.png',
    duration: '120 - 150 mins',
    location: 'Indoors',
    bgClass: 'bg-color4',
    categories: ['Training and Development', 'Leadership Team Building'],
    featured: false
  },
  {
    id: 5,
    title: 'The Great Garden Grand Prix',
    image: '/garden_grand_prix.png',
    duration: '90 - 120 mins',
    location: 'Indoors/Outdoors',
    bgClass: 'bg-color5',
    categories: ['Outdoor Games', 'Problem Solving'],
    featured: false
  },
  {
    id: 6,
    title: 'School Scramble',
    image: '/school_scramble.png',
    duration: '90 - 120 mins',
    location: 'Indoors',
    bgClass: 'bg-color1',
    categories: ['Indoor Games', 'Motivation Activities'],
    featured: false
  },
  {
    id: 7,
    title: 'Design A Board Game',
    image: '/board_game.png',
    duration: '90 - 120 mins',
    location: 'Indoors',
    bgClass: 'bg-color2',
    categories: ['Indoor Games', 'Problem Solving'],
    featured: false
  },
  {
    id: 8,
    title: 'Conflict Resolution Training',
    image: '/conflict_resolution.png',
    duration: '60 - 90 mins',
    location: 'Indoors',
    bgClass: 'bg-color3',
    categories: ['Training and Development', 'Communication', 'Leadership Team Building'],
    featured: false
  }
];

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter programs based on selected category
  const filteredPrograms = activeCategory === 'All'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(program => program.categories.includes(activeCategory));

  return (
    <section id="popular-activities" className="programs-section">
      <div className="container">
        <h2 className="programs-section-title">Popular Team Building Activities</h2>
        
        {/* Category Filters Bar */}
        <div className="category-filter-row">
          <h3 className="category-filter-heading">Search by Category</h3>
          <ul className="category-pills-list">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button 
                  className={`category-pill-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Filtered Grid */}
        <div className="programs-grid">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id} 
              className={`program-card ${program.featured ? 'featured' : ''} ${program.bgClass}`}
            >
              {program.featured && <div className="program-pointer"></div>}
              
              <div className="program-img-wrapper">
                {program.featured && <div className="program-badge-fire">🔥</div>}
                <img src={program.image} alt={program.title} className="program-img" />
              </div>
              
              <div className="program-content">
                <h3 className="program-title">{program.title}</h3>
                <div className="program-meta">
                  <span className="program-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {program.duration}
                  </span>
                  <span className="program-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    {program.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filteredPrograms.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
              No activities found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Programs;
