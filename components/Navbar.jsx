"use client";

import { centerNav, endNav } from "@/constants/navItems";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoLogoSkype } from "react-icons/io5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">

      {/* ================= TOP BAR ================= */}
      <nav className="flex h-[70px] items-center justify-between border-b border-gray-100 px-4 md:px-[120px]">

        {/* LEFT (Logo + Menu on Mobile) */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <IoClose size={26}  className="text-black"/> : <IoMenu size={26} className="text-black" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image src={'/logo.png'}  width={50} height={50} alt="404Wear"/>
            <h1 className={`text-2xl font-extrabold uppercase text-violet-700 ${inter.className} font-extrabold`} >
              404Wear
            </h1>
          </Link>
        </div>

        {/* ================= CENTER (Desktop Only) ================= */}
        <ul className="hidden items-center gap-8 font-light text-gray-800 md:flex">

          {centerNav.map(({ url, label }) => (
            <li key={label}>
              <Link
                href={url}
                className="
                  relative pb-1
                  transition
                  hover:text-violet-700
                  after:absolute after:bottom-0 after:left-0
                  after:h-[1px] after:w-0 after:bg-violet-700
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= RIGHT ================= */}
        <ul className="flex items-center gap-3">

          {endNav.map(({ url, label, icon: Icon }) => (
            <li key={label} className="relative">

              {/* Cart Badge */}
              {label === "Cart" && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  2
                </span>
              )}

              <Link
                href={url}
                className="text-gray-700 transition hover:text-purple-700"
              >
                <Icon size={24} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">

          <ul className="flex flex-col divide-y">

            {centerNav.map(({ url, label }) => (
              <li key={label} className="">
                <Link
                  href={url}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 text-gray-800 transition hover:bg-gray-50 border-none  "
                >
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
