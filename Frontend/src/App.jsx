import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import BuyCredit from './Pages/BuyCredit'
import Result from './Pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContext } from './Context/appContext'
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const {showLogin} = useContext(AppContext)
  return (
<div className="px-4 sm:px-10 md:px-14 lg:px-28 
min-h-screen bg-linear-to-br from-white via-blue-50 to-blue-200 text-gray-800">


      <ToastContainer  position='bottom-right'/>
      <Navbar />
      {showLogin && <Login></Login>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy-credits' element={<BuyCredit />} />
        <Route path='/result' element={<Result />} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App