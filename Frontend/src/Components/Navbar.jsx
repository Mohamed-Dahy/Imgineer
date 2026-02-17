import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/appContext'
const Navbar = () => {
    const {user,setShowlogin} = useContext(AppContext);

    
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
       <Link to='/'><img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'  /> </Link> 

       <div>
        {user ? 
        <div className='text-sm sm:text-base lg:text-lg flex items-center gap-4'>          
          <button onClick= {()=>navigate('/buy-credit')} className='flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300 transition duration-300 cursor-pointer'>
            <img src={assets.credit_star} alt="" className='w-5 h-5 ml-2' />
            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits Left : 50</p>
          </button>
         <p className='text-sm sm:text-base lg:text-lg'>Welcome, User!</p>
         <div className='relative group'>
            <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
            <div className='absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block'>
              <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'><li className='py-1 px-2 cursor-pointer pr-10'>Logout</li></ul>
            </div>
         </div>

        </div>
        :
        <div className='flex items-center gap-4 text-sm sm:text-base lg:text-lg'>
          <p   onClick={() => navigate('/buy-credits')} className='cursor-pointer hover:underline'>Pricing</p>
          <button onClick={()=>setShowlogin(true)} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>Login</button>
        </div>
    }
        
        
       </div>
    </div>

  )
}

export default Navbar