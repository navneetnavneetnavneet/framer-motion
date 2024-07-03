import React from 'react'
import HomePage from './components/homepage/HomePage'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <HomePage />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  )
}

export default App