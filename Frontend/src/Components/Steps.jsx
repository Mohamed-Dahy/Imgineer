import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          How It Works
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Transform Words Into Stunning Images in 3 Easy Steps
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-full font-bold text-lg shadow-md">
              {index + 1}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
