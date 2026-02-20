import React,{useContext, useState} from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import {AppContext} from '../Context/appContext'
import { toast } from 'react-toastify'

const Result = () => {

  const [Image,setImage] = useState(assets.sample_img_1)
  const [isImageLoading,setIsImageLoading] = useState(false)
  const [Loading ,setLoading] = useState(false)
  const [Input,setInput] = useState('')
  const {generateImage, credit} = useContext(AppContext)

  const onsubmitHandler = async (e) =>{  // later with backend
    e.preventDefault()
    if(credit <= 0){
      toast.error("No credits available! Please buy credits to generate images.");
      return
    }
    setLoading(true)
    if(Input){
      const image = await generateImage(Input)
      if(image){
        setIsImageLoading(true);
        setImage(image)
        setLoading(false)
      } else {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  return (
    <motion.form
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}    
    onSubmit={onsubmitHandler} className="px-4 sm:px-10 lg:px-28 py-16 flex flex-col items-center gap-8">
      
      {/* Image preview card */}
      <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-md">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={Image}
            alt="Generated"
            className="w-full object-cover"
          />

          {/* Progress bar */}
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${Loading? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>

        {/* Status */}
        
        <p className={!Loading ? 'hidden' : ''}>
          Loading...
        </p>
      </div>

      {!isImageLoading &&
      <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md px-4 py-2">
        <input
          onChange={e =>setInput(e.target.value)} value={Input}
          type="text"
          placeholder="Describe what you want to generate..."
          className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-700"
        />

        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300"
        >
          Generate
          <img src={assets.star_group} alt="" className="w-5 h-5" />
        </button>
      </div>
       }
{isImageLoading &&
<div className="flex items-center justify-center gap-4 mt-6">
  <p className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer transition" onClick={()=>{setIsImageLoading(false)}}>
    Generate Another
  </p>

  <a
    href={Image}
    download
    className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow transition"
  >
    Download
  </a>
</div>
  }
      


    </motion.form>
  )
}

export default Result
