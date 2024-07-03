import React from 'react'
import Page2Content from './Page2Content'
import Page2Animation from './Page2Animation'
import Page2Button from './Page2Button'

const Page2 = () => {
  return (
    <div className='page2 w-full h-screen px-[10%] overflow-hidden overflow-y-auto'>
        <Page2Content />
        <Page2Animation />
        <Page2Button />
    </div>
  )
}

export default Page2