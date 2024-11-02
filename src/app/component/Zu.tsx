import React from 'react';

function Zu() {
  return (
    <div id='Services' className="container mx-auto px-4 py-16">
      {/* Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
        <button className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
          All
        </button>
        <button className="bg-gradient-to-r from-gray-800 to-gray-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
          SEO
        </button>
        <button className="bg-gradient-to-r from-gray-800 to-gray-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
          Social Media
        </button>
        <button className="bg-gradient-to-r from-gray-800 to-gray-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
          UX/UI Design
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <img src="dev25.png" alt="ABBN" className="w-full h-64 object-cover" />
          <div className="p-6 bg-gradient-to-r from-purple-100 to-indigo-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Redefining the Online Presence of The Industry-Leader Company</h2>
            <a href="#" className="text-indigo-600 hover:underline font-semibold">View More →</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <img src="dev26.png" alt="ABBN" className="w-full h-64 object-cover" />
          <div className="p-6 bg-gradient-to-r from-green-100 to-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Form Meets Function: Transforming Cabinet IQ's Online Presence</h2>
            <a href="#" className="text-green-600 hover:underline font-semibold">View More →</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
          <img src="dev27.png" alt="ABBN" className="w-full h-64 object-cover" />
          <div className="p-6 bg-gradient-to-r from-pink-100 to-orange-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Transforming Digital Footprint: Tactica's Journey with Dakine Services</h2>
            <a href="#" className="text-pink-600 hover:underline font-semibold">View More →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zu;
