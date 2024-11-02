'use client';
import React from 'react';

const Slider: React.FC = () => {
  return (
    <div id='Home'  className="min-h-screen">
      <div
        className="relative h-screen lg:h-[150vh] bg-fixed bg-cover bg-center "
        style={{ backgroundImage: 'url(dev30.png)' }}
      >
        <div className=" px-4 sm:px-6 lg:px-8 max-w-screen-2xl  absolute inset-0 bg-black/40 z-0 mx-auto  flex flex-col items-center justify-center h-full text-black">
          {/* Main Heading */}
          <h1 className="lg:text-[4rem] text-[2.5rem] md:text-[3rem] text-center font-bold mb-5 mt-4">
            We,re Website A Modern Digital{' '}
            <span className="italic text-amber-400">Agency?</span>
          </h1>

          {/* Subheading */}
          <h2 className="hidden lg:block text-[1.6rem] sm:text-[2rem] font-light transition-transform duration-100 animated-fromRight">
            Grow Your <span className="font-bold">BUSINESS</span>{' '}
            <span className="text-[2rem]">With Us!</span>
          </h2>
          <h2 className="lg:hidden block text-[1.6rem] sm:text-[2rem] font-light">
            We pay <span className="font-bold">cash</span>{' '}
            <span className="text-[1rem]">for homes!</span>
          </h2>

          {/* Typewriter Effect (Optional) */}
          <div className="text-[1.25rem] italic font-bold lg:block hidden hero1:text-[1.5rem] transition-transform duration-1000 animated-fromRight">
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper"></span>
              <span className="Typewriter__cursor">|</span>
            </div>
          </div>
          <div className="text-[1.25rem] block lg:hidden hero1:text-[1.5rem] italic font-bold">
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper"></span>
              <span className="Typewriter__cursor">|</span>
            </div>
          </div>

          {/* Form (Address Input and Button) */}
          <div className="w-full max-w-md lg:max-w-none lg:flex justify-center gap-6 mt-10">
            <div className="relative w-full lg:w-auto">
              <input
                type="text"
                className="px-5 py-3 w-full lg:w-[315px] text-black rounded-sm border-none outline-none focus:ring-0"
                placeholder="✓ Enter Your Home Address"
                required
              />
            </div>
            <div className="flex justify-center w-full lg:w-auto mt-4 lg:mt-0">
              <button className="w-full lg:w-[260px] px-5 py-3 bg-[#099fdb] hover:bg-[#219ed0] text-white rounded-full shadow-lg">
                Get your FREE Cash Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
