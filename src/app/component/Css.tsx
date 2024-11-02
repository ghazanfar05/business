import React from 'react';

function Css() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl shadow-2xl overflow-hidden md:flex md:flex-row-reverse transform transition-all hover:scale-105 hover:shadow-3xl">
          <div className="w-full md:w-1/2 relative">
            <img
              src="dev26.png"
              alt=""
              className="object-cover  w-full h-80 md:h-full rounded-3xl transition-transform duration-500 ease-out transform hover:scale-110 hover:shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-80 transition-opacity duration-500 hover:opacity-60"></div>
          </div>
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-tight">
              Solution For Your Business.
            </h2>
            <p className="text-lg text-gray-300">
            Our company is committed to delivering innovative solutions that drive measurable success for our clients. With a focus on cutting-edge technology and customer-centric strategies, we provide tailored services that address the unique needs of every business.  
            </p>
            <p className="text-lg text-gray-300">
            By fostering collaboration, we ensure that our approach is aligned with client goals, maximizing efficiency and delivering impactful results. Whether through digital transformation, marketing, or business optimization, we empower our clients to stay competitive and achieve sustainable growth in today's ever-evolving market.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 text-center rounded-full shadow-xl hover:bg-gradient-to-r hover:from-pink-600 hover:to-yellow-500 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* 3D Color Grid Section */}
      <div className="py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Grid Item 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
                src="dev16.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
              src="dev10.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>
              {/* Grid Item 2 */}
              <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
                src="dev9.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>
              {/* Grid Item 2 */}
              <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
                src="dev12.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>
              {/* Grid Item 2 */}
              <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
                src="dev14.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl">
              <img
                src="dev15.png"
                alt="Man"
                className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-xl">Now See!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Css;
