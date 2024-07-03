import React from 'react'

const ImageDiv = (props) => {
  return (
    <div className='w-[30vw] h-full flex-shrink-0 overflow-hidden'>
        <img className='w-full h-full object-cover' src={props.url} alt="" />
    </div>
  )
}

export default ImageDiv