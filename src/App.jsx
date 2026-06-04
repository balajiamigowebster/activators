import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import BusinessGames from './components/BusinessGames';
import ConstructionGames from './components/ConstructionGames';
import FunBondingGames from './components/FunBondingGames';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll detection to adjust nav style and track active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'popular-activities', 'business-games', 'construction-activities', 'fun-bonding', 'about', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={mobileMenuOpen ? 'mobile-menu-active' : ''}>
      {/* Global Header & Navigation */}
      <Navbar 
        activeSection={activeSection}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Sections */}
      <Hero />
      
      <ClientLogos />

      <Stats />

      <About />

      <Programs />

      <BusinessGames />

      <ConstructionGames />

      <FunBondingGames />

      <Testimonials />

      <Gallery />

      <Contact />

      {/* Site Footer */}
      <Footer />

      {/* Floating utility support elements */}
      <FloatingWidgets />
    </div>
  );
}

export default App;
