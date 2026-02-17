import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Feedback = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50 flex flex-col items-center sm:items-start gap-8">

      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 text-center sm:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Customer Feedback
      </motion.h1>

      <motion.p
        className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl text-center sm:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      >
        What our users say about Imgineer ?
      </motion.p>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 w-full sm:w-80"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <motion.img
                src={testimonial.image}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 italic">"{testimonial.text}"</p>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-3">
              {Array(testimonial.stars).fill().map((_, i) => (
                <motion.img
                  key={i}
                  src={assets.rating_star}
                  alt="Star"
                  className="w-5 h-5"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Feedback
