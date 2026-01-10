import { centerNav, endNav } from '@/constants/navItems'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex absolute bg-white w-full h-[70px]  top-0 fixed min-lg:px-[120px]'>
        <nav className='flex justify-between items-center px-3 w-full'>
            <h1 className='font-bold uppercase text-2xl'>
                Spico
            </h1>


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
    </header>
  )
}

export default Navbar