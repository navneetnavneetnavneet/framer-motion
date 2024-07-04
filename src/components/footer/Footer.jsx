import React from 'react'
import HeadingDiv from './HeadingDiv'
import ButtonDiv from './ButtonDiv'
import FooterNav from './FooterNav'
import Circle from './Circle'

const Footer = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 relative'>
      <HeadingDiv />
      <ButtonDiv />
      <FooterNav />
      <Circle />
    </div>
  )
}

export default Footer