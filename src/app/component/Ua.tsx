import React from 'react';

const Ua = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Vision Ahead
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          At [Your Company Name], we’re dedicated to forging the future through
          creativity, responsibility, and outstanding quality. Our
          forward-thinking approach is grounded in innovation and sustainability
          to achieve transformative results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-transparent opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-10 relative">
            Brand Identity
            </h3>
            <p className="text-gray-600 z-10 relative">
            Explain the visual elements of the brand (logo, color scheme, typography).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-10 relative">
            Marketing Channels
            </h3>
            <p className="text-gray-600 z-10 relative">
            Identify the key platforms for promoting your brand (social media, email, SEO, content marketing).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-10 relative">
            Promotions and Advertising
            </h3>
            <p className="text-gray-600 z-10 relative">
            Detail paid advertising strategies (Google Ads, social media ads, etc.).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-25 rounded-lg group-hover:opacity-50 transition-opacity"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-10 relative">
            Content Strategy
            </h3>
            <p className="text-gray-600 z-10 relative">
            Outline plans for content creation (blogs, videos, infographics, etc.).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ua;
