import React from 'react'

const Ul = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center h-screen overflow-hidden sm:mt-14">
            {/* Image Section */}
            <div className="relative lg:w-1/2 h-[340px] lg:h-auto flex justify-center items-center px-4 py-1">
                <img src="dev9.png" alt="Descriptive image" className="object-cover w-full  rounded-md h-full lg:w-auto lg:h-auto" />
            </div>
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:w-1/2 lg:pl-16 p-4">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Business Working</h1>
                    <p className="text-lg md:text-xl mb-6 text-gray-700">
                    Certainly! Crafting an effective introduction for business work typically involves succinctly presenting yourself and your role, establishing context, and setting a positive tone. Here’s a general structure you can follow:


                    </p>
                    <button className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-black transition-colors duration-300">
                        Call to Action
                    </button>
                </div>
            </div>
        </section>










    )
}

export default Ul