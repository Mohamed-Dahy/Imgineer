import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import BuyCredit from './Pages/BuyCredit'
import Result from './Pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 
min-h-screen bg-gradient-to-r from-white via-blue-50 to-blue-100 text-gray-800">

      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy-credit' element={<BuyCredit />} />
        <Route path='/result' element={<Result />} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App