import { motion } from 'framer-motion';
import React, { useRef } from 'react'

const TextDiv = () => {

    const parentRef = useRef(null);
    const hoverRef = useRef(null);

    const mouseEntering = () => {
        hoverRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    }

    const mouseLeaving = () => {
        hoverRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
    }

    const mouseMoving = (e) => {
        hoverRef.current.style.left = (e.clientX - parentRef.current.getBoundingClientRect().x) + "px";
        hoverRef.current.style.top = (e.clientY  - parentRef.current.getBoundingClientRect().y) + "px";
    }

  return (
    <motion.div 
    ref={parentRef} 
    onMouseEnter={mouseEntering}
    onMouseLeave={mouseLeaving}
    onMouseMove={(e) => mouseMoving(e)}
    className='parent relative'>
        <div ref={hoverRef} className='imagediv w-[28vw] h-[28vw] absolute -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden'>
            <motion.div className='w-full h-full'>
                <img className='w-full h-full object-cover' src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg" alt="" />
                <img className='w-full h-full object-cover' src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg" alt="" />
                <img className='w-full h-full object-cover' src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg" alt="" />
                <img className='w-full h-full object-cover' src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg" alt="" />
            </motion.div>
        </div>

        <div className='text w-full h-full'>
            <div className='hover:text-zinc-400 relative hover:px-16 transition-all w-full flex items-center justify-between px-20 py-10 border-b border-zinc-400'>
                <div id='overlay' className='h-full w-full z-40 absolute top-0 left-0'></div>
                <h1 className='text-[5vw] font-normal uppercase'>Twice</h1>
                <h3 className='text-lg tracking-tight leading-sung text-zinc-600'>Intraction & Development</h3>
            </div>
            <div className='hover:text-zinc-400 hover:px-16 transition-all w-full flex items-center justify-between px-20 py-10 border-b border-zinc-400'>
                <h1 className='text-[5vw] font-normal capitalize'>The Damai</h1>
                <h3 className='text-lg tracking-tight leading-sung text-zinc-600'>Design & Development</h3>
            </div>
            <div className='hover:text-zinc-400 hover:px-16 transition-all w-full flex items-center justify-between px-20 py-10 border-b border-zinc-400'>
                <h1 className='text-[5vw] font-normal uppercase'>Fabric<sup className='text-4xl font-semibold'>TM</sup></h1>
                <h3 className='text-lg tracking-tight leading-sung text-zinc-600'>Design & Development</h3>
            </div>
            <div className='hover:text-zinc-400 hover:px-16 transition-all w-full flex items-center justify-between px-20 py-10 border-b border-zinc-400'>
                <h1 className='text-[5vw] font-normal capitalize'>Aanstekelijk</h1>
                <h3 className='text-lg tracking-tight leading-sung text-zinc-600'>Design & Development</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default TextDiv