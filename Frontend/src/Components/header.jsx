import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../Context/appContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {user,setShowlogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () =>{
      if(user){
        navigate('/result')
      }else{
        setShowlogin(true)
      }
    }
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 mt-16 px-4 sm:px-6 lg:px-28 text-gray-800"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      {/* Tagline */}
      <motion.div
        className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
          Best text-to-image generator
        </p>

        {/* floating icon */}
        <motion.img
          src={assets.star_icon}
          alt="Star icon"
          className="w-8 h-8 sm:w-10 sm:h-10"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn text into <span className="text-blue-600">images</span> in seconds!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-center text-gray-600 max-w-xl text-lg sm:text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn your words into stunning visuals instantly. Unleash your imagination with AI-powered image generation.
      </motion.p>

      {/* CTA */}
      
      <motion.button
        onClick={onClickHandler}
        className="mt-6 flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        transition={{  duration: 0.2 }}
        viewport={{ once: true }}
      >
        Try it Now
        <motion.img
          src={assets.star_group}
          alt="Stars"
          className="w-6 h-6"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.button>

      {/* Features */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {[assets.sample_img_1, assets.sample_img_2, assets.sample_img_1].map((img, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -4 }}
          >
            <img src={img} alt="" className="w-12 h-12 rounded-lg shadow-sm" />
            <p className="text-gray-600 font-medium">
              {i === 0 && "Thousands of images created"}
              {i === 1 && "Fast & AI-powered"}
              {i === 2 && "Easy to use & share"}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust line */}
      <motion.p
        className="mt-4 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join thousands of creators who bring their ideas to life with Imgineer.
      </motion.p>

    </motion.div>
  )
}

export default Header
