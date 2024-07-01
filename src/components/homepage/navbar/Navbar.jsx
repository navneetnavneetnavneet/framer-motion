import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

const Navbar = () => {
  return (
    <div className='w-full px-10 py-10 text-white relative z-10 flex items-center justify-between'>
        <NavLeft />
        <NavRight />
    </div>
  )
}

export default Navbar