import React from 'react'
import TypingCode from './TypeCode'

const Card = () => {
  return (
    <div className='w-full max-md:w-[380px] min-h-[400px] rounded-2xl bg-white/15 backdrop-blur-3xl border border-white/20 shadow-2xl overflow-hidden relative'>
            <div className='bg-[#1e1e1e] w-full h-full absolute z-[-2]'></div>
            <div className="h-10 flex items-center px-4
                bg-white/10
                border-b border-white/20">

      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

    </div>

    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-2 ">
        Feature
      </h2>

        <TypingCode/>


    </div>

    </div>
  )
}

export default Card