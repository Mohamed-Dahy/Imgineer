import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Desc = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50 flex flex-col items-center sm:items-start gap-8">

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 text-center sm:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Turn your words into <span className="text-blue-600">amazing visuals</span> instantly
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl text-center sm:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Imgineer is an AI-powered platform that transforms text descriptions into stunning, high-quality images. 
        Whether you're a designer, writer, or creative professional, our tool helps you visualize your ideas instantly.
      </motion.p>

      {/* Image */}
      <motion.div
        className="w-full flex justify-center sm:justify-start"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={assets.sample_img_1} 
          alt="Sample AI Image" 
          className="w-80 xl:w-96 rounded-lg shadow-xl"
          whileHover={{ scale: 1.06, rotate: -1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { repeat: Infinity, duration: 4 } }}
        />
      </motion.div>

    </div>
  )
}

export default Desc
