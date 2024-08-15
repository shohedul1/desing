import React from 'react';
import heroImg from "../assets/hero.webp";
import { HiArrowRightCircle } from "react-icons/hi2";


const Hero = () => {
  return (
    <div id='home' className='h-screen bg-heroBg text-white items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full'>
        {/* left side */}
        <div className='md:w-1/2'>
           <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>
           Start Your Journey to Mental Wellness
           </h1>
           <p className="text-lg mb-12 md:pr-8">
            We lower our stress levels,we get to know our pain,through the basices in our new midfull guide on how to meditate.
           </p>
           <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
            <a href="#contact" className='flex gap-1 items-center'>
              <span>Get Started</span>
            <HiArrowRightCircle/>
            </a>
           </button>
        </div>
        {/* right side */}
        <div className='md:w-1/2 h-full'>
          <img src={heroImg} alt="hero image" className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero