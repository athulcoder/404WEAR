import React from 'react'
import TypingCode from './TypeCode'
import { Source_Code_Pro } from 'next/font/google'

const sourcecode = Source_Code_Pro({
subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dev",
  display: "swap",
})
const Card = () => {
    
  return (
    <div className='w-full max-w-[700px] min-h-[400px] rounded-2xl bg-white/15 backdrop-blur-3xl border border-white/20 shadow-2xl overflow-hidden relative'>
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
      
<h2 className={`text-sm ${sourcecode.className} text-gray-500 mb-2 `}>
       // Feature
      </h2>
        <TypingCode/>


    </div>

    </div>
  )
}

export default Card