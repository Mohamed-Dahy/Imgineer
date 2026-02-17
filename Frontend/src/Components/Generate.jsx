import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/appContext'
import { useNavigate } from 'react-router-dom'

const Generate = () => {
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
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-linear-to-r from-white via-blue-50 to-blue-100 flex flex-col items-center gap-6 text-gray-800">
      
      {/* Section title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">
        See the magic. <span className="text-blue-600">Try it now</span>
      </h1>

      {/* CTA button */}
      <button 
        onClick={onClickHandler}
        className="mt-4 flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Generate Images
        <img src={assets.star_group} alt="Stars" className="w-6 h-6" />
      </button>

      {/* Optional subtext */}
      <p className="text-gray-600 text-center max-w-xl mt-4 text-lg sm:text-xl">
        Turn your ideas into stunning images instantly. Experience AI-powered creativity in seconds.
      </p>

    </div>
  )
}

export default Generate
