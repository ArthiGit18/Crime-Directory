import React, { useState, useEffect } from 'react';
import Navbar from '../pages/Navbar';
import Hero from '../pages/Hero';
import About from '../pages/About';
import ForensicFacts from '../pages/Forensic';
import TestimonialBook from '../pages/Testimonial';
import Cards from '../pages/Stories';
import BedtimeStorySection from '../pages/Audio';
import TopPicks from '../pages/Toppicks';
import PuzzleGameSection from '../pages/Puzzle';
import Footer from '../pages/Footer';
import ContactSection from '../pages/Contact';

export const Main = () => {
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);

  // Effect to change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarBlack(true); // Set navbar background to black after scrolling
      } else {
        setIsNavbarBlack(false); // Keep navbar transparent before scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isBlack={isNavbarBlack} />
      <Hero />
      <About />
      <TopPicks />
      <ForensicFacts />
      <TestimonialBook />
      <Cards />
      <BedtimeStorySection />
      <PuzzleGameSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
