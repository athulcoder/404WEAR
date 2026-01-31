import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { JetBrains_Mono,Fira_Code, Source_Code_Pro ,} from 'next/font/google';
import gsap from 'gsap';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useGSAP } from '@gsap/react';


const sourcecode = Source_Code_Pro({
subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dev",
  display: "swap",
});

const firecode = Fira_Code({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
})

const TextSide = () => {

    const headingRef = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".title",{
            y:70,
            duration:1,
            delay:0,
            opacity:0
        }).from(
            ".description",{
                x:-90,
                opacity:0,
                duration:1,

            }
        )
        
},{scope:headingRef})



  return (
    <div              ref={headingRef}
>

         {/* ================= LEFT ================= */}
        <div
          className="relative z-20 space-y-6 text-center md:text-left"
        >

          {/* Badge */}
          <div

            className="mx-auto md:mx-0 inline-flex rounded-full bg-black/5 px-4 py-1 my-4 text-sm font-medium text-gray-700 backdrop-blur"
          >
            <span className={`${sourcecode.className} flex gap-2 justify-center items-center`} >    <HiOutlineMagnifyingGlass/>        Premium Dev Apparel
</span>
          </div>

          {/* Heading */}
          <h1

            className={`${jetbrains.className} title text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl`}
          >
            <span className='text-cyan-600'>class</span> DeveloperFashion{" "}
                
          </h1>

          {/* Text */}
          <p
       
            className={`${jetbrains.className} description text-lg text-green-700 `}
          >
            /*Premium developer apparel for late nights, clean builds,
            and bold ideas. Designed for creators.*/
          </p>

          {/* Buttons */}
          <div
            
            className="flex justify-center gap-3 md:justify-start"
          >
            <button className="rounded-xl bg-gray-900 px-6 py-3 text-white shadow-xl transition hover:scale-105 cursor-pointer w-40 btn1">
              Shop
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-800 transition hover:bg-white w-40 cursor-pointer btn2">
              More
            </button>
          </div>
        </div>
    </div>
  )
}

export default TextSide