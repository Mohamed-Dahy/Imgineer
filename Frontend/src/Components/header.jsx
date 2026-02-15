import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-16 px-4 sm:px-6 lg:px-28 text-gray-800">

      {/* Tagline with icon */}
      <div className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
        <p className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
          Best text-to-image generator
        </p>
        <img src={assets.star_icon} alt="Star icon" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Main heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
        Turn text into <span className="text-blue-600">images</span> in seconds!
      </h1>

      {/* Subtext */}
      <p className="text-center text-gray-600 max-w-xl text-lg sm:text-xl">
        Turn your words into stunning visuals instantly. Unleash your imagination with AI-powered image generation.
      </p>

      {/* CTA button */}
      <button className="mt-6 flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Try it Now
        <img src={assets.star_group} alt="Stars" className="w-6 h-6" />
      </button>

      {/* Feature / social proof section */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <img src={assets.sample_img_1} alt="Sample 1" className="w-12 h-12 rounded-lg shadow-sm" />
          <p className="text-gray-600 font-medium">Thousands of images created</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={assets.sample_img_2} alt="Sample 2" className="w-12 h-12 rounded-lg shadow-sm" />
          <p className="text-gray-600 font-medium">Fast & AI-powered</p>
        </div>
        
        <div className="flex items-center gap-2">
          <img src={assets.sample_img_1} alt="Sample 3" className="w-12 h-12 rounded-lg shadow-sm" />
          <p className="text-gray-600 font-medium">Easy to use & share</p>
        </div>
      </div>

      {/* Optional small testimonial / trust line */}
      <p className="mt-4 text-gray-500 text-sm">
        Join thousands of creators who bring their ideas to life with Imgineer.
      </p>


    </div>
  )
}

export default Header
