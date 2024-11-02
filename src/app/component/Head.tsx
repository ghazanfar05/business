import React from 'react';

const Head = () => {
  return (
    <footer className="text-gray-700">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-950 py-28">
        {/* 3D Gradient Effect for the Heading */}
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal md:w-2/5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
          <span className="text-white">GOO To</span> UNTIL READY TO Business.
        </h1>

        <div>
          {/* 3D Effect for the Input */}
          <input
            type="text"
            placeholder="Enter Your P.NO"
            className="text-gray-700 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg"
          />
          {/* 3D Effect for the Button */}
          <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-black hover:from-gray-600 hover:via-gray-700 hover:to-gray-900 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full shadow-lg transform hover:translate-y-1 hover:scale-105 transition-all ease-in-out">
            Request Call
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Head;
