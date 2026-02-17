import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-10 lg:px-28 flex flex-col sm:flex-row items-center justify-between gap-6">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="Imgineer Logo" className="w-36 sm:w-40" />
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm text-center sm:text-left">
        © 2026 Imagify | All rights reserved.
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-4">
        {[assets.facebook_icon, assets.instagram_icon, assets.twitter_icon].map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="Social icon"
            className="w-9 h-9 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  )
}

export default Footer
