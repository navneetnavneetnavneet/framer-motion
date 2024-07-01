import React from 'react'
import Navbar from './navbar/Navbar'
import HeroImage from './heroComponent/HeroImage'
import HeroText from './heroComponent/HeroText'
import CenterFlex from './flexdiv/CenterFlex'

const HomePage = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <Navbar />
        <HeroImage />
        <CenterFlex />
        <HeroText />
    </div>
  )
}

export default HomePage