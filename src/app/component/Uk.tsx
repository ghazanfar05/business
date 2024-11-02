import React from 'react';

const Uk: React.FC = () => {
  return (
    <div id='About' className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      {/* Logos Section */}
      <div className="flex justify-center flex-wrap gap-8 mb-12">
        <img
          src="/face.png"
          alt="Veteran Owned Business"
          className="h-16 w-auto transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src="/insta.png"
          alt="HGTV"
          className="h-16 w-auto transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src="/google.png"
          alt="BBB Accredited"
          className="h-16 w-auto transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src="/twitt.png"
          alt="Facebook 5 Stars"
          className="h-16 w-auto transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src="/link.png"
          alt="Google 5 Stars"
          className="h-16 w-auto transform transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Message Box */}
      <div className="flex justify-center px-4">
        <div className="bg-white text-center rounded-3xl p-10 shadow-xl max-w-2xl w-full transform transition-all hover:shadow-2xl">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 mb-6">
            Whatever the situation, we have solutions!
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            We buy every kind of property all across the USA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uk;
