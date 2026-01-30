import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { Inter, Montserrat } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const TextSide = () => {

    const headingRef = useRef(null);
    
    useGSAP(()=>(
        gsap.from(headingRef.current,{
            y:100,
            duration:2,
            delay:0.3,
            opacity:0
        })
    ),{scope:headingRef})

  return (
    <div>

         {/* ================= LEFT ================= */}
        <div
          className="relative z-20 space-y-6 text-center md:text-left"
        >

          {/* Badge */}
          <div
       
            className="mx-auto md:mx-0 inline-flex rounded-full bg-black/5 px-4 py-1 my-4 text-sm font-medium text-gray-700 backdrop-blur"
          >
             Premium Dev Apparel
          </div>

          {/* Heading */}
          <h1

            ref={headingRef}
            className={`${montserrat.className} text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl`}
          >
            Where{" "}
            <span className="text-indigo-600 bg-clip-text ">
              Code
            </span>{" "}
            Meets
            <br />
            Fashion
          </h1>

          {/* Text */}
          <p
       
            className={`${inter.className} text-lg text-gray-600`}
          >
            Premium developer apparel for late nights, clean builds,
            and bold ideas. Designed for creators.
          </p>

          {/* Buttons */}
          <div
            
            className="flex justify-center gap-3 md:justify-start"
          >
            <button className="rounded-xl bg-gray-900 px-6 py-3 text-white shadow-xl transition hover:scale-105 cursor-pointer w-40 ">
              Shop
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-800 transition hover:bg-white w-40 cursor-pointer">
              More
            </button>
          </div>
        </div>
    </div>
  )
}

export default TextSide