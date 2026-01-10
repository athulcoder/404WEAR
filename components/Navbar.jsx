import { centerNav, endNav } from '@/constants/navItems'
import Link from 'next/link'
import React from 'react'
import { IoLogoSkype } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='flex flex-col absolute bg-white w-full h-[70px]  top-0 fixed min-lg:px-[120px] shadow'>
        <nav className='flex justify-between items-center px-3 w-full border-b-[1] border-gray-300'>

            <div className='flex justify-center items-center gap-1 '>

                <IoLogoSkype size={26} className='text-purple-900 cursor-pointer min-md:hidden '/>

                    <h1 className='font-extrabold uppercase text-2xl text-purple-700'>
                        Spico
                    </h1>
            </div>
            


    {/* MIDDLE NAV */}
            <ul className='flex gap-8 items-center justify-end max-md:hidden font-light '>

                {centerNav.map(({url,label,icon:Icon})=>{
                    return(
                        <li key={label}>
                            <Link href={url}> {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <ul className='flex max-md:gap-1 gap-3 items-center '>
            {
                endNav.map(({url,label,icon:Icon})=>{
                    return (
                        <div key={label} className={`${label==="Cart"?"  relative h-[70px] w-[30px] flex flex-col justify-center":""}`}>

                        <Link href={url}  >
                            <div className={`${label==="Cart"?"flex":"hidden"} w-5 h-5 bg-black rounded-full text-sm text-white flex justify-center items-center absolute top-3 right-[-3]`}>2</div>
                            <Icon size={26} />
                        </Link>

                        </div>
                    )
                })
            }

            </ul>


        </nav>


        <div className='w-full h-[30px] bg-white flex min-md:hidden'>
              <ul className='flex gap-5 items-center w-full  justify-center font-light '>

                {centerNav.map(({url,label,icon:Icon})=>{
                    return(
                        <li key={label} className='flex gap-2 justify-center items-center'>
                            <Icon/>
                            <Link href={url}> {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </header>
  )
}

export default Navbar