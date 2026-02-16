import React, { useEffect, useState , useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/appContext'

const Login = () => {
  

  const [state,setState] = useState('Login')
  const {setShowlogin} = useContext(AppContext)

  useEffect(()=>{
    document.body.style.overflow ='hidden';
    return ()=>{
        document.body.style.overflow ='unset';
    }
  },[])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4">
      
      <form className="relative bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-4">

        {/* Close icon */}
        <img 
          src={assets.cross_icon} 
          alt="Close" 
          onClick={() => setShowlogin(false)}
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          {state}
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Welcome back! Please sign in to continue
        </p>

        {/* Name Input */}
        {state !== 'Login' && <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
          <img src={assets.profile_icon} alt="" className="w-5 h-5 opacity-70" />
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>}

        {/* Email Input */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
          <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-70" />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
          <img src={assets.lock_icon} alt="" className="w-5 h-5 opacity-70" />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-blue-600 hover:underline cursor-pointer text-right mt-1">
          Forgot Password?
        </p>

        {/* Submit Button */}
        <button className="w-full mt-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Auth Switch */}
       { state === 'Login' ? <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={()=>setState('Sign Up')}>
            Sign Up
          </span>
        </p>
        :
        <p className="text-sm text-gray-600 text-center mt-1">
          Already have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline"  onClick={()=>setState('Login')}>
            Login
          </span>
        </p>}

      </form>
    </div>
  )
}

export default Login
