import React from 'react'
import Header from '../Components/header'
import Steps from '../Components/Steps'
import Desc from '../Components/Desc'
import Feedback from '../Components/Feedback'
import Generate from '../Components/Generate'


const Home = () => {
  return (
    <div>
        <Header></Header>
        <div className='mt-20'>
            <Steps></Steps>
        </div>
        <Desc></Desc>
        <Feedback></Feedback>
        <Generate></Generate>


    </div>
  )
}

export default Home