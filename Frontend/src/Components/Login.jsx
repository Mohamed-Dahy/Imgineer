import React, { useEffect, useState , useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/appContext'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state,setState] = useState('Login')
  const {setShowLogin,backendURL,setToken,setUser} = useContext(AppContext)
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      if(state === 'Login'){
        const {data}= await axios.post(backendURL + '/api/user/login',{email,password});
        if(data.success){
          setToken(data.token);
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
      }else {
        toast.error(data.message)
      }
      }else{
        const {data}= await axios.post(backendURL + '/api/user/register',{name,email,password});
        if(data.success){
          setToken(data.token);
          setUser(data.user)
          localStorage.setItem('token',data.token)
          setShowLogin(false)
      }else {
        toast.error(data.message)
      }
      }
        
        
    } catch (error) {
      toast.error(error.response.data.message || 'An error occurred')
      
    }
  }


  useEffect(()=>{
    document.body.style.overflow ='hidden';
    return ()=>{
        document.body.style.overflow ='unset';
    }
  },[])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4"
      >
        <motion.form
          onSubmit={onSubmitHandler}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-4"
        >

          {/* Close icon */}
          <motion.img 
            src={assets.cross_icon} 
            alt="Close" 
            onClick={() => setShowLogin(false)}
            whileHover={{ scale: 1.2 }}
            className="absolute top-5 right-5 w-6 h-6 cursor-pointer transition-transform"
          />

          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {state}
          </h1>

          <p className="text-gray-500 text-center mb-6">
            Welcome back! Please sign in to continue
          </p>

          {/* Name Input */}
          {state !== 'Login' && 
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
              <img src={assets.profile_icon} alt="" className="w-5 h-5 opacity-70" />
              <input
              onChange={e=>setName(e.target.value)} value={name}
                type="text"
                placeholder="Full Name"
                required
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </motion.div>
          }

          {/* Email Input */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
            <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-70" />
            <input
              onChange={e=>setEmail(e.target.value)} value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500 transition">
            <img src={assets.lock_icon} alt="" className="w-5 h-5 opacity-70" />
            <input
              onChange={e=>setPassword(e.target.value)} value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full outline-none text-gray-700 placeholder-gray-400"
            />
          </motion.div>

          {/* Forgot Password */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }} className="text-sm text-blue-600 hover:underline cursor-pointer text-right mt-1">
            Forgot Password?
          </motion.p>

          {/* Submit Button */}
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
            {state === 'Login' ? 'Login' : 'Create Account'}
          </motion.button>

          {/* Auth Switch */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
            { state === 'Login' ? 
              <p className="text-sm text-gray-600 text-center mt-4">
                Don't have an account?{' '}
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={()=>setState('Sign Up')}>
                  Sign Up
                </span>
              </p>
              :
              <p className="text-sm text-gray-600 text-center mt-1">
                Already have an account?{' '}
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={()=>setState('Login')}>
                  Login
                </span>
              </p>
            }
          </motion.div>

        </motion.form>
      </motion.div>
    </AnimatePresence>
  )
}

export default Login