import React from 'react'

const Uk = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center  h-screen overflow-hidden  sm:mt-12-mt-14">
      {/* Image Section */}
      <div className="flex relative h-[360px] px-1 py-1 shadow-2xl mb-4 ">
        <img src=" dev22.png"
          alt=""
          className=' ' />
      </div>
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bg-gray-100">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Catchy Heading</h1>
          <p className="text-lg md:text-xl mb-6">
            This is a brief description or tagline that captures attention. It should be compelling and provide a quick overview of what you offer.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
            Call to Action
          </button>
        </div>
      </div>
    </section>
  )
}

export default Uk