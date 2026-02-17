import React from 'react'
import { assets } from '../assets/assets'

const Desc = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50 flex flex-col items-center sm:items-start gap-8">
      
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 text-center sm:text-left">
        Turn your words into <span className="text-blue-600">amazing visuals</span> instantly
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl text-center sm:text-left">
        Imgineer is an AI-powered platform that transforms text descriptions into stunning, high-quality images. 
        Whether you're a designer, writer, or creative professional, our tool helps you visualize your ideas instantly.
      </p>

      {/* Sample image */}
      <div className="w-full flex justify-center sm:justify-start">
        <img 
          src={assets.sample_img_1} 
          alt="Sample AI Image" 
          className="w-80 xl:w-96 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

    </div>
  )
}

export default Desc
