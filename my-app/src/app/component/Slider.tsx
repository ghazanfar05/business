'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { IoSearchOutline } from "react-icons/io5";

const Slider = () => {

  const images = [
    { src: '/dev14.png', alt: 'Image 1', width: 1920, height: 600 },
    { src: '/dev15.png', alt: 'Image 2', width: 1920, height: 600 },
    { src: '/dev16.png', alt: 'Image 3', width: 1920, height: 600 },
    { src: '/dev17.png', alt: 'Image 4', width: 1920, height: 600 },
    { src: '/dev22.png', alt: 'Image 5', width: 1920, height: 600 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="relative flex w-full h-full">
        <div
          className="absolute flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={600}
                quality={100}
                className="w-full h-full object-cover"
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 md:px-8 lg:px-12">
        <h6 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold hover:border-b ">WE SEE FOR A DIFFERENT HOME</h6>
        <p className="text-xs md:text-sm lg:text-base text-white mt-4">
          **1. WALLS <br />
          Paint: Consider colors and finishes (matte, gloss, satin). For texture, try techniques like sponging, rag rolling, or a stucco finish.<br />
          Wallpaper: There are many textures available, from embossed patterns to fabric finishes.<br />
          Paneling: Wood or MDF panels can add a touch of elegance or warmth.<br />
        </p>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors'>Here.</button>
      </div>
    </div>
  );
};

export default Slider;