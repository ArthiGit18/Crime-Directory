import React from 'react'
import Hero from '../pages/Hero'
import Navbar from '../pages/Navbar'
import About from '../pages/About'
import TopPicks from '../pages/Toppicks'
import ForensicFacts from '../pages/Forensic'
import TestimonialBook from '../pages/Testimonial'

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopPicks />
      <ForensicFacts />
      <TestimonialBook />
    </div>
  )
}
