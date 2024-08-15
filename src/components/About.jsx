import React, { useState } from 'react';
import thumbailImg from "../assets/video-thumbnail.webp";
import { IoMdPlay } from "react-icons/io";
import { HiArrowRightCircle } from "react-icons/hi2";



const About = () => {
  const [isVideoPlaying, seIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    seIsVideoPlaying(true)
  };

  const handleCloseVideo = () => {
    seIsVideoPlaying(false);
  };

  return (
    <div id='about'
      className='bg-[#f7f8fc] pb-16 pt-32'
    >
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-8'>
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img src={thumbailImg} alt="videothumbail" className='w-full md:h-[446px] h-auto rounded-lg object-cover' />
                  <button
                    onClick={handleVideoPlay}
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'
                  >
                    <IoMdPlay className='size-12 text-white' />
                  </button>
                </div>
              ) : (
                null
              )
            }
          </div>
          {/* right sede */}
          <div className='md:w-1/2 w-full'>
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>
              Individual Consult And Therapy
            </h1>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels,we get to know our pain,through the basices in our new midfull guide on how to meditate.
            </p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <HiArrowRightCircle />
              </a>
            </button>
          </div>

        </div>
        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
              <div className='relative w-full h-full flex items-center justify-center z-50'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bZ8Ny1cFHyc?si=uU3ivBT4Imo5v_qW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white  text-2xl cursor-pointer'>
                  x
                </button>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default About