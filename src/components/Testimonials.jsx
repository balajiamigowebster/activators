import React, { useState, useEffect } from 'react';

const TESTIMONIALS_DATA = [
  {
    quote: "The event was conducted exceptionally well. We had two hours of fun, engaging in multiple activities organized by the Activators team. By the end, we were delightfully exhausted and enjoyed every moment. A special shoutout to their balloon activities and the creative props used for the dress-up games!",
    author: "Vaishali",
    role: "HR Manager, IndiaLends",
    image: null
  },
  {
    quote: "Squid Games was thrilling and so much fun! The challenges pushed us to think quickly and collaborate, and it was nostalgic and relatable to the original Netflix series. It was an excellent way to bond and push our limits as a team!",
    author: "Suhani",
    role: "Manager",
    image: null
  },
  {
    quote: "The treasure hunt was a blast! We got to explore the city, think outside the box, and have some friendly competition. A perfect mix of fun and teamwork!",
    author: "Anubhav",
    role: "Financial Analyst",
    image: null
  },
  {
    quote: "The Cascade Loop brought out our team’s creativity. It was a tricky domino challenge with multiple props, but seeing everyone come together and solve the problem felt amazing. Definitely an activity that strengthens collaboration.",
    author: "Suman",
    role: "M2K",
    image: null
  },
  {
    quote: "The emcee-style activities were fantastic! They were engaging, and energetic, and kept everyone on their toes. The best part was how smoothly everything flowed with just one person leading all the activities, making it easy for the team to stay connected and have fun. Highly recommend it for a dynamic and interactive experience!",
    author: "Sakshi",
    role: "Woodwards",
    image: null
  },
  {
    quote: "My team at Google went for a team building event organised by Activators. The activities offered by them were pretty unique and the team enjoyed a lot",
    author: "Ishank Saxena",
    role: "Google",
    image: "https://www.theteamex.com/public/upload/testimonials/ZzW16abYKT_unnamed.png"
  },
  {
    quote: "Activators completely exceeded my expectations and did a fantastic job. From planning to execution, they managed every aspect with great professionalism, energy, and attention to detail. Highly recommended for anyone looking for someone who takes ownership and delivers exceptional results.",
    author: "Isha R.",
    role: "Senior HR Manager, Saigal SeaTrade",
    image: null
  },
  {
    quote: "Dr. Kalyan brought an incredible level of energy, presence, and command to the room. His ability to engage a large group, hold attention seamlessly, and make everyone feel involved was truly remarkable. The feedback from the entire team has been overwhelmingly positive.",
    author: "Anshul Agarwal",
    role: "Audit Senior Manager, Deloitte",
    image: null
  },
  {
    quote: "Kalyan and Activators offer something really unique and interactive to help your employees bond. The whole day changed the way our employees think and act. It rectified internal coordination issues across our multiple offices to a great extent.",
    author: "Aman Mittal",
    role: "Director, Vani Kabir Multiverse",
    image: null
  },
  {
    quote: "Build a Wheelchair activity was the activity where we were provided with props to construct wheelchairs for a CSR initiative. Activators even helped us partner with an NGO to donate the wheelchairs, adding a truly impactful dimension to the experience. Highly recommend them if you’re looking for a team-building activity that goes beyond the ordinary and leaves a lasting impression!",
    author: "Rohan",
    role: "Gufic",
    image: null
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive logic to handle visible cards depending on viewport size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalDots = TESTIMONIALS_DATA.length - visibleCards + 1;

  // Make sure activeIndex stays within bounds when resizing
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, TESTIMONIALS_DATA.length - visibleCards));
  }, [visibleCards]);

  // Auto-play / Carousel auto-slide effect
  useEffect(() => {
    if (totalDots <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalDots);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalDots]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="stats-title" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          What Clients Say
        </h2>
        
        <div className="testimonials-slider-container">
          <div 
            className="testimonials-slider-track"
            style={{
              transform: `translate3d(calc(-${activeIndex} * (100% + 2rem) / ${visibleCards}), 0, 0)`
            }}
          >
            {TESTIMONIALS_DATA.map((item, index) => (
              <div 
                key={index}
                className="testimonials-slider-item"
                style={{
                  flex: `0 0 calc((100% - (${visibleCards} - 1) * 2rem) / ${visibleCards})`
                }}
              >
                <div className="testi-card">
                  <div className="rate-wrapper"> 
                    <span className="icon"> 
                      <img 
                        src="https://www.theteamex.com/public/frontend/assets/img/gallery/qt.svg" 
                        alt="quote icon" 
                      /> 
                    </span>
                  </div>
                  <div className="main-txt">
                    <p>{item.quote}</p>
                  </div>
                  <div className="user-info">
                    {item.image && (
                      <div className="image-wrapper mb-3"> 
                        <img src={item.image} alt={item.author} />
                      </div>
                    )}
                    <h6 className="testi-name">{item.author}</h6>
                    <p className="text-company-name">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots */}
          {totalDots > 1 && (
            <div className="slider-dots-wrapper">
              {Array.from({ length: totalDots }).map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
