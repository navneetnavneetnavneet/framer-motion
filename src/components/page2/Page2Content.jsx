import React from 'react'

const page2Content = () => {
  return (
    <div className="pt-[10%]">
      <div className="w-full flex items-start justify-between px-20 py-5 border-b-2 border-zinc-400">
        <div className="left w-[65%]">
          <h1 className="text-4xl font-regular tracking-tighter leading-tight">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h1>
          <h5 className="text-xs mt-52 font-semibold text-zinc-600 opacity-50">RECENT WORK</h5>
        </div>
        <div className="right w-[25%] flex flex-col gap-20">
          <p className="text-lg tracking-tight leading-sung text-zinc-600">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
          <div className="w-48 h-48 rounded-full bg-zinc-900 flex items-center justify-center text-white">
            <h3 className="text-xl">About me</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page2Content