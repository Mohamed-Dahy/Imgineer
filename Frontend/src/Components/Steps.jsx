import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50">

      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          How It Works
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Transform Words Into Stunning Images in 3 Easy Steps
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="flex flex-col sm:flex-row sm:justify-between gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Number */}
            <motion.div
              className="w-12 h-12 flex items-center justify-center bg-linear-to-r from-blue-500 to-blue-400 text-white rounded-full font-bold text-lg shadow-md"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
            >
              {index + 1}
            </motion.div>

            {/* Text */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Steps
