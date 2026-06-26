'use client'
import { shopNavs } from '@/constants/shopNav'
import React, { useEffect, useRef } from 'react'
import PriceFilterDialog from './DialogBox';

const SubNav = () => {
    
    
    const navRef = useRef(null);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          const nav = navRef.current;

          if (!nav) return;

          // Hide on scroll down
          if (current > lastScroll.current && current > 80) {
            nav.classList.add("-translate-y-full");
          }
          // Show on scroll up
          else {
            nav.classList.remove("-translate-y-full");
          }

          lastScroll.current = current;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handlePriceRange=()=>{

    
  }
  return (
    <div className='fixed top-[60px] left-0  w-full h-[50px] bg-white  z-[9] trasfrom duration-300 min-md:hidden '   ref={navRef}>
        <ul className=' h-full w-full flex justify-evenly gap-5 items-center   text-sm font-light px-3 overflow-x-auto no-scrollbar min-md:hidden'>
            {shopNavs.map(({label,icon:Icon,action})=>(
                <li key={label} className='border border-gray-300 px-4 rounded-full flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 transform duration-150' onClick={handlePriceRange}>
                    <Icon/>    {label}
                </li>
            )

            )}


           
        </ul>
    </div>
  )
}

export default SubNav