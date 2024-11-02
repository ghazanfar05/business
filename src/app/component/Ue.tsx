
'use client';
import React from 'react';

const Ue: React.FC = () => {
  return (
    <div id="Home" className="min-h-screen">
      <div
        className="relative h-screen lg:h-[70vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(dev25.png)' }}
      >
        {/* Add a slight overlay for better readability */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto z-10 flex flex-col items-center justify-center h-full text-white">
          
          {/* Main Heading */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-center font-extrabold mb-5 mt-4">
            Financial Reports{' '}
            <span className="italic text-blue-800">include :</span>
          </h1>

          {/* Subheading for large screens */}
          <h2 className="hidden lg:block text-[1.25rem] sm:text-[1.75rem] lg:text-[2rem] font-light text-center animated-fromRight">
            Grow Your <span className="font-bold">BUSINESS</span>{' '}
            <span className="lg:text-[0.8rem] text-center">
              Presentation of the company's financial performance, including income statements, balance sheets, and cash flow statements. Strategic Goals: Discussion of the company's short-term and long-term objectives, along with the strategies being implemented to achieve them.
            </span>
          </h2>

          {/* Subheading for smaller screens */}
          <h2 className="lg:hidden block text-[1.25rem] sm:text-[1.75rem] font-light text-center">
            We pay <span className="font-bold">cash</span>{' '}
            <span className="text-[1.1rem]">for homes!</span>
          </h2>

          {/* Typewriter Effect (Optional) */}
          <div className="text-[1.25rem] sm:text-[1.5rem] italic font-bold lg:block hidden hero1:text-[1.5rem] transition-transform duration-1000 text-center animated-fromRight">
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper"></span>
            </div>
          </div>
          <div className="text-[1.25rem] sm:text-[1.5rem] block lg:hidden hero1:text-[1.5rem] italic font-bold text-center">
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper"></span>
              <span className="Typewriter__cursor">|</span>
            </div>
          </div>

          {/* Button */}
          <div className="w-full max-w-md lg:max-w-none lg:flex justify-center gap-6 mt-10">
            <div className="flex justify-center w-full lg:w-auto mt-4 lg:mt-0">
              <button className="w-full lg:w-[260px] px-5 py-3 bg-gradient-to-r from-[#0f0f0f] to-[#3f4647] hover:from-[#3b3d3e] hover:to-[#64747b] text-white rounded-full shadow-lg transition-transform transform hover:scale-105 text-center">
                Get view FREE Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ue;
