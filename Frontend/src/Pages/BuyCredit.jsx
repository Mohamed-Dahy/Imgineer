import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../Context/appContext'
import { motion } from 'framer-motion'

const BuyCredit = () => {
  const {user} = useContext(AppContext)

  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 bg-gray-50">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-14">
        <button className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
          Our Plans
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Choose the plan that fits you
        </h1>

        <p className="text-gray-500 mt-3">
          Flexible credits for all your AI image generation needs
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((item,index)=>(
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
          >
            <img src={assets.logo_icon} alt="" className="w-10 mb-4"/>

            <p className="text-lg font-semibold text-gray-800 mb-1">
              {item.id}
            </p>

            <p className="text-gray-500 text-sm mb-6">
              {item.desc}
            </p>

            <p className="text-2xl font-bold text-gray-800 mb-6">
              ${item.price} 
              <span className="text-gray-500 text-sm font-normal">
                {' '} / {item.credits} Credits
              </span>
            </p>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
              {user ? 'Purchase' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default BuyCredit
