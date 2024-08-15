
import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep/>
      <Pricing />
      <Testimonial />
      <Contact/>
    </div>
  )
}

export default App